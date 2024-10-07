import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nintendog } from './models/nintendog';
import { ImaginaryFriend } from './models/imaginaryFriend';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  myWisdom : string = "Je n'aurai jamais accès à la propriété en raison du marché inflationniste.";
  n : number;
  
  hateList : string[] = ["Enseigner à des étudiants en informatique", "Les cours à 8h du matin", "Publicités de Hero Wars"];
  dog : Nintendog = new Nintendog("Félix-Antoine", "/assets/img/nintendog.png");

  friends : ImaginaryFriend[] = [
    new ImaginaryFriend("Benny", "taxidermiste"),
    new ImaginaryFriend("Simone", "artiste ASMR"),
    new ImaginaryFriend("Salma", "apicultrice")
  ];

  name ?: string;
  occupation ?: string;

  darkMode : boolean = false;

  constructor(){
    this.n = 14; // Hihihihi j'ai dépassé 13 malgré les consignes 🤫
  }

  addFriend(){
    if(this.name != undefined && this.occupation != undefined){
      this.friends.push(new ImaginaryFriend(this.name, this.occupation));
      this.name = "";
      this.occupation = "";
    }
  }

  removeFriend(){
    this.friends.pop();
  }

  toggleMode(){
    this.darkMode = !this.darkMode;
  }

}