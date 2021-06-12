# file-size.github.io/element.js
&lt;file-size> Web Component displaying Minified &amp; GZip sizes and (optional) GZThermal Image

See: [Dev.to post: Size does matter](https://dev.to/dannyengelman/file-size-web-component-because-size-does-matter-3d3k)

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
<script src="https://file-size.github.io/elements.js">
```

 &nbsp; &nbsp; OR

```js
import {} from "https://file-size.github.io/element.js";
```

## Issues

* You can't read files from other servers unless that server allows you to  
[CORS - Cross Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) 

## GZip thermal analysis: element.js

![](https://gzthermal.vercel.app/?url=https://file-size.github.io/element.js)