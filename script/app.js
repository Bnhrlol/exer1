function displaySum() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum + secondNum;
  document.getElementById("answer").innerHTML = ` ${firstNum} + ${secondNum} = ${total}` ;
}

function displayDiff() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum - secondNum;

  document.getElementById("result").innerHTML = ` ${firstNum} - ${secondNum} = ${total}` ;
}

function displayMult() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum * secondNum;

  document.getElementById("manswer").innerHTML = ` ${firstNum} * ${secondNum} = ${total}` ;
}


document.getElementById('sumButton').addEventListener("click", displaySum);
document.getElementById('diffButton').addEventListener("click", displayDiff);
document.getElementById('multButton').addEventListener("click", displayMult);
