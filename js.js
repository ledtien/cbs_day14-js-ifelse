// bai 1

var num1El = document.getElementById("num1");
var num2El = document.getElementById("num2");
var num3El = document.getElementById("num3");
var result = document.getElementById("result");

function compareNumber() {
  var num1 = num1El.value * 1;
  var num2 = num2El.value * 1;
  var num3 = num3El.value * 1;
  var temp;
  if (num1 >= num2) {
    temp = num1;
    num1 = num2;
    num2 = temp;
  }
  if (num1 >= num3) {
    temp = num1;
    num1 = num3;
    num3 = temp;
  }
  if (num2 >= num3) {
    temp = num2;
    num2 = num3;
    num3 = temp;
  }
  result.innerText =
    "Thứ tự 3 số nguyên là: " + num1 + " -->" + num2 + " -->" + num3;
}

// bai 2
var roleEl = document.getElementById("role");
var roleTxtEl = document.getElementById("roleTxt");

function enterName() {
  var role = roleEl.value.toUpperCase();
  switch (role) {
    case "BỐ":
      roleTxtEl.innerText = "Xin Chào bố!";
      break;
    case "MẸ":
      roleTxtEl.innerText = "Xin Chào mẹ!";
      break;
    case "ANH TRAI":
      roleTxtEl.innerText = "Xin Chào anh trai!";
      break;
    case "EM GÁI":
      roleTxtEl.innerText = "Xin Chào em gái!";
      break;
    default:
      roleTxtEl.innerText =
        " Vui lòng nhập: Bố hoặc Mẹ hoặc Anh trai hoặc Em gái";
  }
}

//bai 3
var num4El = document.getElementById("num4");
var num5El = document.getElementById("num5");
var num6El = document.getElementById("num6");
var total = document.getElementById("total");

function evenOrOdd() {
  num4 = num4El.value * 1;
  num5 = num5El.value * 1;
  num6 = num6El.value * 1;
  var countEven = 0;
  var countOdd = 0;
  if (num4 % 2 == 0) {
    countEven++;
  }
  if (num5 % 2 == 0) {
    countEven++;
  }
  if (num6 % 2 == 0) {
    countEven++;
  }
  if (num4 % 2 != 0) {
    countOdd++;
  }
  if (num5 % 2 != 0) {
    countOdd++;
  }
  if (num6 % 2 != 0) {
    countOdd++;
  }

  total.innerText =
    "Tổng số lẻ: " + countOdd + " và" + " Tổng số chẵn: " + countEven;
}

// bai 4

var canhAEl = document.getElementById("canhA");
var canhBEl = document.getElementById("canhB");
var canhCEl = document.getElementById("canhC");
var ketQua = document.getElementById("ketQua");

function tamGiac() {
  canhA = canhAEl.value * 1;
  canhB = canhBEl.value * 1;
  canhC = canhCEl.value * 1;
  if (
    canhA + canhB <= canhC ||
    canhA + canhC <= canhB ||
    canhB + canhC <= canhA
  ) {
    ketQua.innerText = "Tam giác không hợp lệ, vui lòng nhập lại!";
  } else {
    if (canhA == canhB && canhB == canhC) {
      ketQua.innerText = "Tam giác đều";
    } else {
      if (
        canhA * canhA + canhB * canhB == canhC * canhC ||
        canhB * canhB + canhC * canhC == canhA * canhA ||
        canhC * canhC + canhA * canhA == canhB * canhB
      ) {
        return (ketQua.innerText = "Tam giác vuông");
      }
      if (canhA == canhB || canhA == canhC || canhB == canhC) {
        ketQua.innerText = "Tam giác cân";
      } else {
        ketQua.innerText = "Tam giác thường";
      }
    }
  }
}
