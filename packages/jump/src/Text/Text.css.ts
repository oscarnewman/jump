import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { createTextStyle } from "@capsizecss/vanilla-extract";
import { mapValues } from "lodash";
import { vars } from "../vars.css";

export const reset = style({
  margin: 0,
  padding: 0,
});

export const text = recipe({
  base: {
    margin: 0,
    padding: 0,
  },
  variants: {
    size: mapValues(vars.fontSizes, (style) => createTextStyle(style)),
  },
});
