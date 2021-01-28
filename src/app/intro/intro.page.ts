import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [{
    title: "Sony Music",
    subtitle: "ESCUCHA TU MUSICA DONDE SEA",
    description: "La-la-la-la-solus Vita Et vidit Dominus, et vivat",
    icon: "play"
  }, {
    title: "Sony Music",
    subtitle: "Sin necesidad de pagar subscripciones",
    description: "La-la-la-la-solus Vita Et vidit Dominus, et vivat",
    icon: "stop"
  }, {
    title: "Sony Music",
    subtitle: "ahora con modo off-line",
    description: "La-la-la-la-solus Vita Et vidit Dominus, et vivat",
    icon: "headset"
  }]

  constructor(private router:Router, private storage: Storage ) { }

finish(){
  this.storage.set('isIntroShowed', true);
  this.router.navigateByUrl("/home");
}

  ngOnInit() {
  }

}
