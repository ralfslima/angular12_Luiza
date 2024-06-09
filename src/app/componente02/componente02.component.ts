import { Component, OnInit } from '@angular/core';
import { ComentarioService } from '../servicos/comentario.service';

@Component({
  selector: 'app-componente02',
  templateUrl: './componente02.component.html',
  styleUrls: ['./componente02.component.css']
})
export class Componente02Component implements OnInit {

  // Vetor de comentários
  vetor : any[] = [];

  // Construtor
  constructor(private servico:ComentarioService) { }

  // Após o componente ser inicializado
  ngOnInit(): void {
    this.servico.selecionarComentarios()
    .subscribe(retorno => this.vetor = retorno);
  }

  // Método de cadastro
  cadastrar(){
    this.servico.cadastrarComentario()
    .subscribe(retorno => this.vetor.unshift(retorno));
    // O comando unshift irá exibir o novo valor cadastrado no início do vetor
  }

  // Método de alteração
  alterar(){
    this.servico.alterarComentario()
    .subscribe(retorno => {
      // Obter a posição da postagem 101
      let indice101 = this.vetor.findIndex(obj => {return obj.id == 101});
      
      // Se retornar -1, quer dizer que não existe
      if(indice101 == -1){
        alert('Cadastre um comentário!');
      }else{
        this.vetor[indice101] = retorno;
        alert('Comentário alterado!');
      }
    });
  }

  // Método de remoção
  remover(){
    this.servico.removerComentario()
    .subscribe(retorno => {
      // Obter a posição da postagem 101
      let indice101 = this.vetor.findIndex(obj => {return obj.id == 101});
      
      if(indice101 == -1){
        alert('Cadastre um comentário!');
      }else{
        this.vetor.splice(indice101, 1);
        alert('Comentário removido!');
      }
    });
  }

}
