import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const clickableBase = recipe({
  base: {
    cursor: "pointer",
    border: "none",
    appearance: "none",
    background: "none",
    padding: 0,
    margin: 0,
    textAlign: "left",
    alignItems: "center",
    position: "relative",
    borderRadius: 0,
    gap: '8px',
    color: "unset",
    fontFamily: 'unset',
    fontSize: '1rem',

    selectors: {
      "&:disabled,&.disabled": {
        cursor: "auto",
        pointerEvents: "none",
      },
      "&:hover,&:active,&:visited": {
        color: "unset",
      },
    },
  },
  variants: {
    display: {
      default: {
        display: "flex",
      },
      inline: {
        display: "inline-flex",
      },
    },
  },
  defaultVariants: {
    display: "default",
  },
});

export const invisible = style({
  visibility: "hidden",
});

export const outerContent = style({
  display: "contents",
});

export const innerContent = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  pointerEvents: "none",
});
