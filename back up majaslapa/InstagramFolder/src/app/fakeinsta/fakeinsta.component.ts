import { Component, OnInit } from '@angular/core';
const MAXRANGE = 300;

@Component({
  selector: 'app-fakeinsta',
  templateUrl: './fakeinsta.component.html',
  styleUrls: ['./fakeinsta.component.css']
})
export class FakeinstaComponent  {

 
  isVisible = true;
  imageSources = [];
  //textSource = "";

  increaseImageCount(){
    const id = this.generateId();
    this.imageSources.push(
      `https://picsum.photos/id/${id}/200/150`
    )
    //this.textSource. ("Hello")
    // this.imageCount++;
  }

  

  toggle(){
    this.isVisible = !this.isVisible;
  }
  
  private generateId(){
    return Math.round(Math.random() * MAXRANGE) + 1;
  }

}

