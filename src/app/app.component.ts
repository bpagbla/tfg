import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  template: `<h1>{{ message }}</h1>`,
})
export class AppComponent implements OnInit {
  message: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    // Llama al servicio para obtener la respuesta del backend
    this.apiService.getUsuario().subscribe(
      (response) => {
        this.message = response.message;  // Asigna el mensaje a una variable
        console.log(response);  // Muestra la respuesta 
      },
      (error) => {
        console.error('Error al conectar con el backend:', error);  // Muestra el error en consola si ocurre
      }
    );
  }
}
