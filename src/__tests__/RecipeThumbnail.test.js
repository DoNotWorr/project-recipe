import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RecipeThumbnail from "../components/RecipeThumbnail/RecipeThumbnail.jsx";

const recipe = {
  images: {
    small: "./images/meat_small.jpg",
  },
  name: "Cake",
};

describe("<RecipeThumbnail />", () => {
  test("Elements render", () => {
    render(<RecipeThumbnail recipe={recipe} />);

    const title = screen.getByText(recipe.name);
    const image = screen.getByAltText("recipe image");

    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(image).toHaveProperty(
      "src",
      `http://localhost/${recipe.images.small.slice(2)}`
    );
  });
});
