import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './memeber.component.html',
  styleUrls: ['./memeber.component.scss']
})
export class MemeberComponent implements OnInit {
  beneficios =  [
    'beneficio',
    'beneficio',
    'beneficio',
    'beneficio',
  ];
  redirect = 'https://google.com';
  title = 'un titulo';

  constructor() { }

  ngOnInit(): void {
  }

}
