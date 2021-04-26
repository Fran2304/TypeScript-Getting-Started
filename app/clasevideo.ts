/// <reference path="player.ts" />

// function startGame() {
//   // starting a new game

//   let playerName: string | undefined = getInputValue('playername');
//   logPlayer(playerName);

//   postScore(100, playerName);
//   postScore(-5, playerName);
// }


function logPlayer(name : string = 'MultiMath Player'):void{
  console.log(`New game starting for player ${name}`);
}

/// Duda why el htmlinputelement? Se refactoriza en utility :) 

// function getInputValue(elementID: string): string | undefined {
//   const inputElement : HTMLInputElement = <HTMLInputElement>document.getElementById(elementID)
//   if(inputElement.value === '') {
//     return undefined;
//   } else {
//     return inputElement.value
//   }
// }

// En la funcion postScore, se define una funcion logger que tiene tipo función, pero no cualquier tipo de función, esta variable debe de almacenar una funcion que solo tenga 1 parametro (que sea string) y que sea :void. Aja! como las funciones logMensage y logError. Entonces dependiendo si el numero que se le pase a postscore como score es mayor a 0 o no dependerá que función se asignará. Despues de eso debemos de llamar a la funcion, se llama a logger que guarda la funcion y pasarla el argumento que deb ser una string :) 

function postScore(score :number, playerName: string = 'MultiMath Player') {
  let logger : (value:string) => void;
  if (score < 0) {
    logger = logError;
  }else {
    logger = logMessage
  }

  logger(`Score : ${score}`)

  const scoreElement : HTMLElement | null = document.getElementById('postedScore')
  scoreElement!.innerText = `${score} - ${playerName}`;
}
// Se define ambas funciones. Una es una funcion regular y otra es una arrow fucntion , pero tiene la misma estructurs 1 parametro, y resulado :void. Ver funcion postScore
const logMessage = (message :string)=> console.log(message);

function logError(err: string){
  console.error(err)
}

// document.getElementById('startGame')!.addEventListener('click', startGame);

// ----------------------- *** ------------------------
/*HERENCIA EN INTERFACES: Manage hereda todas las propiedas de Employee. Con esto la interface Manage tendrá también name y title*/
// interface Employee {
//   name : string;
//   title : string;
// }

// interface Manage extends Employee{
//   departament :string;
//   numberOfEmployees: number;
//   scheduleMeeting: (topic:string) => void; 
// }

// ----------------------- *** ------------------------

/*Implemnetacion de interfaces con objectos literales: 
Tenemos Se tiene a  Employee interface y developer que se declaró como un objeto normal, no vemos ninguna relación verdad, PERO la verdad es que el objeto implementa la interfazs de employee ¿Cómo asíii?, pues comparten 2 propiedades con el mismo tipo , ok yyy? Pues de esa manera como cumple con las propiedades este objeto developer se puede usar en cualquier lugar donde se requiera un objeto que cumpla con las caracteriticas de la interfaz Employee */

// interface Employee {
//   name : string;
//   title : string;
// }

// let developer = {
//   name: 'Michelle',
//   title: 'Senior Type Script Develope',
//   editor: 'Visual Studio Code'
// }

// let newEmployee = developer;
// developer.name = 'holi'
// console.log(developer);
// console.log(newEmployee);

// Como implementar interfaces con objetos literales
// let myResult: Result = {
//   playerName :'Marie',
//   score: 5,
//   problemCount : 5,
//   factor: 7,
// };
// console.log(myResult);

// let player: Person = {
//   name: 'Daniel',
//   formatName: () => 'Dan'
// }

// console.log(player.formatName());

// Crear instancia de player 

const firstPLayer : Player = new Player();
firstPLayer.name = 'Lanier';
console.log(firstPLayer.formatName());

// Class Members

// class Developer {
//   departament : string;
//   private _title: string;
//   get title() : string {
//     return this._title;
//   }
//   set title (newTitle: string) {
//     this._title = newTitle.toLocaleUpperCase();
//   }
//   documentRequirements(requirements: string):void {
//     console.log(requirements)
//   }
// }

// ----------------------- *** ------------------------

/*HERENCIA: Webdeveloper hereda todas las propiedas de developer */ 

// class WebDeveloper extends Developer {
//   favoriteEditor: string;
//   writeTypeScript(): void {
//     // write awesomecode
//   }
// }

// ----------------------- *** ------------------------
// IMPLEMENTACION DE CLASE:Se declara una variable con type de class WebDeveloper, se usa la palabra clave new seguido de la clase a implementar WebDeveloper, esto es un contructro de clase y crea una nueva instacia

// let webdev : WebDeveloper = new WebDeveloper();
// webdev.departament = 'Software Engineering';
// webdev.favoriteEditor = 'Visual Studio';
// webdev.title = 'hey';
// console.log(webdev);

// ----------------------- *** ------------------------

// IMPLEMENTING AN INTERFACE: Se define la inteface se usa el keyword implements, se cpia tal cual las propiedades, pero se define el metodo (se coloca codigo dentro :) ) 
// interface Employee {
//   name: string;
//   title: string;
//   logID: () => string;
// }

// class Engineer implements Employee {
//   name:string;
//   title: string;
//   logID() {
//     return `${this.name}_${this.title}`
//   }
// }

// ----------------------- *** ------------------------

// STATIC MEMBERS
// WebDeveloper:
/* Normalmente se pueden acceder a los miembros de una clase desde la dot notation cuando ya fueron instanciados, pero con los static membres no sucede así, se puede acceder a ellos solo desde la clase. Si se hace referencias de  estos dentro de la clase no se usa el this y si se quiere llamarlos no es necesario instanciarlos, solo se usa  el dot notation*/

// class Webdeveloper extends Developer {
//   static jobDescription : string = 'Build cool things';
//   static logFavoriteProtocol() {
//     console.log('HTTP, OF COURSE');
//   }
//   logJobDescription() :void {
//     console.log(Webdeveloper.jobDescription);
//   }
// }
// Webdeveloper.logFavoriteProtocol()

// // Si se instancia solo se puede acceder a las propiedades/members normales no a los estaticos
// let firstDeveloper : Webdeveloper = new Webdeveloper();
// firstDeveloper.logJobDescription();

// -------------------- ****** ---------------
/*CONSTRUCTOR:
Funcion especial, se ejecuta cuando se cree la instacia y queremos una inicializacion con valores (x lo que se le debe de pasar argumentos cuando se crea instacia new). De igual modo se usa super si es que esa clase hereda de un padre  un constructor  (En este caso hereda el constructor que hace console.log de la Developer.) Por ello cuando creemos una instancia WebDeveloper que pide un argumente (string) y hagamos console.log, llamará al constructor de developer  ('Creating a new developer') y tambien asignará el argumento que se le pase a la propiedad favoriteEditor */

// class Developer {
//   constructor(){
//     console.log('Creating a new developer');
//   }
// }

// class WebDeveloper extends Developer {
//   readonly favoriteEditor: string; // readonly, ya no permite modificar
//   constructor(editor :string) {
//     super();
//     this.favoriteEditor = editor;
//   }
// }

// let firstDeveloper: WebDeveloper = new WebDeveloper('Fran')
// console.log(firstDeveloper);
