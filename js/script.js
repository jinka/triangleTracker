function triangleTracker() {
  var isSide1 = false;
  var isSide2 = false;
  var isSide3 = false;

  alert("Am in js funtion");
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

  var sideLength2 = document.getElementById("id2").value;
  var side2Obj = document.getElementById("id2");
  if (!side2Obj.checkValidity()) {
      document.getElementById("triangleTriangleSide2").innerHTML = side2Obj.validationMessage;
      isSide2=true;
  } else {
    document.getElementById("triangleTriangleSide2").innerHTML = "side2Obj Input OK";
    isSide2=false;
  }

  var sideLength3 = document.getElementById("id3").value;
  var side3Obj = document.getElementById("id3");
  if (!side3Obj.checkValidity()) {
      document.getElementById("triangleTriangleSide3").innerHTML = side3Obj.validationMessage;
      isSide3=true;
  } else {
    document.getElementById("triangleTriangleSide3").innerHTML = "side3Obj Input OK";
    isSide3=false;
  }
  if (isSide1 && isSide2 && isSide3) {
    sideLength1 = parseInt(sideLength1);
    sideLength2 = parseInt(sideLength2);
    sideLength3 = parseInt(sideLength3);

    var sideOneTwo = sideLength1 + sideLength2;
    var sideOneThree = sideLength1 + sideLength3;
    var sideTwoThree = sideLength2 + sideLength3;
    function isTriangle(side1,side2,side3) {
      if (sideOneTwo <= side3 || sideOneThree <= side2 || sideTwoThree <= side1) {
        return triangleTypes[3];
      } else {
        if (side1==side2 && side1==side3) {
          return triangleTypes[0];
        }  else if (side1 == side2 || side1 == side3 || side2 == side3) {
          return triangleTypes[1];
        } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
          return triangleTypes[2];
    }

  }

}
