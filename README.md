# [Baseguide](http://basegui.de)

[![npm version](https://badge.fury.io/js/baseguide.svg)](https://badge.fury.io/js/baseguide)

Baseguide is a lightweight and robust CSS framework for prototyping and production code. It combines all essential components in a customizable and easy to use package.

**Features**
* Responsive and scalable components
* CSS-only custom form controls
* Robust flexbox grid
* Extendable breakpoint system
* Consistent vertical rhythm and modular scale


## Table of Contents
* [Install](#install)
* [Development](#development)
* [Breakpoints](#breakpoints)
* [Grid](#grid)
* [Forms](#forms)
* [Browser Support](#browser-support)
* [Inspired By](#inspired-by)
* [License](#license)


## Install

### Download

* [baseguide.css](https://raw.githubusercontent.com/slavanga/baseguide/master/dist/css/baseguide.css) (uncompressed)
* [baseguide.min.css](https://raw.githubusercontent.com/slavanga/baseguide/master/dist/css/baseguide.min.css) (compressed)

### CDN

Link directly to Baseguide on [cdnjs](https://cdnjs.com/libraries/baseguide).

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baseguide/2.0.0/css/baseguide.min.css">
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

### Sass
Default variables can be changed before importing Baseguide.
Take a look at the [_settings.scss](https://github.com/slavanga/baseguide/blob/master/scss/baseguide/settings/_settings.scss) file to see all variables.

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
  xs: 0,
  sm: 400px,
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

Check out the [Sass MQ documentation](http://sass-mq.github.io/sass-mq/#mixin-mq) for more details and advanced usage of media queries.

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

### Float Fallback
There is a float fallback to make the grid work in browsers that don’t support flexbox. This fallback can be disabled by setting ```$grid-fallback: false```.


## Forms

### Standard Form Controls
All form controls listed in ```$input-selector``` get styled by default. The variable can be changed to a custom selector like ```.form-control```. This will allow you to selectively style form controls based on that selector.

Remember to reset the height of textareas if you choose a custom selector:

```scss
textarea.form-control {
  height: auto;
}
```

### Custom Form Controls
The custom forms component was designed with progressive enhancement in mind.
IE 9 doesn’t support the custom select styles. All other [supported browsers](#browser-support) get the fully enhanced experience.


## Browser Support
* Latest stable: Chrome, Firefox, Opera
* IE 9+
* Safari 8+
* Mobile Safari 8+
* Android Browser 2.3+

Baseguide uses [Autoprefixer](https://github.com/postcss/autoprefixer) to handle CSS vendor prefixes.


## Inspired By…
* [Article: Styling with STRINGS](http://simurai.com/blog/2014/05/04/cssconf)
* [Bootstrap](https://getbootstrap.com)
* [Bourbon](http://bourbon.io)
* [Foundation](http://foundation.zurb.com)
* [HTML5 Boilerplate](https://html5boilerplate.com)


## License
The code is released under the [MIT license](https://github.com/slavanga/baseguide/blob/master/LICENSE).
