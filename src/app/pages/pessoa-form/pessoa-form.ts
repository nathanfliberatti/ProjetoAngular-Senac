import { ActivatedRoute, Router } from "@angular/router";
import { PessoaService } from "../../core/services/pessoa-service";
import { Pessoa } from "../../core/types/types";
import { FormsModule } from "@angular/forms";
import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoa-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pessoa-form.html',
  styleUrl: './pessoa-form.css'
})
export class PessoaFormComponent {
  titulo = 'Cadastro de Pessoas';
  pessoaId?: number;
  //Defino um objeto pessoa que será incluído ou alterado.
  pessoa: Pessoa = {} as Pessoa;
  constructor(
    private service: PessoaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    //Verifico se é alteração
    this.pessoaId = Number(this.route.snapshot.params['id']);
    if (this.pessoaId) {
      service.buscarPorId(this.pessoaId).subscribe(pessoa => {
        if (pessoa) {
          this.pessoa.id = pessoa.id;
          this.pessoa.nome = pessoa.nome;
          this.pessoa.sobrenome = pessoa.sobrenome;
          this.pessoa.dtNascimento = pessoa.dtNascimento;
        }
      })
    }
  }//Fim do contrutor
  
  submeter() {
    if (this.pessoaId) {
      this.service.editar(this.pessoa).subscribe(() => {
        this.router.navigate(['/pessoas'])
      })
    } else {
      this.service.incluir(this.pessoa).subscribe(() => {
        this.router.navigate(['/pessoas'])
      })
    }
  } //Fim do método submeter
}