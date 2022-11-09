import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  freunde = ["charles"];
  bilder = ["assets/images/hamster1.jpg"];
  description=["2 Jahre Alt, und gräbt gerne Löcher"]
  constructor() { }

  addFriend(name:string,text:string,image:string){
    this.freunde.push(name);
    this.bilder.push(image);
    this.description.push(text);

  }
}
