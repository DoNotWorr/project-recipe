import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RecipeThumbnail from "../components/RecipeThumbnail/RecipeThumbnail.jsx";
import { BrowserRouter as Router } from "react-router-dom";

const recipe = {
  id: "1",
  images: {
    small: "./images/chickenpasta_small.jpg",
  },
  name: "Cake",
};

describe("<RecipeThumbnail />", () => {
  test("Elements render", () => {
    render(
      <Router>
        <RecipeThumbnail recipe={recipe} key={recipe.id} />
      </Router>
    );

    const title = screen.getByText(recipe.name);
    const divWithBackgroundImage = screen.getByTestId("recipeThumbnail");
    const styles = getComputedStyle(divWithBackgroundImage);

    expect(title).toBeInTheDocument();
    expect(styles.backgroundImage).toBe(`url(${recipe.images.small})`);
  });
});
