"use strict";

/*  Generic function that takes in function 
*   and partially applies polyadic number of arguments. 
*/
const partialApplication = (fn, ...args) =>
    (...otherArgs) => {
        return fn.apply(this, Array.prototype.concat.call(...args, ...otherArgs));
    }

const partialApplicationFromRight = (fn, ...args) =>
    (...otherArgs) => {
        return fn.apply(this, Array.prototype.concat.call(...otherArgs, ...args));
    }

exports.partialApply = partialApplication;
exports.partialApplicationFromRight = partialApplicationFromRight;