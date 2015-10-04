# [Baseguide](http://basegui.de)
Baseguide is a lightweight and robust CSS framework powered by Sass. It brings together all essential base components in a small yet powerful package.

##Features
* Flexible and extendable breakpoints
* Dynamic flexbox grid system with float fallback
* CSS-only custom form controls
* Consistent vertical rhythm and modular scale built in
* Scalable components with em spacing

##Getting started
After downloading Baseguide you can import the framework in your SCSS file.
```scss
$button-bg: #bada55; // 1. Customize default variables

@import 'baseguide'; // 2. Import Baseguide

// 3. Add your own styles here
```

Take a look at the [_settings.scss] (https://github.com/slavanga/baseguide/blob/master/scss/baseguide/_settings.scss) file to get an overview of all variables.

##Grid
The grid framework is based on the [Bootstrap grid system] (http://getbootstrap.com/css/#grid).

###Breakpoints
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

###Media Queries
Media Queries are handled by [Sass MQ] (https://github.com/sass-mq/sass-mq).

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

Check out the [Sass MQ documentation] (http://sass-mq.github.io/sass-mq/#mixin-mq) for more details and advanced usage of media queries.

####Legacy support

To support browsers without native media query support you could use [respond.js] (https://github.com/scottjehl/Respond).

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

###Semantic / hybrid grid
The grid mixins are very powerful. Use them to create layouts with custom containers, rows and columns. If you use the mixins you might want to turn off the default columns output by setting ```$grid-columns-output``` to ```false```.


```scss
// $gutter: grid gutter in pixels, defaults to $grid-gutter
@include container($gutter);
@include row($gutter);

// $index: an integer, the number of columns
// $columns: an integer, the number of columns in total, defaults to $grid-columns
// $gutter: grid gutter in pixels, defaults to $grid-gutter
@include column($index, $columns, $gutter);

// $index: an integer, the number of columns
// $columns: an integer, the number of columns in total, defaults to $grid-columns
@include column-push($index, $columns);
@include column-pull($index, $columns);
@include column-offset($index, $columns);
```

The example below shows how to create a five column layout (starting from the md breakpoint).

```scss
.col-news-item {
  @include column-base();

  @include mq(md) {
    @include column(1, 5);
  }
}
```

```html
<div class="container">
  <div class="row">
    <article class="col col-news-item"></article>
    <article class="col col-news-item"></article>
    <article class="col col-news-item"></article>
    <article class="col col-news-item"></article>
    <article class="col col-news-item"></article>
  </div>
</div>
```

##Forms

###Buttons
Use the extend directive to create custom buttons based on the primary button.

```scss
.btn-order {
  @extend .btn;
}
```

###Standard form controls
All form controls listed in ```$input-selector``` get styled by default. The variable can be changed to a custom selector like ```.form-control```. This will allow you to selectively style form controls based on that selector.

Remember to reset the height of textareas if you choose a custom selector:

```scss
textarea.form-control {
  height: auto;
}
```

###Custom form controls
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

##Browser support

###Autoprefixer
Baseguide uses [Autoprefixer] (https://github.com/postcss/autoprefixer) to automatically add vendor prefixes in the CSS output.
The browser support of the framework roughly corresponds to the autoprefixer settings:
```
Android 2.3, Android >= 4, last 4 Chrome versions, Firefox ESR, IE >= 8, iOS >= 8, Safari >= 8, Opera >= 15
```

##Inspired By…
* [Article: Styling with STRINGS] (http://simurai.com/blog/2014/05/04/cssconf/)
* [Bootstrap] (http://getbootstrap.com/)
* [Bourbon] (http://bourbon.io/)
* [Foundation] (http://foundation.zurb.com/)
* [Gumby] (http://gumbyframework.com/)
* [HTML5 Boilerplate] (https://html5boilerplate.com/)
