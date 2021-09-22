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

const sampleRecipe2 = {
  id: "2",
  name: "Salami Sandwich",
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

describe("<Recipe />", () => {
  test("should work", () => {
    const mockFunction = jest.fn().mockReturnValue(sampleRecipe);
    const tree = render(
      <BrowserRouter>
        <Recipe getRecipeById={mockFunction} key={sampleRecipe.id} />
      </BrowserRouter>
    );

    expect(tree).toMatchSnapshot();
  });

  test("should work with other recipe", () => {
    const mockFunction = jest.fn().mockReturnValue(sampleRecipe2);
    render(
      <BrowserRouter>
        <Recipe getRecipeById={mockFunction} key={sampleRecipe2.id} />
      </BrowserRouter>
    );
  });
});
