import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  petName = 'pupie';
  petImage = 'https://vanmau.org/wp-content/uploads/2018/05/auto-draft.jpg';

  updateName(name) {
    this.petName = name;
  }

  updateImage(image) {
    this.petImage = image;
  }
  constructor() { }

  ngOnInit() {
  }

}
