var shape = require("../lib/shape.js");
var Triangle = require("@ull-andrea-carlos/ull-andrea-carlos-triangle");
var Rectangle = require("@ull-andrea-carlos/ull-andrea-carlos-rectangle");
var Square = require("@ull-andrea-carlos/ull-andrea-carlos-square");

describe("Las distintas formas heredan getArea de shape", function() {
	it("Triangulo no tiene la propiedad getArea ", function() {
		Triangle.prototype.hasOwnProperty("getArea").should.equal(false);
	});
	it("En un objeto triangulo existe la funcion getArea", function(){
		var obj = new Triangle({ width: 100, height: 100 })
		obj.getArea().should.equal(5000);
	})
	
        it("Rectangle no tiene la propiedad getArea ", function() {
                Rectangle.prototype.hasOwnProperty("getArea").should.equal(false);
        });
        it("En un objeto rectangle existe la funcion getArea", function(){
                var obj = new Rectangle({ width: 100, height: 100 })
                obj.getArea().should.equal(10000);
        })

        it("Square no tiene la propiedad getArea ", function() {
                Square.prototype.hasOwnProperty("getArea").should.equal(false);
        });
        it("En un objeto cuadrado existe la funcion getArea", function(){
                var obj = new Square({ width: 100})
                obj.getArea().should.equal(10000);
        })


});
		
