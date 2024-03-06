import Hero from "./components/Hero.astro";
import Routine from "./components/Routine.astro";
import ProductHighlight from "./components/ProductHighlight.astro";
import Editorial from "./components/Editorial.astro";
import Cta from "./components/Cta.astro";
import Card from "./components/Card.astro";
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
  Card
};

export function getComponentForName(name: string) {
  return mapping[name] ?? NoComponentFile
}