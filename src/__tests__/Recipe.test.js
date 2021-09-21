import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Recipe from "../components/Recipe/Recipe";
import { BrowserRouter } from "react-router-dom";

const sampleRecipe = {
  id: "1",
  name: "Avokado Sandwich",
  ingredients: [
    {
      name: "flour",
      quantity: 2,
      unit: "table spoon",
    },
    {
      name: "sugar",
      quantity: 10,
      unit: "gram",
    },
    {
      name: "milk",
      quantity: 1,
      unit: "deciliter",
    },
  ],
  instructions: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit eu quam quis porta.",
    "Duis magna elit, sodales ut nisl et, efficitur tristique lacus.",
  ],
  category: "Appetizers",
  images: {
    small: "/images/avokado_small.jpg",
    big: "/images/avokado_big.jpg",
  },
};

const mockFunction = (id) => sampleRecipe;

describe("<Recipe />", () => {
  test("should work", () => {
    render(
      <BrowserRouter>
        <Recipe getRecipeById={mockFunction} key={sampleRecipe.id} />
      </BrowserRouter>
    );

    const h2 = screen.getByText(sampleRecipe.name);
    const img = screen.getByAltText(sampleRecipe.name);

    expect(h2).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
});
