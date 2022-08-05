import React from 'react';
import MainButton from 'shared/ui/MainButton/MainButton';

const ProductDetail = (props) => {
  const { product } = props;

  const sizes = product.sizes.map((size, i) => {
    return size.avalible ? <span key={i} className="catalog-item-size">{size.size}</span> : null;
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
          {/* TODO Доделать счетчик количества */}
          {sizes && (
            <div className="text-center">
              <p>Размеры в наличии: {sizes} </p>
              <p>Количество: <span className="btn-group btn-group-sm pl-2">
                      <button className="btn btn-secondary">-</button>
                      <span className="btn btn-outline-primary">1</span>
                      <button className="btn btn-secondary">+</button>
                  </span>
              </p>
          </div>
          )}
          <MainButton buttonClass="btn-danger btn-block btn-lg" text="В корзину" />
      </div>
    </div>
  )
};

export default ProductDetail;