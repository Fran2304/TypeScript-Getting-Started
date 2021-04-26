import { Person} from './person'
// <reference path="person.ts" /> se cambia porinport

// Implementando interface Person con una clase PLayer para despues instanciarlo en app.ts

 export class Player implements Person{
  name: string;
  age? : number;
  highScore: number;
  formatName() {
    return this.name.toUpperCase();
  };
}