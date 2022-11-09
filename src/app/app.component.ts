import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  textAusArray = ["Hallo mein Name ist Frederik1!", 
  "Hallo mein Name ist Gabi2! "];

  bilderausArray = ["assets/images/hamster1.jpg",
  "assets/images/hamster2.jpg"];

  title = 'my-first-project';

  buttonClicked() {
    alert("Fenster auf");
  } 
  btn2 = () => {
    alert("test2");
  }
}

 