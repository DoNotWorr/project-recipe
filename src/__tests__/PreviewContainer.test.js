import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RecipeThumbnail from "../components/RecipeThumbnail/RecipeThumbnail";

const smallImage = "./images/meat_potato_small.jpg";
const name = "Cake";

const recipe = {
  images: {
    small: smallImage,
  },
  name: name,
};

describe("<RecipeThumbnail />", () => {
  test("it should mount", () => {
    render(<RecipeThumbnail recipe={recipe} />);

    const RecipeThumbnail = screen.getByTestId("RecipeThumbnail");
    const h1 = screen.getByText(name);
    const divWithBackground = screen.getByTestId("backgroundImage");

    expect(RecipeThumbnail).toBeInTheDocument();
    expect(h1).toBeInTheDocument();
    expect(divWithBackground.style).toHaveProperty(
      "backgroundImage",
      `url(${recipe.images.small})`
    );
  });
});
