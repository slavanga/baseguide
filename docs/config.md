# Styleguide options

### Head

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="Baseguide is a lightweight and robust CSS framework for prototyping and production code.">
    <link rel="stylesheet" href="dist/css/baseguide.min.css">
    <link rel="stylesheet" href="docs/assets/styledown.css" />

    <script>
      WebFontConfig = {
        google: { families: [ 'Merriweather:900:latin' ] }
      };

      (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })();
    </script>

### Body

    <div class="section section--intro">
      <div class="container">
        <div class="intro">
          <h1 class="intro__title">Baseguide</h1>
          <div class="intro__text">
            <p>A lightweight and robust CSS framework for prototyping and production code.</p>
          </div>

          <div class="btn-group">
            <a href="https://github.com/slavanga/baseguide/archive/master.zip" class="btn">Download</a>
            <a href="https://github.com/slavanga/baseguide" class="btn btn--outline">View on GitHub</a>
          </div>
        </div>
      </div>
    </div>

    <section class="section">
      <div class="container container--narrow">
        <div class="row">
          <div class="col col-md-4 text-center">
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path fill="#88AB75" d="m22.027,9.06995c-0.479,-0.27991 -1.09,-0.10999 -1.366,0.36011l-6.395,11.07996l-3.578,-3.30005c-0.37801,-0.3999 -1.011,-0.41992 -1.414,-0.03992c-0.403,0.37 -0.424,1.01001 -0.04601,1.40991l4.57201,4.22009c0.377,0.3999 1.00999,0.41992 1.41299,0.03992c0.122,-0.10999 7.18,-12.40991 7.18,-12.40991c0.276,-0.47009 0.112,-1.09009 -0.366,-1.36011l0,0zm-6.027,20.93005c-7.732,0 -14,-6.27002 -14,-14c0,-7.72998 6.268,-14 14,-14c7.732,0 14,6.27002 14,14c0,7.72998 -6.268,14 -14,14l0,0zm0,-30c-8.836,0 -16,7.16003 -16,16c0,8.83997 7.164,16 16,16c8.836,0 16,-7.16003 16,-16c0,-8.83997 -7.164,-16 -16,-16l0,0z" />
            </svg>

            <h2 class="title-uppercase">Compatible</h2>
            <p>Tested in a wide range of browsers.</p>
          </div>
          <div class="col col-md-4 text-center">
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path fill="#F18F01" d="m30,28c0,1.104 -0.896,2 -2,2l-24,0c-1.104,0 -2,-0.896 -2,-2l0,-24c0,-1.104 0.896,-2 2,-2l24,0c1.104,0 2,0.896 2,2l0,24l0,0zm-2,-28l-24,0c-2.209,0 -4,1.79099 -4,4l0,24c0,2.20901 1.791,4 4,4l24,0c2.209,0 4,-1.79099 4,-4l0,-24c0,-2.20901 -1.791,-4 -4,-4l0,0zm-8,19.39999c-1.326,0 -2.39999,-1.07498 -2.39999,-2.39999c0,-1.32501 1.07399,-2.39999 2.39999,-2.39999c1.326,0 2.39999,1.07498 2.39999,2.39999c0,1.32501 -1.07399,2.39999 -2.39999,2.39999l0,0zm6,-3.39999l-2.142,0c-0.44501,-1.72299 -1.996,-3 -3.858,-3c-1.862,0 -3.412,1.27701 -3.858,3l-10.142,0c-0.552,0 -1,0.448 -1,1c0,0.55301 0.448,1 1,1l10.142,0c0.44501,1.72299 1.996,3 3.858,3c1.862,0 3.41299,-1.27701 3.858,-3l2.142,0c0.552,0 1,-0.44699 1,-1c0,-0.552 -0.448,-1 -1,-1l0,0zm-15,-4.60001c-1.326,0 -2.39999,-1.07498 -2.39999,-2.39999c0,-1.32501 1.07399,-2.39899 2.39999,-2.39899c1.326,0 2.39999,1.07397 2.39999,2.39899c0,1.32501 -1.07399,2.39999 -2.39999,2.39999l0,0zm15,-3.39999l-11.142,0c-0.44501,-1.72299 -1.996,-3 -3.858,-3c-1.862,0 -3.41299,1.27701 -3.858,3l-1.142,0c-0.552,0 -1,0.448 -1,1c0,0.55301 0.448,1 1,1l1.142,0c0.44501,1.72299 1.996,3 3.858,3c1.862,0 3.41299,-1.27701 3.858,-3l11.142,0c0.552,0 1,-0.44699 1,-1c0,-0.552 -0.448,-1 -1,-1l0,0zm-15,19.39999c-1.326,0 -2.39999,-1.07498 -2.39999,-2.39999c0,-1.32501 1.07399,-2.39899 2.39999,-2.39899c1.326,0 2.39999,1.07397 2.39999,2.39899c0,1.32501 -1.07399,2.39999 -2.39999,2.39999l0,0zm15,-3.39999l-11.142,0c-0.44501,-1.72198 -1.996,-3 -3.858,-3c-1.862,0 -3.41299,1.27802 -3.858,3l-1.142,0c-0.552,0 -1,0.44699 -1,1c0,0.55301 0.448,1 1,1l1.142,0c0.44501,1.72299 1.996,3 3.858,3c1.862,0 3.41299,-1.27701 3.858,-3l11.142,0c0.552,0 1,-0.44699 1,-1c0,-0.55301 -0.448,-1 -1,-1l0,0z" />
            </svg>

            <h2 class="title-uppercase">Customizable</h2>
            <p>Use Sass to make it your own.</p>
          </div>
          <div class="col col-md-4 text-center">
            <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path fill="#EF476F" d="m24.972,6l-4.972,0c-0.552,0 -1,0.448 -1,1c0,0.55298 0.448,1 1,1l2.62801,0l-4.798,4.79901l1.414,1.414l4.778,-4.77802l-0.022,2.565c0,0.55298 0.448,1 1,1c0.552,0 1,-0.44702 1,-1l0,-5c0,-0.29602 -0.123,-0.53497 -0.31599,-0.69897c-0.18201,-0.18604 -0.433,-0.30103 -0.71201,-0.30103l0,0zm5.028,22c0,1.09998 -0.896,2 -2,2l-24,0c-1.104,0 -2,-0.90002 -2,-2l0,-24c0,-1.104 0.896,-2 2,-2l24,0c1.104,0 2,0.896 2,2l0,24l0,0zm-2,-28l-24,0c-2.209,0 -4,1.79102 -4,4l0,24c0,2.21002 1.791,4 4,4l24,0c2.209,0 4,-1.78998 4,-4l0,-24c0,-2.20898 -1.791,-4 -4,-4l0,0zm-15.244,17.78998l-4.778,4.78003l0.022,-2.57001c0,-0.54999 -0.448,-1 -1,-1c-0.552,0 -1,0.45001 -1,1l0,5c0,0.29999 0.123,0.53998 0.31599,0.70001c0.181,0.17999 0.433,0.29999 0.71201,0.29999l4.972,0c0.552,0 1,-0.45001 1,-1c0,-0.54999 -0.448,-1 -1,-1l-2.62801,0l4.798,-4.79999l-1.414,-1.41003l0,0zm12.244,1.21002c-0.552,0 -1,0.45001 -1,1l0.022,2.57001l-4.778,-4.78003l-1.414,1.41003l4.798,4.79999l-2.62801,0c-0.552,0 -1,0.45001 -1,1c0,0.54999 0.448,1 1,1l4.972,0c0.27901,0 0.53101,-0.12 0.71201,-0.29999c0.19299,-0.16003 0.31599,-0.40002 0.31599,-0.70001l0,-5c0,-0.54999 -0.448,-1 -1,-1l0,0zm-13,-11c0.552,0 1,-0.44702 1,-1c0,-0.552 -0.448,-1 -1,-1l-4.972,0c-0.27901,0 -0.53,0.11499 -0.71201,0.30103c-0.19299,0.164 -0.31599,0.40295 -0.31599,0.69897l0,5c0,0.55298 0.448,1 1,1c0.552,0 1,-0.44702 1,-1l-0.022,-2.565l4.778,4.77802l1.414,-1.414l-4.798,-4.79901l2.62801,0l0,0z" />
            </svg>

            <h2 class="title-uppercase">Scalable</h2>
            <p>Everything is relative.</p>
          </div>
        </div>
      </div>
    </section>

    <div id="main-content">
      <div class="container sg-container" sg-content></div>
    </div>

    <footer class="footer">
      <div class="container">
        <p class="small text-center">
          <a href="https://github.com/slavanga/baseguide/blob/master/README.md">Documentation</a>
           &bull; <a href="https://github.com/slavanga/baseguide/issues">Issues</a><br>

          Licensed under the <a href="https://github.com/slavanga/baseguide/blob/master/LICENSE">MIT License</a>.
        </p>
      </div>
    </footer>

    <script src="docs/assets/styledown.js"></script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
      ga('create', 'UA-8765653-5', 'auto');
      ga('send', 'pageview');
    </script>
