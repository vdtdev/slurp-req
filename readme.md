# Slurp

_Shorthand dependency loading_

## Purpose

Slurp is very simple, and is intended to reduce the amount of typing needed when loading multiple modules in node scripts, especially for gulp projects.

## Usage

Basic example for a Gulpfile:

```javascript

    var slurp = require('slurp-req');
    var g = {
        x: 'gulp',
        uglify: 'gulp-uglify',
        sass: 'gulp-sass',
        srcmap: 'gulp-sourcemaps',
        concat: 'gulp-concat',
        del: 'del'
    };

    g = slurp(g);
```

- Slurp iterates through the attributes in the passed object, and replaces their values with the result of `require(<original value>)`

## Dependencies

### Runtime

- Slurp has no dependencies for runtime use

### Development

- Slurp uses `mocha` for running `test.js`, and `expect.js`

## Terms of Use

### License

Slurp is released under the MIT license, feel free to fork/modify it

MIT License

Copyright (c) 2017 W. Harkins

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

### Contact

You can contact me at vdtdev (@t) gmail (.) com

