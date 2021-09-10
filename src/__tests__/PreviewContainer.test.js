import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PreviewContainer from "../components/PreviewContainer/PreviewContainer";

const smallImage = "./images/meat_potato_small.jpg";
const name = "Cake";

const recipe = {
  images: {
    small: smallImage,
  },
  name: name,
};

describe("<PreviewContainer />", () => {
  test("it should mount", () => {
    render(<PreviewContainer recipe={recipe} />);

    const previewContainer = screen.getByTestId("PreviewContainer");
    const h1 = screen.getByText(name);
    const divWithBackground = screen.getByTestId("backgroundImage");

    expect(previewContainer).toBeInTheDocument();
    expect(h1).toBeInTheDocument();
    expect(divWithBackground.style).toHaveProperty(
      "backgroundImage",
      `url(${recipe.images.small})`
    );
  });
});
