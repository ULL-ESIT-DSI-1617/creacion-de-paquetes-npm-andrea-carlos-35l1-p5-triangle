"use strict"
var Shape = require("@ull-andrea-carlos/ull-andrea-carlos-shape")
module.exports =  class Rectangle extends Shape{
    constructor(options){
      super(options);
      this.width = options.width;
      this.height= options.height;
      this.area = 0;

      shape.Rectangle = Rectangle;

      this.constructor = "Rectangle";
    }
    calcular(){
      this.area = this.width * this.height;
      return this.area;
    }
  }
