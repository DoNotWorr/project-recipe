import React, { Component } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import RecipeThumbnail from "../RecipeThumbnail/RecipeThumbnail";
import styles from "./Popular.module.css";

export default class Popular extends Component {
  render() {
    const recipes = this.props.recipes;
    const splideSlides = recipes.map((recipe) => (
      <SplideSlide className={styles.item}>
        <RecipeThumbnail recipe={recipe} key={recipe.id} />
      </SplideSlide>
    ));

    return (
      <>
        <h2>Popular Dishes</h2>
        <Splide
          className={styles.container}
          options={{
            autoWidth: true,
            focus: "center",
            gap: "1rem",
            trimSpace: false,
            easing: "ease",
            autoplay: true,
            interval: 4000,
          }}>
          {splideSlides}
        </Splide>
      </>
    );
  }
}
