import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
})
export class PerfilComponent implements OnInit {
  usuario: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.usuario = localStorage.getItem('myNombreUsuario') || '';
  }

  guardarUsuario() {
    localStorage.setItem("myNombreUsuario", this.usuario);
    this.router.navigate(['/musica']);
  }
}
