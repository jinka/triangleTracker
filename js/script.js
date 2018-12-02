var isSide1 = false;
var isSide2 = false;
var isSide3 = false;

function triangleTracker() {
  var triangleTypes = ['Equilateral','isosceles','Scalene','Not Triangle'];

  var sideLength1 = document.getElementById("id1").value;
  var side1Obj = document.getElementById("id1");

  if (!side1Obj.checkValidity()) {
      document.getElementById("triangleTriangleSide1").innerHTML = side1Obj.validationMessage;
      isSide1=false;
  } else {
      document.getElementById("triangleTriangleSide1").innerHTML = "side1Obj Input OK";
      isSide1=true;
  }

}
