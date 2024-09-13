import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { RouterProvider } from "react-router-dom";
import store from "../../src/redux/store";
import Layout from "../../src/components/Layout";
import Home from "../../src/pages/Home";

jest.mock("../../src/components/Layout", () => () => (
  <div data-testid="layout">Layout</div>
));

describe("Main Application", () => {
  test("renders Layout component with RouterProvider", () => {
    // Créer un routeur fictif pour les tests
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Layout />}>
          <Route index element={<Home data-testid="home" />} />
        </Route>,
      ),
    );

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>,
    );

    // Vérifie que le Layout est présent
    expect(screen.getByTestId("layout")).toBeInTheDocument();
  });
});
