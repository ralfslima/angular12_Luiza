import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  // Construtor
  constructor(private http:HttpClient) { }

  // Selecionar todos os comentários
  selecionarComentarios():Observable<any[]>{
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }

  // Cadastrar um comentário
  cadastrarComentario():Observable<any>{
    return this.http.post<any>('https://jsonplaceholder.typicode.com/posts', {'userId':1, 'title':'Meu comentário', 'body':'Enviando um comentário aleatório'});
  }

  // Alterar um comentário
  alterarComentario():Observable<any>{
    return this.http.put<any>('https://jsonplaceholder.typicode.com/posts/1', {'id':1, 'userId':1, 'title':'Comentário alterado', 'body':'Um novo texto'});
  }

  // Remover um comentário
  removerComentario():Observable<any>{
    return this.http.delete<any>('https://jsonplaceholder.typicode.com/posts/1');
  }

}
