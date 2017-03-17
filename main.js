/**
 * Slurp - shorthand require declarations for gulp
 * Created by wade harkins on 3/17/17.
 */

/*
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
*/

(function(){

    /**
     * Replace values of each attribute in given object with return value
     * of require(reqObject.key)
     * @param reqObject Object with attributes with properties providing name of
     * requirement file or library
     * @returns {*} Reference to passed in object
     * @author Wade Harkins <vdtdev@gmail.com>
     * @example
     *      var slurp = require(..);
     *      var g = {
     *          x: 'gulp',
     *          babel: 'gulp-babel',
     *          del: 'del'
     *      };
     *      g = slurp(g);
     *
     *      g.x.task('default', function() { ... });
     */
    function slurp(reqObject) {
        var vars = Object.keys(reqObject);
        for(var i=0; i<vars.length; i++){
            reqObject[vars[i]] = require(reqObject[vars[i]]);
        }
        return reqObject;
    }

    module.exports = slurp;

})();