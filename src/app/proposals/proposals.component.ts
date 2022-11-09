import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {
  freunde = ["charles", "cleo", "marina", "severin"];
  bilder = ["assets/images/hamster1.jpg",
  "assets/images/hamster2.jpg","assets/images/hamster1.jpg",
  "assets/images/hamster2.jpg"];
  description=["2 Jahre Alt, und gräbt gerne Löcher","3 Jahre Alt, und frisst Karotten", ]
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
