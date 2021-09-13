import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import OverviewContainer from "./OverviewContainer";

const recipes = {
  recipes: [
    {
      name: "Meat and Potatoes",
      images: {
        small: "./images/meat_small.jpg",
      },
    },
    {
      name: "Chicken and Pasta",
      images: {
        small: "./images/chicken_small.jpg",
      },
    },
    {
      name: "Fish and Potatoes",
      images: {
        small: "./images/fish_small.jpg",
      },
    },
  ],
};

describe("<RecipeThumbnail />", () => {
  test("Elements render", () => {
    render(<OverviewContainer recipes={recipes.recipes} />);

    const recipeThumbnails = screen.getAllByTestId("recipeThumbnail");

    expect(recipeThumbnails.length).toEqual(recipes.recipes.length);
  });
});
