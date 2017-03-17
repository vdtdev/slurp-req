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

### Contact

You can contact me at vdtdev (@t) gmail (.) com

