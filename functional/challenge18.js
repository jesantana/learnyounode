//module.exports=Array.slice.call;
module.exports = Function.call.bind(Array.prototype.slice)