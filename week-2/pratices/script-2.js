let object1 = {
  op: "+",
  n1: 8,
  n2: 7
}

class Number {
  constructor(n1, n2, op) {
    this.n1 = n1;
    this.n2 = n2;
    this.op = op;
  }
}

let object2 = new Number(8, 7, "-");

function calculate(args) {
  let result;
  if (args.op === "+") {
    result = args.n1 + args.n2;
  } else if (args.op === "-") {
    result = args.n1 - args.n2;
  } else {
    result = "Not supported";
  }
  return result;
}
calculate(object1);
calculate(object2);