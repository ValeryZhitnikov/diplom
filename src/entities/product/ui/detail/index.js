import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import MainButton from 'shared/ui/MainButton/MainButton';
import { addToCart } from 'shared/lib/actions/actionCreators';

const ProductDetail = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  const initialProduct = {
    id: product.id,
    name: product.title,
    price: product.price,
    size: null,
    count: 1
  }
  const [ productToCart, setProductToCart ] = useState(initialProduct);
  const [ productCount, setProductCount ] = useState(1);
  const [ selectedSize, setSelectedSize ] = useState(null);

  const selectSizeHandler = (size) => {
    setSelectedSize(size);
    setProductToCart(prevProduct => {
      return {
        ...prevProduct,
        size
      }
    });
  }

  const setProductCountToCart = (count) => {
    setProductToCart(prevProduct => {
      return {
        ...prevProduct,
        count
      }
    });
  }

  const countProductUp = () => {
    const newCount = productCount + 1 <= 10 ? productCount + 1 : productCount;
    setProductCount(newCount);
    setProductCountToCart(newCount);
  }

  const countProductDown = () => {
    const newCount = productCount - 1 >= 0 ? productCount - 1 : productCount;
    setProductCount(newCount);
    setProductCountToCart(newCount);
  }

  const addToCartHandler = () => {
    dispatch(addToCart(productToCart));
  }

  const sizes = product.sizes.map((size, i) => {
    let classes = `catalog-item-size ${size.size == selectedSize && 'selected'}`
    return size.avalible ? <span onClick={() => selectSizeHandler(size.size)} key={i} className={classes}>{size.size}</span> : null;
  })

  return (
    <div className="row">
      <div className="col-5">
          <img src={product.images[0]}
              className="img-fluid" alt="" />
      </div>
      <div className="col-7">
          <table className="table table-bordered">
              <tbody>
                  <tr>
                      <td>Артикул</td>
                      <td>{product.sku}</td>
                  </tr>
                  <tr>
                      <td>Производитель</td>
                      <td>{product.manufacturer}</td>
                  </tr>
                  <tr>
                      <td>Цвет</td>
                      <td>{product.color}</td>
                  </tr>
                  <tr>
                      <td>Материалы</td>
                      <td>{product.material}</td>
                  </tr>
                  <tr>
                      <td>Сезон</td>
                      <td>{product.sku}</td>
                  </tr>
                  <tr>
                      <td>Повод</td>
                      <td>{product.season}</td>
                  </tr>
                  <tr>
                      <td>Цена</td>
                      <td>{product.price} руб.</td>
                  </tr>
              </tbody>
          </table>
          {sizes && (
            <div className="text-center">
              <p>Размеры в наличии: {sizes} </p>
              <p>Количество: <span className="btn-group btn-group-sm pl-2">
                      <button onClick={countProductDown} className="btn btn-secondary">-</button>
                      <span className="btn btn-outline-primary">{productCount}</span>
                      <button onClick={countProductUp} className="btn btn-secondary">+</button>
                  </span>
              </p>
          </div>
          )}
          <MainButton disabled={!selectedSize && true} handlerClick={addToCartHandler} buttonClass="btn-danger btn-block btn-lg" text="В корзину" />
      </div>
    </div>
  )
};

export default ProductDetail;
