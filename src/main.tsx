import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import Layout from "./components/Layout";

// Importation du styles
import "./styles/index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import Home from "./pages/Home";
library.add(fas, far, fab);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={""}>
      <Route errorElement={""}>
        <Route index element={<Home />} />
        {/* Compléter le router avec d'autres pages à partir de là*/}
        {/* Oubliez pas d'ajouter Outlet dans le composant Layout*/}
      </Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
