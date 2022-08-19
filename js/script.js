const operators = document.querySelectorAll(".operators > div");
const numbers = document.querySelectorAll(".numbers > div");
const input = document.getElementById("input");
const result = document.getElementById("result");
let numsArr = [];
let opsArr = [];
let total = 0;
let tempNum = ``;

operators.forEach(item => {
  item.addEventListener(`click`, e => {
    numsArr.push(Number(tempNum));
    opsArr.push(e.target.innerHTML);
    tempNum = ``;
  });
});

numbers.forEach(item => {
  item.addEventListener(`click`, e => {
    if(e.target.textContent == `C`) {
      input.textContent = 0 ;
      tempNum = ``;
      opsArr = [];
      numsArr = [];
      total = 0;
    }else {
      tempNum += item.innerHTML;
      input.textContent = tempNum;
    };
  });
});

result.addEventListener(`click`, e => {
  numsArr.push(Number(tempNum));
  if(total == 0){
    total += numsArr[0];
  };
  for(let i = 0 ; i < opsArr.length; i++) {
    doMath(total, numsArr[i + 1],opsArr[i]);
  };
  input.textContent = total;
  numsArr = [];
  opsArr = [];
});

function doMath(n1,n2,calc) {
  switch(calc) {
    case "+" :
      total += n2;
      break;
    case '-' :
      total -= n2;
      break;
    case '*' :
      total *= n2;
      break;
    case '/' :
      total /= n2;
      break;    
    default:
  };
};