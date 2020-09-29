import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  heading = 'Searing to new heights';
  subheading = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet posuere tortor, id aliquet erat. Duis in ultricies dui. Donec fringilla nulla sollicitudin rutrum accumsan';
  materia = 'Angular';
  constructor() { }

  ngOnInit(): void {
  }

}
