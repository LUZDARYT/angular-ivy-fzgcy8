import { Component } from '@angular/core';

import { Product } from './products.models'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Luz Dary';
  age = 41;
  img = 'https://www.canada.ca/content/dam/canada/activities/20221201-3-520x200.jpg';
  btnDisable = true;

  Person = {
    name: 'Luz Dary',
    age: 41,
    avatar: 'https://www.canada.ca/content/dam/canada/activities/20221201-3-520x200.jpg'
  }

  names: string[] = ['Laly', 'Wilson', 'Mati', 'Sebas'];
  NewName = '';

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.webp'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  toggleButton() {
    this.btnDisable = !this.btnDisable;
  }

  increaseAge() {
    this.Person.age += 1;
  }


  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.Person.name = element.value;
  }

  addName() {
    this.names.push(this.NewName);
    this.NewName = '';
  }

  DeleteName(index: number) {
    this.names.splice(index,1);
  }

}

