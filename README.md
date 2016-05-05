# [Baseguide](http://basegui.de)
Baseguide is a lightweight and robust CSS framework for prototyping and production code. It combines all essential components in a customizable and easy to use package.

[![npm version](https://badge.fury.io/js/baseguide.svg)](https://badge.fury.io/js/baseguide)

## Features
* Flexible and extendable breakpoint system
* Dynamic flexbox grid system with float fallback
* CSS-only custom form controls
* Consistent vertical rhythm and modular scale
* Responsive and scalable components

## Getting started

**Install with npm**

```sh
npm install baseguide
```

**Clone with git**

```sh
git clone https://github.com/slavanga/baseguide
```

**Download**

[Download the latest release](https://github.com/slavanga/baseguide/releases/latest)

### Setup

Default variables can be changed before importing Baseguide. Take a look at the [_settings.scss](https://github.com/slavanga/baseguide/blob/master/scss/baseguide/_settings.scss) file to get an overview of all variables.

```scss
$button-bg: #bada55; // 1. Customize default variables

@import 'baseguide'; // 2. Import Baseguide

// 3. Add your own styles here
```

The included gulpfile takes care of compiling, optimizing and minifying your assets. Running the following command will install all dependencies and start a local server using browsersync.

```sh
npm install && gulp serve
```


## Grid
The grid framework is based on the [Bootstrap grid system](https://getbootstrap.com/css/#grid).

### Breakpoints
Breakpoints can easily be configured using the ```$mq-breakpoints``` map. Note that the breakpoints have to be sorted from small to large.

The default configuration looks like this:

```scss
$mq-breakpoints: (
  xs: 480px,
  sm: 768px,
  md: 992px,
  lg: 1200px
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
@media (min-width: 62em) {

}
```

Check out the [Sass MQ documentation](http://sass-mq.github.io/sass-mq/#mixin-mq) for more details and advanced usage of media queries.

#### Legacy support
To support browsers without native media query support you could use [respond.js](https://github.com/scottjehl/Respond).

A static solution without Javascript is possible by setting ```$mq-responsive``` to ```false```. The code below generates an additional stylesheet where only styles in large (lg) media queries are included.

```scss
// oldie.scss
$mq-responsive: false;
$mq-static-breakpoint: lg;

@import 'main';
```

Include the generated CSS file after the rest of your styles to serve a fixed width layout to legacy browsers.
```html
<!--[if lt IE 9]><link rel="stylesheet" href="css/oldie.css"><![endif]-->
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

### Semantic / hybrid grid
The grid mixins can be used to create custom containers, rows and columns.

```scss
// $gutter: gutter width in pixels or map with gutters, defaults to $grid-gutter
// $size: an integer, the number of columns
// $columns: an integer, the total number of columns, defaults to $grid-columns
// $width: container width in pixels, defaults to $grid-container

@include container($gutter, $width);
@include row($gutter);

@include column-base($gutter);
@include column($size, $columns);

@include column-push($size, $columns);
@include column-pull($size, $columns);
@include column-offset($size, $columns);

@include column-block($columns);
```

Tip: You can turn off the default columns output by setting ```$grid-columns-output``` to ```false```.


#### Simple two column layout

```scss
@include mq(sm) {
  .col-content {
    @include column(8);
  }

  .col-sidebar {
    @include column(4);
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

#### Gallery layout using block grid

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

### Flexbox
The flexbox grid can be activated by setting ```$grid-flexbox``` to ```true```. This is no kill switch for older browsers as the floats are kept in place for a basic fallback. Browsers that support flexbox and flex-wrap ([Support table](http://caniuse.com/#search=flexbox)) will get these benefits:

* CSS-only equal height columns
* Easy vertical and horizontal alignment of columns
* Ordering and reversing of columns using CSS


## Forms

### Standard form controls
All form controls listed in ```$input-selector``` get styled by default. The variable can be changed to a custom selector like ```.form-control```. This will allow you to selectively style form controls based on that selector.

Remember to reset the height of textareas if you choose a custom selector:

```scss
textarea.form-control {
  height: auto;
}
```

### Custom form controls
The custom forms component was designed with progressive enhancement in mind.
While the controls are functional in all browsers the following ones get the fully enhanced experience:

* Android 2.3+
* Chrome
* Firefox 35+
* IE 10+
* Mobile Safari 4+
* Safari 5.1+
* Opera 15+

You can set the variable ```$use-custom-forms``` to ```false``` to disable custom form styles in all browsers.

### Caveats
In iOS versions prior to 5.1.1 the code below is required to make custom radio buttons and checkboxes work.

```js
if (document.addEventListener) {
  document.addEventListener('click', function() {}, false);
}
```


## Browser support

### Autoprefixer
Baseguide uses [Autoprefixer](https://github.com/postcss/autoprefixer) to automatically add vendor prefixes to the CSS output. The browser support of the framework roughly corresponds to the autoprefixer settings:

```
browsers: [
  'Android 2.3',
  'Android >= 4',
  'last 4 Chrome versions',
  'Firefox ESR',
  'Edge >= 12',
  'IE >= 8',
  'iOS >= 8',
  'Safari >= 8',
  'Opera >= 15'
]
```

## Inspired By…
* [Article: Styling with STRINGS](http://simurai.com/blog/2014/05/04/cssconf/)
* [Bootstrap](https://getbootstrap.com/)
* [Bourbon](http://bourbon.io/)
* [Foundation](http://foundation.zurb.com/)
* [HTML5 Boilerplate](https://html5boilerplate.com/)
