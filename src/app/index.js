import { withProviders } from "./providers";
import './index.css';
import { Routing } from "pages";
import { Provider } from "react-redux";
import store from "shared/lib/store";

const App = () => {
  return (
  <Provider store={store}>
    <Routing />
  </Provider>
  )
}

export default withProviders(App);