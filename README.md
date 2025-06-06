# file-size.github.io/element.js

[GitHub source](https://github.com/file-size/file-size.github.io)

&lt;file-size> Web Component displays Minified &amp; GZip sizes and (optional) GZThermal Image

## See: [Dev.to post: Size does matter](https://dev.to/dannyengelman/file-size-web-component-because-size-does-matter-3d3k)

## Use:

```html
<file-size src="..."></file-size>
```

### Open GZip thermal analysis by default:

```html
<file-size gz src="..."></file-size>
```

Hold down ``alt`` Key + click the thermal image to open the .js source file.

## Load

```js
<script src="https://file-size.github.io/element.js">
```

 &nbsp; &nbsp; OR

```js
import {} from "https://file-size.github.io/element.js";
```

## Issues

* 3rd party GZThermal API has a (unknown) traffic limit
* 3rd party API errors on files over 48-56 Kilobytes
* can't read files from other servers unless that server allows you to  
[CORS - Cross Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) 

## &lt;file-size> Web Component GZip thermal analysis: element.js

![](https://gzthermal.vercel.app/?url=https://file-size.github.io/element.js)
