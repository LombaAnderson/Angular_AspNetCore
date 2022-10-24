import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

 public titulo = 'Professores';
 public professorSelecionado : Professor;

public professores =  [

{id: 1,nome: 'Lomba', disciplina: 'Francês'},
{id: 2,nome:'Oliveira', disciplina: 'Português'},
{id: 3,nome:'Jonatan', disciplina: 'Matemática'},
{id: 4,nome:'Rafaela', disciplina: 'Física'},
{id: 5,nome:'Maria',  disciplina: 'Biologia'},

];

professorSelect(professor: Professor){
  this.professorSelecionado = professor;
 }

 voltar(){
   this.professorSelecionado = null;
 }

  constructor() { }

  ngOnInit(): void {
  }

}
