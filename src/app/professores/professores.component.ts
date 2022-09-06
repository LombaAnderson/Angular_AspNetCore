import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores';

public professores =  [
  
{id: 1,nome: 'Lomba', disciplina: 'Francês'},
{id: 2,nome:'Oliveira', disciplina: 'Português'},
{id: 3,nome:'Jonatan', disciplina: 'Matemática'},
{id: 4,nome:'Rafaela', disciplina: 'Física'},
{id: 5,nome:'Maria',  disciplina: 'Biologia'},

];

  constructor() { }

  ngOnInit(): void {
  }

}
