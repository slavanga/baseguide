# [Baseguide](https://basegui.de)

[![npm version](https://badge.fury.io/js/baseguide.svg)](https://www.npmjs.com/package/baseguide)

Baseguide is a flexible, fluid and fun CSS framework.

- **Responsive** and scalable components
- **Robust** flexbox grid
- **Extendable** breakpoint system
- **Consistent** vertical rhythm and modular scale

## Table of Contents

- [Install](#install)
- [Development](#development)
- [Philosophy](#philosophy)
- [Breakpoints](#breakpoints)
- [Fluid Scaling](#fluid-scaling)
- [Spacing](#spacing)
- [Typography](#typography)
- [Grid](#grid)
- [Embed](#embed)
- [Buttons](#buttons)
- [Forms](#forms)
- [Browser Support](#browser-support)
- [Inspired By](#inspired-by)
- [License](#license)

## Install

### Package Managers

[npm](https://www.npmjs.com/package/baseguide): `npm install baseguide`

[yarn](https://yarnpkg.com/en/package/baseguide): `yarn add baseguide`

### Download

- [baseguide.css](https://raw.githubusercontent.com/slavanga/baseguide/master/dist/baseguide.css) (uncompressed)
- [baseguide.min.css](https://raw.githubusercontent.com/slavanga/baseguide/master/dist/baseguide.min.css) (compressed)

### CDN

This is great for prototyping, but doesn’t allow any customization. To load Baseguide via [unpkg](https://unpkg.com), add this to your `<head>`:

```html
<link rel="stylesheet" href="https://unpkg.com/baseguide@4.1.1/dist/baseguide.min.css" />
```

## Development

### Dependencies

Use `npm install` or `yarn install` to install the dev dependencies.

### NPM Scripts

The included NPM scripts take care of compiling, optimizing and minifying.

| Command             | Description                                |
| :------------------ | :----------------------------------------- |
| `npm run start`     | Build and watch for changes                |
| `npm run build`     | Build once                                 |
| `npm run watch`     | Watch and build when a change occurs       |
| `npm run lint`      | Lint and fix the source files              |

### Sass

Default variables can be changed before importing Baseguide.
Take a look at the [_settings.scss](https://github.com/slavanga/baseguide/blob/master/baseguide/01-tools/_settings.scss) file to see all variables.

```scss
$button-bg: #bada55; // 1. Customize default variables

@import 'baseguide'; // 2. Import Baseguide

// 3. Add your own styles here
```

## Philosophy

Baseguide is a framework in the truest sense and does not try to be a complete UI library. As the following list shows, it strives to force as less opinions as possible.

* Breakpoints and other settings are held in sass maps to be the most flexible
* Class names can have prefixes for objects, components and utilities
* BEM naming is not enforced and can be controlled with `$meta-class-modifier` and `$meta-class-element`
* Default button cursor is configurable
* Poly fluid scaling is integrated in key parts of the frameworks, but can be disabled globally

## Breakpoints

Breakpoints can easily be configured using the `$mq-breakpoints` map. Note that the breakpoints have to be sorted from small to large.

The default configuration looks like this:

```scss
$mq-breakpoints: (
  xs: 0px,
  sm: 375px,
  md: 680px,
  lg: 960px,
  xl: 1200px,
);
```

Baseguide generates all the necessary grid and responsive visibility classes based on these breakpoints.

### Media Queries

Media Queries are handled by [Sass MQ](https://github.com/sass-mq/sass-mq).

```scss
// include the media query mixin and pass the breakpoint key
@include mq(md) {
}
```

The snippet above compiles to the following CSS:

```css
@media (min-width: 42.5em) {
}
```

Check out the [Sass MQ documentation](https://sass-mq.github.io/sass-mq/#mixin-mq) for more details and advanced usage of media queries.

### Breakpoint Loop

The `loop-breakpoints` mixin iterates through all breakpoints. It sets three global variables and outputs the `@content` for each breakpoint.

```scss
@include loop-breakpoints($breakpoints: $mq-breakpoints, $inclusive: true, $mq: true) {
  @debug $breakpoint;
  @debug is-first-breakpoint($breakpoint);
  @debug is-last-breakpoint($breakpoint);
}
```

It’s a powerful tool that for example allows the generation of additional responsive helper classes.

```scss
// Breakpoint specific text alignment classes
@include loop-breakpoints {
  .#{$meta-prefix-utilities}text-#{$breakpoint}-left {
    text-align: left;
  }

  .#{$meta-prefix-utilities}text-#{$breakpoint}-center {
    text-align: center;
  }

  .#{$meta-prefix-utilities}text-#{$breakpoint}-right {
    text-align: right;
  }
}
```
```scss
// Breakpoint specific type utility classes
@include loop-breakpoints {
  @each $name in map-keys($type-variations) {
    .#{$meta-prefix-utilities}type-#{$name}-#{$breakpoint} {
      @include type($name);
    }
  }
}
```

## Fluid Scaling

With fluid scaling, values between two points (min and max) can be interpolated using vh units and calc. Originally this technique was mostly used for font-size, but it can be used with any CSS property that supports calc its value. There is an [article](https://www.madebymike.com.au/writing/precise-control-responsive-typography/) that explains the concept.

All maps in the settings with a min value support fluid scaling, if a max value is added.
By default the scaling happens between the breakpoints sm and xl. These breakpoints are configurable in `$fluid-breakpoints`.

Using the `fluid-calc` mixin you can apply custom fluid scaling for your own use cases.
Pixel values for min and max will automatically be converted to Rem.

```scss
.my-component {
  @include fluid-calc('padding', (
    min: 20px,
    max: 30px,
  ),
  (
    min: md,
    max: xl,
  ));
}
```

Use the global settings switch `$fluid-scaling` to disable the fluid scaling feature.

**Warning: Using fluid scaling with font-size can cause a WCAG failure under [1.4.4 Resize text (AA)](https://www.w3.org/WAI/WCAG21/Techniques/failures/F94.html), because a user may be unable to scale the text to 200% of its original size. Be certain to test the results with zoom.**

[Read more about Responsive Type and Zoom](https://adrianroselli.com/2019/12/responsive-type-and-zoom.html)

## Spacing

The mixin `spacing` is a small wrapper for `fluid-calc` that looks for spacings in the map `$spacing-variations`.

```scss
.my-component {
  @include spacing('margin-bottom', 'my-spacing', $negative: true);
}

.my-component {
  @include spacing('margin-bottom', 'my-spacing');
}
```

If no sizes parameter is passed then the first value (base) of the `$spacing-variations` map will be used.

```scss
.my-component {
  @include spacing('margin-bottom'); // base spacing will be used
}
```

## Typography

### Variations

Type variations are defined in the `$type-variations` map.
An advanced type config with scaling font-sizes per breakpoint could look like this:

```scss
$type-variations: (
  base: (
    xs: (
      font-family: $font-family-base,
      font-size: (
        min: $font-size-base,
      ),
      font-weight: $font-weight-base,
      line-height: $line-height-base,
    ),
    sm: (
      font-size: (
        min: $font-size-base,
        max: $font-size-base * 1.5,
      ),
    ),
    xl: (
      font-size: (
        min: $font-size-base * 1.5,
      ),
    ),
  ),
  // other variations...
);
```

Single type variations can be applied using the `type` mixin:

```scss
.my-component {
  @include type();

  &__heading {
    @include type('headings');
  }
}
```

### Headings (Type Scale)

The value for `$type-scale-base` defines the smallest heading (h6). From there the remaining heading font sizes are calculated using the `$type-scale`. Major Third (1.25) is the default type scale. Check [type-scale.com](https://type-scale.com/) for more scales.

By using a map for `$type-scale-base` you can scale all headings up or down in harmony, respecting the `$fluid-breakpoints`.

```scss
$type-scale-base: (
  min: $font-size-base,
  max: $font-size-base * 2,
);
```


## Grid

The grid system is responsive and follows the mobile first pattern. It offers predefined classes for quick layouts as well as powerful mixins for more semantic layouts.

The number of columns is controlled by the `$grid-columns` variable which defaults to 12.

### Basic Example

```html
<div class="container">
  <div class="row">
    <div class="col col-md-6"></div>
    <div class="col col-md-6"></div>
  </div>
</div>
```

### Gutters

The gutters are controlled by the `$grid-gutter` variable. It can either be a global value across all breakpoints or a map with gutter values per breakpoint.

```scss
// set gutter for all breakpoints
$grid-gutter: 60px;
```

```scss
// start with 20px gutter and increase to 40px from the md breakpoint
// note: breakpoints can be skipped to keep the last defined value
$grid-gutter: (
  xs: 20px,
  md: 40px,
);
```

Accessing gutter values is easy using the `get-gutter` function. The smallest gutter gets returned by default.

```scss
.col {
  margin-bottom: get-gutter();

  @include mq(md) {
    margin-bottom: get-gutter(md);
  }
}
```

### Mixins

The grid mixins can be used to create custom containers, rows and columns.

```scss
// $gutter: gutter width in pixels or map with gutters, defaults to $grid-gutter
// $size: column width as percentage value, decimal number or column count
// $columns: an integer, the total number of columns, defaults to $grid-columns
// $width: container width in pixels, defaults to $grid-container

@include container($gutter, $width);
@include row($gutter);

@include column-base($gutter, $size, $columns);
@include column($size, $columns);

@include column-push($size, $columns);
@include column-pull($size, $columns);
@include column-offset($size, $columns);
```

#### Two Column Layout

```scss
@include mq(sm) {
  .col-content {
    @include column(80%);
  }

  .col-sidebar {
    @include column(40%);
  }
}
```

```html
<div class="container">
  <div class="row">
    <article class="col col-content">Main Content</article>
    <aside class="col col-sidebar">Sidebar</aside>
  </div>
</div>
```


## Embed

Use the embed object for fixed ratio resources like videos or maps using iframes.
The default (base) ratio is 16 by 9. Extend the `$embed-ratios` map to add more ratios.

```scss
$embed-ratios: (
  base: 16 by 9,
  square: 1 by 1,
);
```

```html
<div class="embed-responsive embed-responsive-square">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.28953980305!2d-74.26055112084052!3d40.69766840757481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York+City%2C+New+York%2C+USA!5e0!3m2!1sde!2sch!4v1504720998876"
    width="600"
    height="450"
    frameborder="0"
    style="border:0"
    allowfullscreen
  ></iframe>
</div>
```

The embed selector is defined by the `$embed-selector` variable.
Custom ratios will respect the `$meta-class-modifier` setting.

## Buttons

It’s recommended to use a class selector instead of an element selector for `$button-selector`. Buttons are often used outside of forms (e.g. close buttons) where a lot of the base styles would have to be undone.

Buttons consist of base settings as well as variations. Both can be configured in the settings file.
The first button variation (base) just adds to the existing base styles and get’s no class output. All further variations get their own class output, respecting the `$meta-class-modifier` setting.

### Variations

An advanced button variations config could look like this:

```scss
$button-variations: (
  base: (
    selectors: (
      '&:focus': (
        box-shadow: 0 0 0 0.188rem rgba($color-primary, 0.5),
      ),
      '&:disabled, &.disabled': (
        opacity: 0.65,
      ),
    ),
  ),
  default: (
    background-color: $color-primary,
    color: $color-white,
    selectors: (
      '&:hover': (
        background-color: darken($color-primary, 5%),
        color: $color-white,
      ),
      '&:focus': (
        background-color: darken($color-primary, 10%),
        color: $color-white,
      ),
    ),
  ),
  ghost: (
    background-color: transparent,
    color: $color-primary,
    border-color: $color-primary,
    selectors: (
      '&:hover': (
        background-color: darken($color-primary, 5%),
        color: $color-white,
      ),
      '&:focus': (
        background-color: darken($color-primary, 10%),
        color: $color-white,
      ),
    ),
  ),
);
```

```html
<button class="btn">Base Button</button>
<button class="btn btn-default">Default Button</button>
<button class="btn btn-ghost">Ghost Button</button>
```

Single button variations can be applied using the `button` mixin.

```scss
.my-button {
  @include button();
}

.my-ghost-button {
  @include button('ghost');
}
```

## Forms

### Standard Form Controls

All form controls listed in `$input-selector` get styled by default. The variable can be changed to a custom selector like `.form-control`. This will allow you to selectively style form controls based on that selector.

### Custom Form Controls

The custom forms component was designed with progressive enhancement in mind.
Browsers that support [feature queries](https://caniuse.com/#feat=css-featurequeries) and [appearance](https://caniuse.com/#feat=css-appearance) get the fully enhanced experience.

## Browser Support

- Latest stable: Chrome, Edge, Firefox
- IE 11+
- Safari 9+
- Mobile Safari 9+
- Android Browser 4.4+

Baseguide uses [Autoprefixer](https://github.com/postcss/autoprefixer) to handle CSS vendor prefixes.

## Inspired By…

- [Article: Styling with STRINGS](http://simurai.com/blog/2014/05/04/cssconf)
- [Bootstrap](https://getbootstrap.com)
- [Bourbon](https://www.bourbon.io)
- [Foundation](https://foundation.zurb.com)
- [HTML5 Boilerplate](https://html5boilerplate.com)

## License

The code is released under the [MIT license](https://github.com/slavanga/baseguide/blob/master/LICENSE).
