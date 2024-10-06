function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(code: number, message: string): never {
  throw new Error(`Error ${code}: ${message}`);
}

showMessage("123");
console.log(calc(1, 2));

