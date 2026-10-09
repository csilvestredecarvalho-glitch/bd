# 🗄️ Projeto de Banco de Dados — Modelo Lógico (brModelo)

Este repositório contém a modelagem lógica do banco de dados desenvolvida no software **brModelo**. O projeto abrange entidades, atributos, relacionamentos, chaves primárias e chaves estrangeiras necessárias para a estruturação de uma base de dados relacional.

---

## 📐 Estrutura do Modelo

O arquivo `.brM3` presente neste repositório contém o diagrama lógico composto pelas seguintes tabelas e estruturas:

* **Alunos (`alunos`)**
  * `id_aluno` *(PK)*
  * `nome`
  * `CPF`
  * `data_de_nascimento`
  * `e-mail`
  * `telefone`
  * `endereço`

* **Professores (`professores`)**
  * `id_professores` *(PK)*
  * `nome`
  * `CPF`
  * `formação`
  * `e-mail`
  * `telefone`

* **Cursos (`cursos`)**
  * `id_cursos` *(PK)*
  * `nome`
  * `carga_horária`
  * `duração`
  * `descrição`

* **Disciplinas (`disciplinas`)**
  * `id_disciplina` *(PK)*
  * `pertence a um curso`
  * `possui carga horária`
  * `possui um professor responsável`

* **Turmas (`turmas`)**
  * `id_turma` *(PK)*
  * `pertence a um curso`
  * `possui ano letivo`
  * `turno`
  * `sala`

* **Matrículas (`matriculas`)**
  * `id_matricula` *(PK)*
  * `relaciona um aluno a uma turma`
  * `possui data de matrícula`
  * `situação da matrícula`

* **Avaliações (`avaliações`)**
  * `Campo` *(PK)*
  * `descrição`
  * `data`
  * `valor`

* **Boletins (`boletins`)**
  * `id_boletin` *(PK)*
  * `notas dos alunos`
  * `média final`
  * `situação final`
  * `frequência`

* **Responsáveis (`responsaveis`)**
  * `id_responsaveis` *(PK)*
  * `nome`
  * `CPF`
  * `parentesco`
  * `telefone`

* **Frequência (`frequência`)**
  * `id_frequência` *(PK)*

* **Notas (`notas`)**
  * `id_nota` *(PK)*

---

## 🛠️ Ferramenta Utilizada

* **[brModelo](http://www.sis4.com/brmodelo/)**: Ferramenta freeware para modelagem de bancos de dados relacionais (Modelagem Conceitual e Lógica).

---

## 🚀 Como Abrir o Arquivo

1. Baixe e instale o **brModelo** em seu computador.
2. Clone ou faça o download deste repositório.
3. Abra o **brModelo**.
4. No menu superior, acesse **Arquivo > Abrir** e selecione o arquivo `.brM3` localizado nesta pasta.
