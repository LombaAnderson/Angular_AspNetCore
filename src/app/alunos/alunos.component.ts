import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

titulo = 'Alunos';

public alunos =[
  {id: 1, nome :'Anderson', sobrenome: 'Lomba', telefone: 32345771},
  {id: 2,nome:'Juliano',sobrenome: 'Moreira', telefone: 32335771},
  {id: 3,nome:'Jonas', sobrenome: 'Oliveira', telefone: 32375771},
  {id: 4,nome:'Vinicius',sobrenome: 'Ferreira', telefone: 32345771},
  {id: 5,nome:'Marta', sobrenome: 'Araújo', telefone: 32345771},
  {id: 6,nome:'Gabriela', sobrenome: 'Almeida', telefone: 22345771},
  {id: 7,nome:'Solange', sobrenome: 'Gomes', telefone: 32145771}
];

  constructor() { }

  ngOnInit(): void {
  }

}
