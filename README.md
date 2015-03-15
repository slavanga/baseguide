# [Baseguide](http://basegui.de)
Baseguide is a lightweight CSS framework for robust and scalable base styles.

## Features
* Bootstrap based grid with extendable breakpoints
* CSS-only custom form controls
* Consistent vertical rhythm and modular scale built in
* Scalable components with em spacing

##Getting started
After downloading Baseguide you can edit the main.scss file in the scss folder.
```scss
$button-bg: #bada55; // 1. Customize default variables

@import 'baseguide'; // 2. Import Baseguide

// 3. Add your own styles here
```

Take a look at the _settings.scss file to get an overview of all variables.

##Grid
The grid framework is largely based on the [Bootstrap grid system] (http://getbootstrap.com/css/#grid). Improvements include the option to define custom breakpoints.

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
Media Queries are handled by [sass-mq] (https://github.com/sass-mq/sass-mq).

```scss
// include the media query mixin and pass the breakpoint name
@include mq(md) {
	
}
```

The snippet above compiles to the following CSS:

```css
@media (min-width: 62em) {

}
```

Check out the [sass-mq documentation] (http://sass-mq.github.io/sass-mq/#mixin-mq) for more details and advanced usage of media queries.

####Legacy support

To support browsers without native media query support you could use [respond.js] (https://github.com/scottjehl/Respond).

A CSS-only solution can be achieved by setting ```$mq-responsive``` to ```false```.
The idea is to generate an additional stylesheet where all styles are moved outside of the media queries.

```scss
// oldie.scss
$mq-responsive: false;
$mq-static-breakpoint: lg;

@import 'main';
```

Include the generated CSS file after the rest of your styles.
```html
<!--[if lt IE 9]><link rel="stylesheet" href="css/oldie.css"><![endif]-->
```

###Semantic / hybrid grid
Use the grid mixins to create layouts with custom containers, rows, columns and gutters. The example below shows how to create a 5 column layout with 15 columns in total.

```scss
.news-container {
  @include container();
}

.news-list {
  @include row();
}

.news-item {
  @include column(3, 15);
}
```

```html
<div class="news-container">
  <section class="news-list">
    <article class="news-item"></article>
    <article class="news-item"></article>
    <article class="news-item"></article>
    <article class="news-item"></article>
    <article class="news-item"></article>
  </section>
</div>
```

## Browser support

###Autoprefixer
Baseguide uses [Autoprefixer] (https://github.com/postcss/autoprefixer) to automatically add vendor prefixes in the CSS output.
The browser support of the framework roughly corresponds to the autoprefixer settings:
```
Android 2.3, Android >= 4, last 4 Chrome versions, Firefox ESR, Explorer >= 8, iOS >= 6, Opera >= 12, Safari >= 6
```

###Custom forms
The custom forms component is designed with progressive enhancement in mind.
The controls are functional in all browsers but the following browsers get the fully enhanced experience:

* Android 2.3+
* Chrome
* Firefox 35+
* IE 10+
* Mobile Safari 4+
* Safari 5.1+
* Opera 15+

You can set the variable ```$use-custom-forms``` to ```false``` to disable custom form styles in all browsers.

##Inspired By…
* [Article: Styling with STRINGS] (http://simurai.com/blog/2014/05/04/cssconf/)
* [Bootstrap] (http://getbootstrap.com/)
* [Bourbon] (http://bourbon.io/)
* [Foundation] (http://foundation.zurb.com/)
* [Gumby] (http://gumbyframework.com/)
* [HTML5 Boilerplate] (https://html5boilerplate.com/)
