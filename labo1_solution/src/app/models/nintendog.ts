export class Nintendog{

    age : number = 20;
  
    constructor(public name : string, public imgUrl : string){}
  
    dogInfo() : string{
      return this.name + " est un Nintendog de " + this.age + " an(s).";
    }
  
  }