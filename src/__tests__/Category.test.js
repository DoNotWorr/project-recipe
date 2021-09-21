import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Category from "../components/Category/Category";
import { BrowserRouter } from "react-router-dom";

const recipes = {
  recipes: [
    {
      id: 1,
      name: "Meat and Potatoes",
      images: {
        small: "./images/meat_small.jpg",
      },
      category: "Main Course",
    },
    {
      id: 2,
      name: "Chicken and Pasta",
      images: {
        small: "./images/chicken_small.jpg",
      },
      category: "Main Course",
    },
    {
      id: 3,
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
    render(
      <BrowserRouter>
        <Category recipes={recipes.recipes} category="Main Course" />
      </BrowserRouter>
    );

    const overviewContainer = screen.getByTestId("OverviewContainer");

    expect(overviewContainer).toBeInTheDocument();
  });
});
