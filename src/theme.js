import { rgba, tint } from 'polished';

let color = {
  base: '#443F3F',
  primary: '#CF3F02',
  secondary: '#5EB1BF'
};

color = {
  ...color,
  background: '#FFFFFF',
  surface: '#FFFFFF',
  mist: rgba(color.base, 0.04),
  shadow: rgba(color.base, 0.08),
  smoke: rgba(color.base, 0.16),
  lightgray: '#EEEEEE',
  gray: '#DBDBDB',
  darkgray: '#666666',
  link: color.primary,
  danger: '#C0392B',
  success: '#4CB5AE',
  warning: '#F39C12',
  info: '#2980B9'
};

color = {
  ...color,
//   silk: `radial-gradient(farthest-side, ${color.surface}, ${rgba(color.surface, 0.64)})`
};

const type = {
  base: {
    root: '16px',
    size: '1rem',
    line: '1.5',
    color: tint(0.08, color.base),
    family: '"Open Sans", sans-serif',
    style: 'normal',
    weight: 300,
    light: 300,
    regular: 400,
    medium: 400,
    bold: 700
  },
  heading: {
    family: '"Open Sans", sans-serif',
    style: 'normal',
    weight: 700,
    light: 300,
    regular: 400,
    medium: 400,
    bold: 700
  }
};

const shape = {
  rounded: '0.25rem',
  ellipsoid: '320rem'
};

const layout = {
  space: '1rem',
  border: '1px',
  min: '960px',
  max: '1280px'
};

const boxShadow = {
  inset: 'inset 0px 0px 3px 0px rgba(0,0,0,0.2);',
  input: '0 -1px 1px 0 rgba(0,0,0,0.08), 0 2px 6px 0 rgba(0,0,0,0.16);'
};

export default {
  main: {
    layout,
    color,
    type,
    shape,
    boxShadow
  }
};

/**
 * Media query ranges used by the media utility.
 * They're not exported with the main theme because the utility does not
 * build the media functions in runtime, needing the values beforehand.
 */
export const mediaRanges = {
  xsmall: [null, 543],
  small: [544, 767],
  medium: [768, 991],
  large: [992, 1199],
  xlarge: [1200, null]
};
