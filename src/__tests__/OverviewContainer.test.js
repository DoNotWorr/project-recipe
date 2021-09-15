import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import OverviewContainer from "../components/OverviewContainer/OverviewContainer";

const recipes = {
  recipes: [
    {
      id: 1,
      name: "Meat and Potatoes",
      images: {
        small: "./images/meat_small.jpg",
      },
    },
    {
      id: 2,
      name: "Chicken and Pasta",
      images: {
        small: "./images/chicken_small.jpg",
      },
    },
    {
      id: 3,
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
