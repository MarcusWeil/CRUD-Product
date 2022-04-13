# CRUD-Product
Projeto baseado no curso Cod3r de recursos essenciais do Angular, onde são aplicados conceitos gerais em cima de um backend, mas com foco no Frontend.
As funções e chamadas são as de Criar, ler, atualizar, excluir, além de um tratamento de dados utilizando errorHandler, [SnackBar utilizando o Material](https://github.com/MarcusWeil/CRUD-Product/blob/main/frontend/src/app/components/product/product.service.ts#L14-L23) e rotas com as próprias ferramentas de Routing do Angular.

Página Inicial composta por um card de apresentação, e um grid exibindo os dois projetos sendo desenvolvidos no momento:

![web](https://user-images.githubusercontent.com/93293231/163083205-d074907a-c723-460f-86cf-3ddc8292124b.gif)
<br>

A tela seguinte possui atualmente as operações CRUD, que são abertas em um novo link com o id do produto:
<img width="1000" alt="image" src="https://user-images.githubusercontent.com/93293231/163083587-63934fa1-af89-49e2-a71c-7767c19b60eb.png">
<br>
As operações de Atualizar e Excluir abrem as páginas de edição(já preenchidas com os dados) e de exclusão(read-only):<br>
<img width="450" alt="image" src="https://user-images.githubusercontent.com/93293231/163083973-57a6c9c8-60fd-4454-81a2-aae6e4f24bd8.png">
<img width="450" alt="image" src="https://user-images.githubusercontent.com/93293231/163083930-34eeb13d-1321-4a17-a09f-e7f98d2f168f.png">
<br>
É exibido um Snackbar do Material ao realizar alguma operação:<br>
<img width="297" alt="image" src="https://user-images.githubusercontent.com/93293231/163084099-a176d2b4-c743-4233-a507-bc051b238cd4.png">
<br>
E um erro caso haja falha na requisição por algum motivo:<br>
<img width="297" alt="image" src="https://user-images.githubusercontent.com/93293231/163084205-d4fd3ce8-d5c5-41d6-8d9f-ecbe4565ce8d.png">

Melhorias em Backlog:
<ol>
  <li>Responsividade dos itens na tela Home</li>
  <li>Botões funcionais nos itens na tela Home<b>(In progress)</b></li>
  <li>Transformar cadastrar Produto > Modal Pop up</li>
  <li>Transformar editar Produto > Modal Pop up</li>
  <li>Transformar excluir Produto > Modal Pop up</li>
  <li>Atualizar id dos produtos dinamicamente</li>
  <li>Verificar se houve alteração nos dados quando Update</li>
  <li>Verificar se NOVO PRODUTO é válido</li>
  <li>Fazer tratamento de dados em 'product.price' para substituir a vírgula por ponto</li>
  <li>Fixar Header quando tiver scroll<b>(In progress)</b></li>
  <li>Título dinâmico no Header<b>(In progress)</b></li>
  <li>Adicionar Settings</li>
  <li>Settings > Alterar Idioma</li>
  <li>Tela de Login</li> 
  <li>Autenticação no login</li>

</ol>



