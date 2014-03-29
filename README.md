jquery.footnote
===============

Recently I had the idea to place footnotes in blog articles as it is done in LaTeX. There you simply place a \footnote{My footnote text} directive in the floating text and TeX handles the construction of the footnotes list at the bottom of the corresponding page. The footnote plugin for jQuery offers a similar functionality. 

## Usage
In the following we take a glance at a simple example. Here we define an article containging some text and inside this text there is a nested footnote, marked up with the footnote class.

```HTML
<ariticle>
  <h1>Examplary article</h1>
  <p>Lorem ipsum Duis esse laborum id voluptate consectetur in veniam aute laboris <span class="footnote">Amet eiusmod dolor consequat proident</span> in voluptate consectetur eu eiusmod officia veniam fugiat elit culpa in dolore elit.
</article>
```

In the header of out HTML document we simply load the current jQuery framework version and the footnote plugin. Finally we apply the footnote plugin to all ariticles if the DOM-tree is loaded entirely.

```HTML
<head>
  ...
  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
  <script src="jquery.footnote.js"></script>
  <link rel="stylesheet" href="demo.css"></link>
  <script type="text/javascript">
    jQuery(document).ready(function($) {
      $("article").footnote();
    });
  </script>
  ...
</head>
```

This call results in a LaTeX-like transformation of the embeded footnotes. Each one is replaced by a incrementing number and placed at the bottom of the article. Moreover it it clickable. A click smoothly scrolls down the article to the corresponing footnote list item.

## Parameters
The plugin offers some means of customizability. Beside declaring the class attribute of the footnote list one can set the time in milliseconds for the smooth scroll animation and an optional callback handler. For details take a glance at the implementation.
