import { withProviders } from "./providers";
import './index.css';
import { Routing } from "pages";
import { Provider } from "react-redux";
import store from "shared/lib/store";
import { saveState } from "shared/lib/localStorage";

store.subscribe(() => {
  saveState({
    cartList: store.getState().cartList
  });
});

const App = () => {
  return (
  <Provider store={store}>
    <Routing />
  </Provider>
  )
}

export default withProviders(App);