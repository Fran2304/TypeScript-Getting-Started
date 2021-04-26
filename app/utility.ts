// class Utility {
//   static getInputValue(elementID: string): string {
//     const inputElement: HTMLInputElement = <HTMLInputElement>(
//       document.getElementById(elementID)
//     );
//       return inputElement.value;
//   }
// }

// working with modules, solo se cambia para tener más de 1 cosa que exportar, antes n existia la funcion logger.


function getInputValue(elementID: string): string {
  const inputElement: HTMLInputElement = <HTMLInputElement>(
    document.getElementById(elementID)
  );
    return inputElement.value;
}

function logger (message:string):void {
  console.log(message);
}

export { getInputValue as getValue, logger}
