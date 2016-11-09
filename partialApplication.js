"use strict";

/*  Generic function that takes in function 
*   and partially applies polyadic number of arguments. 
*/
const partialApplication = (fn, ...args) =>
    (...otherArgs) => {
        return fn.apply(this, Array.prototype.concat.call(...args, ...otherArgs));
    }

exports.partialApply = partialApplication;