import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  redirect = 'https://google.com';
  img = 'https://images.unsplash.com/photo-1611095560192-ccc932f617e1?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80';
  imgAlt = 'Imagen de Prueba';

  title = 'title';
  description = 'description';
  time = 'hace 1 Dia';

  constructor() { }

  ngOnInit(): void {
  }

}
