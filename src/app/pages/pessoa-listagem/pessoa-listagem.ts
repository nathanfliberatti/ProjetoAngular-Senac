import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../core/types/types';
import { PessoaService } from '../../core/services/pessoa-service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pessoa-listagem',
  imports: [RouterLink],
  templateUrl: './pessoa-listagem.html',
  styleUrl: './pessoa-listagem.css'
})
export class PessoaListagem implements OnInit {
  listaPessoas: Pessoa[] = [];

  constructor(
    private service: PessoaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.listar().subscribe((pessoas) => {
      this.listaPessoas = pessoas;
    })
  }

  excluir(id: number) {
    if (id) {
      this.service.excluir(id).subscribe(() => {
        window.location.reload()
      })
    }
  }

}