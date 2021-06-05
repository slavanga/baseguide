# [Baseguide](https://basegui.de)

[![npm version](https://badge.fury.io/js/baseguide.svg)](https://www.npmjs.com/package/baseguide)

Baseguide is a lightweight and robust CSS framework for prototyping and production code.

* **Responsive** and scalable components
* **Robust** flexbox grid
* **Extendable** breakpoint system
* **Consistent** vertical rhythm and modular scale


## Table of Contents
* [Install](#install)
* [Development](#development)
* [Breakpoints](#breakpoints)
* [Fluid Scaling](#fluid-scaling)
* [Grid](#grid)
* [Buttons](#buttons)
* [Forms](#forms)
* [Typography](#typography)
* [Browser Support](#browser-support)
* [Inspired By](#inspired-by)
* [License](#license)


## Install

### Download

* [baseguide.css](https://raw.githubusercontent.com/slavanga/baseguide/master/dist/css/baseguide.css) (uncompressed)
* [baseguide.min.css](https://raw.githubusercontent.com/slavanga/baseguide/master/dist/css/baseguide.min.css) (compressed)

### CDN

This is great for prototyping, but doesn’t allow any customization. To load Baseguide via [unpkg](https://unpkg.com), add this to your ```<head>```:

```html
<link rel="stylesheet" href="https://unpkg.com/baseguide@4.1.1/dist/css/baseguide.min.css">
```

### Package Managers

[npm](https://www.npmjs.com/package/baseguide): `npm install baseguide`

[yarn](https://yarnpkg.com/en/package/baseguide): `yarn add baseguide`


## Development

### Dependencies
Use `npm install` or `yarn install` to install the dev dependencies.

### Gulp
The included gulpfile takes care of compiling, optimizing and minifying your assets.

| Command           | Description                                                                                              |
| :---------------- | :------------------------------------------------------------------------------------------------------- |
| `gulp`            | Build files, watch for changes and start a local server using [Browsersync](https://www.browsersync.io/) |
| `gulp build`      | Build files once                                                                                         |
| `gulp watch`      | Watch files and build when a change occurs                                                               |
| `gulp lint`       | Lint the scss and js source files                                                                        |

### Sass
Default variables can be changed before importing Baseguide.
Take a look at the [_settings.scss](https://github.com/slavanga/baseguide/blob/master/scss/baseguide/00-settings/_settings.scss) file to see all variables.

```scss
$button-bg: #bada55; // 1. Customize default variables

@import 'baseguide'; // 2. Import Baseguide

// 3. Add your own styles here
```


## Breakpoints
Breakpoints can easily be configured using the ```$mq-breakpoints``` map. Note that the breakpoints have to be sorted from small to large.

The default configuration looks like this:

```scss
$mq-breakpoints: (
  xs: 0px,
  sm: 375px,
  md: 680px,
  lg: 960px,
  xl: 1200px
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
The ```loop-breakpoints``` mixin iterates through all breakpoints. It sets three global variables and outputs the ```@content``` for each breakpoint.
```scss
@include loop-breakpoints($breakpoints: $mq-breakpoints, $inclusive: true, $mq: true) {
  @debug $breakpoint;
  @debug $is-first-breakpoint;
  @debug $is-last-breakpoint;
}
```

It’s a powerful tool that for example allows the generation of additional responsive helper classes.
```scss
@include loop-breakpoints {
  .text-#{$breakpoint}-left {
    text-align: left;
  }

  .text-#{$breakpoint}-center {
    text-align: center;
  }

  .text-#{$breakpoint}-right {
    text-align: right;
  }
}
```


## Fluid Scaling
With fluid scaling values between two points (min and max) can be interpolated using vh units and calc. Originally this technique was mostly used for font-size, but it can be used with other CSS properties that support calc in their value as well. There is an [article](https://www.madebymike.com.au/writing/precise-control-responsive-typography/) that explains the concept.

All maps in the settings with a min value support fluid scaling, if a max value is added.
By default the scaling happens between the breakpoints sm and xl. These breakpoints are configurable in ```$fluid-breakpoints```.

Using the ```fluid-calc``` mixin you can apply fluid scaling in your own code.


```scss
body {
  @include fluid-calc('font-size', (min: 1rem, max: 1.25rem));
}
```

```scss
.my-component {
  @include fluid-calc('padding', (min: 1rem, max: 1.5rem), (min: md, max: xl));
}
```

The mixin ```fluid-spacing``` is a small wrapper for ```fluid-calc``` that looks for spacings in the map ```$spacings```.
If no size parameter is passed then the first value (base) from the map will be used.

```scss
.my-component {
  @include fluid-spacing('margin-bottom', $negative: true);
}

.my-component {
  @include fluid-spacing('margin-bottom');
}
```

Use the global settings switch ```$fluid-scaling``` to disable the fluid scaling feature.


## Grid
The grid system is responsive and follows the mobile first pattern. It offers predefined classes for quick layouts as well as powerful mixins for more semantic layouts.

The number of columns is controlled by the ```$grid-columns``` variable which defaults to 12.


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
The gutters are controlled by the ```$grid-gutter``` variable. It can either be a global value across all breakpoints or a map with gutter values per breakpoint.

```scss
// set gutter for all breakpoints
$grid-gutter: 60px;
```

```scss
// start with 20px gutter and increase to 40px from the md breakpoint
// note: breakpoints can be skipped to keep the last defined value
$grid-gutter: (
  xs: 20px,
  md: 40px
);
```

Accessing gutter values is easy using the ```get-gutter``` function. The smallest gutter gets returned by default.

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

@include column-block($columns);
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

#### Gallery Layout Using Block Grid

```scss
.col-gallery {
  @include column-base;
  @include column-block(3);

  @include mq(md) {
    @include column-block(6);
  }
}
```

```html
<div class="container">
  <div class="row">
    <div class="col-gallery">Gallery item</div>
    <div class="col-gallery">Gallery item</div>
    <div class="col-gallery">Gallery item</div>
    <div class="col-gallery">Gallery item</div>
    <div class="col-gallery">Gallery item</div>
    <div class="col-gallery">Gallery item</div>
  </div>
</div>
```


## Embed
Use the embed object for fixed ratio resources like videos or maps using iframes.
The default (base) ratio is 16 by 9. Extend the ```$embed-rations``` map to add more ratios. Custom ratios will respect the ```$meta-class-modifier``` setting.

```scss
$embed-ratios: (
  base: 16 by 9,
  square: 1 by 1
);
```

```html
<div class="embed-responsive embed-responsive-square">
  <iframe src="https://player.vimeo.com/video/23237102?color=ffffff&title=0&byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
```

The embed selector is defined by the ```$embed-selector``` variable.


## Buttons
Buttons consist of base settings as wells as variations. Both can be configured in the settings file. It’s recommended to use a class for ```$button-selector``` instead of an element selector. Buttons often come in multiple forms (e.g. close buttons) where a lot of the base styles would have to be undone.

The first button variation (base) just adds to the existing base styles and get’s no class output. All further variations get their own class output, respecting the ```$meta-class-modifier``` setting.
An advanced button variations config could look like this:

```scss
$button-variations: (
  base: (
    focus: (
      box-shadow: 0 0 0 0.188rem transparentize($color-primary, 0.5)
    ),
    disabled: (
      opacity: 0.65
    )
  ),
  default: (
    background-color: $color-primary,
    color: #fff,
    hover: (
      background-color: darken($color-primary, 5%)
    ),
    focus: (
      background-color: darken($color-primary, 10%)
    )
  ),
  ghost: (
    background-color: transparent,
    color: $color-primary,
    border-color: $color-primary,
    hover: (
      background-color: darken($color-primary, 5%),
      color: #fff
    ),
    focus: (
      background-color: darken($color-primary, 10%),
      color: #fff
    ),
  )
);
```

You can also use no extra button styles and define variations on your own. Just leave the ```$button-variations``` map empty to do so.


## Forms

### Standard Form Controls
All form controls listed in ```$input-selector``` get styled by default. The variable can be changed to a custom selector like ```.form-control```. This will allow you to selectively style form controls based on that selector.

### Custom Form Controls
The custom forms component was designed with progressive enhancement in mind.
Browsers that support [feature queries](https://caniuse.com/#feat=css-featurequeries) and [appearance](https://caniuse.com/#feat=css-appearance) get the fully enhanced experience.


## Typography

### Headings
The value for ```$type-scale-base``` defines the smallest heading (h6). From there the remaining heading font sizes are calculated using the ```$type-scale```. Major Third (1.25) is the default type scale. Check [type-scale.com](https://type-scale.com/) for more scales.

By using a map for ```$type-scale-base``` you can scale all headings up or down in harmony, respecting the ```$headings-breakpoints```.

```scss
$type-scale-base: (
  min: $font-size-base,
  max: $font-size-base * 2
);
```


## Browser Support
* Latest stable: Chrome, Edge, Firefox
* IE 11+
* Safari 9+
* Mobile Safari 9+
* Android Browser 4.4+

Baseguide uses [Autoprefixer](https://github.com/postcss/autoprefixer) to handle CSS vendor prefixes.


## Inspired By…
* [Article: Styling with STRINGS](http://simurai.com/blog/2014/05/04/cssconf)
* [Bootstrap](https://getbootstrap.com)
* [Bourbon](https://www.bourbon.io)
* [Foundation](https://foundation.zurb.com)
* [HTML5 Boilerplate](https://html5boilerplate.com)


## License
The code is released under the [MIT license](https://github.com/slavanga/baseguide/blob/master/LICENSE).
