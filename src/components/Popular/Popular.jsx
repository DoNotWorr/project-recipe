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
            gap: "1rem",
            perPage: 2,
            easing: "ease",
            autoplay: true,
            interval: 4000,
            breakpoints: {},
            classes: {
              // Add classes for arrows.
              arrows: "splide__arrows your-class-arrows",
              arrow: "splide__arrow your-class-arrow",
              prev: "splide__arrow--prev your-class-prev",
              next: "splide__arrow--next your-class-next",

              // Add classes for pagination.
              pagination: "splide__pagination your-class-pagination", // container
              page: "splide__pagination__page your-class-page", // each button
            },
          }}>
          {splideSlides}
        </Splide>
      </>
    );
  }
}
