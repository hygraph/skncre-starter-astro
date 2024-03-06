import Hero from "./components/Hero.astro";
import Routine from "./components/Routine.astro";
import ProductHighlight from "./components/ProductHighlight.astro";
import Editorial from "./components/Editorial.astro";
import Cta from "./components/Cta.astro";
import Card from "./components/Card.astro";
import Tutorial from "./components/Tutorial.astro";
import TutorialItem from "./components/TutorialItem.astro"
import ProductList from "./components/ProductList.astro"

import NoComponentFile from "./components/NoComponentFile.astro";

type Mapping = {
  [name: string]: any
}

export const mapping: Mapping = {
  Editorial,
  Hero,
  ProductHighlight,
  Routine,
  Cta,
  Card,
  Tutorial,
  TutorialItem,
  ProductList
};

export function getComponentForName(name: string) {
  return mapping[name] ?? NoComponentFile
}

export function isPreview() {
  return import.meta.env.HYGRAPH_IS_PREVIEW === "yes"
}