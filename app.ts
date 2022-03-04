let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Cynthia';

if (typeof userInput === 'string'){
  userName = userInput; 
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while(true) {} infinite loops also never return anything
}

generateError('An error occurred', 500);