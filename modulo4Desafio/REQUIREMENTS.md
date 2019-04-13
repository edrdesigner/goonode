### Desafio Node 4

No desafio final você criará uma API REST com AdonisJS para um
sistema de agendamentos de compromissos (calendário). Deixe toda
estrutura com ESLint, EditorConfig, etc, que configuramos até agora
pronta.

### Requisitos funcionais

- [x] O usuário deve poder criar uma conta com nome, e-mail e senha
- [x] O usuário deve poder autenticar na aplicação com e-mail e senha
- [x] O usuário deve poder cadastrar eventos com título, localização data e horário
- [x] O usuário deve poder excluir um evento
- [x] O usuário deve poder compartilhar um evento informando o e-mail do destinatário,
      este deve receber as informações do evento por e-mail

### Requisitos não funcionais

- Utilize banco de dados SQL
- Utilize fila Redis para programar envio de e-mails no compartilhamento do evento

### Regras de negócio

- [x] O e-mail do usuário é único
- [x] O usuário não pode alterar seu e-mail
- [x] Não deve ser possível cadastrar dois eventos no mesmo horário no calendário
      de um usuário
- [x] O usuário só pode ver editar/deletar seus eventos
- [x] O usuário não pode editar/deletar um evento que já passou
- [x] Todos os cadastros devem possuir validação de campos com mensagens legíveis
