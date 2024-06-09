import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-componente01',
  templateUrl: './componente01.component.html',
  styleUrls: ['./componente01.component.css']
})
export class Componente01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Formulário reativo
  formulario = new FormGroup({
    nome: new FormControl(''),
    cidade: new FormControl('')
  });
}









