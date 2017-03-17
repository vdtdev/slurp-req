/**
 * Slurp - shorthand require declarations for gulp
 * Created by wade harkins on 3/17/17.
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