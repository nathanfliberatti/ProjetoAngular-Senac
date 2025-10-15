// CLASSE PESSOA.SERVICE.TS

import { Injectable } from '@angular/core';
import { Pessoa } from '../types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly API = "http://localhost:3000/pessoas";

  //Injetar o cliente HTTP para chamar a API
  constructor(private httpClient: HttpClient) { }

  //Consulta via método GET
  listar(): Observable<Pessoa[]> {
    return this.httpClient.get<Pessoa[]>(this.API)
  }

  //Consulta via método GET para filtrar um único usuário
  buscarPorId(id: number): Observable<Pessoa | undefined> {
    return this.httpClient.get<Pessoa>(this.API + `/${id}`);
  }

  //Inclusão via método POST
  incluir(pessoa: Pessoa): Observable<Pessoa> {
    return this.httpClient.post<Pessoa>(this.API, pessoa)
  }

  //Alteração via método PUT
  editar(pessoa: Pessoa): Observable<Pessoa> {
    const url = `${this.API}/${pessoa.id}`
    return this.httpClient.put<Pessoa>(url, pessoa)
  }

  //Exclusão via método PUT
  excluir(id: number): Observable<Pessoa> {
    return this.httpClient.delete<Pessoa>(this.API + `/${id}`);
  }


}
