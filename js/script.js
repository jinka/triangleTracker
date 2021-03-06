function triangleTracker() {
  var isSide1 = false;
  var isSide2 = false;
  var isSide3 = false;

  var triangleTypes = ['Equilateral', 'isosceles', 'Scalene', 'Not a Triangle'];

  var sideLength1 = document.getElementById("id1").value;
  var side1Obj = document.getElementById("id1");

  if (!side1Obj.checkValidity()) {
    document.getElementById("triangleTriangleSide1").innerHTML = side1Obj.validationMessage;
    isSide1 = false;
  } else {
    isSide1 = true;
  }

  var sideLength2 = document.getElementById("id2").value;
  var side2Obj = document.getElementById("id2");
  if (!side2Obj.checkValidity()) {
    isSide2 = false;
  } else {
    isSide2 = true;
  }

  var sideLength3 = document.getElementById("id3").value;
  var side3Obj = document.getElementById("id3");
  if (!side3Obj.checkValidity()) {
    isSide3 = false;
  } else {
    isSide3 = true;
  }

  if (isSide1) {
    sideLength1 = parseInt(sideLength1);
    sideLength2 = parseInt(sideLength2);
    sideLength3 = parseInt(sideLength3);

    var sideOneTwo = sideLength1 + sideLength2;
    var sideOneThree = sideLength1 + sideLength3;
    var sideTwoThree = sideLength2 + sideLength3;

    function isTriangle(side1, side2, side3) {
      if (sideOneTwo <= side3 || sideOneThree <= side2 || sideTwoThree <= side1) {
        return triangleTypes[3];
      } else {
        if (side1 == side2 && side1 == side3) {
          return triangleTypes[0];
        } else if (side1 == side2 || side1 == side3 || side2 == side3) {
          return triangleTypes[1];
        } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
          return triangleTypes[2];
        }
      }
    }
    document.getElementById("triangleTriangleSide2").innerHTML = "Triangle is : " + isTriangle(sideLength1, sideLength2, sideLength3);
  }
}
