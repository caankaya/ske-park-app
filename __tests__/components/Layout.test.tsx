import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "../../src/components/Layout";

// Mock des sous-composants
jest.mock("../../src/components/Header", () => () => (
  <div data-testid="header">Header</div>
));
jest.mock("../../src/sub-components/InfoModal", () => () => (
  <div data-testid="info-modal">InfoModal</div>
));

describe("Layout Component", () => {
  test("should render Header, Outlet, and InfoModal components", () => {
    // Utilisation de MemoryRouter pour simuler la navigation
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>,
    );

    // Je vérifie que le Header est rendu
    expect(screen.getByTestId("header")).toBeInTheDocument();

    // Je vérifie que l'InfoModal est rendu
    expect(screen.getByTestId("info-modal")).toBeInTheDocument();
  });


});
