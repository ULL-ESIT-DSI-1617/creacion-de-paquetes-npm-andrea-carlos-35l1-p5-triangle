"use strict";
var Shape = require("@ull-andrea-carlos/ull-andrea-carlos-shape")
class Triangle extends Shape{
  constructor(options){

    super(options);
    this.width = options.width;
    this.height= options.height;
/**
 * Paquete npm de Shape
 *
 * https://github.com/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-andrea-carlos-35l1-p5
 *
 * Autores: Andrea Rodríguez Rivarés y Carlos Castro García
 *
 * Paquete npm con la clase Triangle.
 *
 * @class Shape clase triangle
 * @param {hash} options Ancho y Alto
 */
    this.area = 0;
    global.shape.Triangle = Triangle;
    this.constructor = "Triangle";
  }
/**
* @function calcular
* @return {number} devuelve el área del círculo
*/
  calcular(){
    this.area = .5 * this.width * this.height;
    return this.area;
  }
}
module.exports = Triangle;
