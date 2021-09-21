import React, { Component } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import RecipeThumbnail from "../RecipeThumbnail/RecipeThumbnail";
import styles from "./Popular.module.css";

export default class Popular extends Component {
  render() {
    const recipes = this.props.recipes;
    const splideSlides = recipes.map((recipe) => (
      <SplideSlide className={styles.item} key={recipe.id}>
        <RecipeThumbnail recipe={recipe} key={recipe.id} sliderStyle />
      </SplideSlide>
    ));
    return (
      <>
        <h2>Popular Dishes</h2>
        <Splide
          className={styles.container}
          options={{
            perPage: 5,
            easing: "ease",
            interval: 5000,
            breakpoints: { 599: { perPage: 3 }, 999: { perPage: 4 } },
            classes: {
              // Add classes for arrows.
              arrows: `splide__arrows ${styles.arrows}`,
              arrow: `splide__arrow ${styles.arrow}`,
              prev: `splide__arrow--prev ${styles.prev}`,
              next: `splide__arrow--next ${styles.next}`,

              // Add classes for pagination.
              pagination: `splide__pagination ${styles.pagination}`, // container
              page: `splide__pagination__page ${styles.page}`, // each button
            },
          }}>
          {splideSlides}
        </Splide>
      </>
    );
  }
}
