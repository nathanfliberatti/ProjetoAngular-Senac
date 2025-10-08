import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../core/types/types';
import { PessoaService } from '../../core/services/pessoa-service';

@Component({
  selector: 'app-pessoa-listagem',
  imports: [],
  templateUrl: './pessoa-listagem.html',
  styleUrl: './pessoa-listagem.css'
})
export class PessoaListagem implements OnInit{
  listaPessoas:Pessoa[] = [];

  constructor(private service: PessoaService) {}
  ngOnInit(): void {
    this.listaPessoas = this.service.listar();
  }


}
