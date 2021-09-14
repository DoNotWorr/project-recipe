import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Category from "./Category";

const recipes = {
  recipes: [
    {
      name: "Meat and Potatoes",
      images: {
        small: "./images/meat_small.jpg",
      },
      category: "Main Course",
    },
    {
      name: "Chicken and Pasta",
      images: {
        small: "./images/chicken_small.jpg",
      },
      category: "Main Course",
    },
    {
      name: "Fish and Potatoes",
      images: {
        small: "./images/fish_small.jpg",
      },
      category: "Main Course",
    },
  ],
};

describe("<RecipeThumbnail />", () => {
  test("Elements render", () => {
    render(<Category recipes={recipes.recipes} category="Main Course" />);

    const overviewContainer = screen.getByTestId("OverviewContainer");

    expect(overviewContainer).toBeInTheDocument();
  });
});
