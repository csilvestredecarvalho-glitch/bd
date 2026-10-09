# README - Banco de Dados Escola (`escola.sql`)



## Sobre o Banco de Dados

O banco de dados **escola** foi projetado para gerenciar a estrutura acadêmica e administrativa do aplicativo **Scholar**. Ele organiza dados de alunos, responsáveis, professores, coordenação, turmas, cursos, disciplinas, avaliações, boletins e endereços.

---

## Estrutura das Tabelas

* **alunos**: Armazena registros dos estudantes (CPF, Nome, Data de Nascimento, E-mail, Curso e chaves estrangeiras de endereço e dados pessoais).


* **responsaveis**: Registra os responsáveis pelos alunos, incluindo parentesco, CPF e referências a endereço e dados pessoais.


* **alunos_responsaveis**: Tabela associativa (NxN) para mapear a relação entre alunos e seus respectivos responsáveis.


* **coordenadores**: Informações dos coordenadores acadêmicos e seus cursos vinculados.


* **cursos**: Cursos ofertados com nome, carga horária, duração e descrição (ex: Análise e Desenvolvimento de Sistemas, Recursos Humanos, Farmácia, etc.).


* **turmas**: Agrupamento dos cursos por ano letivo, turno e sala.


* **disciplinas**: Disciplinas associadas a cada curso e ministradas por professores específicos.


* **matricula**: Registra a situação da matrícula dos alunos nas turmas (Ativa, Suspensa, Cancelada, Transferida, Inativa).


* **avaliacoes**: Registra avaliações aplicadas por disciplina, com data e pontuação.


* **boletins**: Guarda médias finais, situação acadêmica (Aprovado, Recuperação, Reprovado) e frequência do aluno.


* **boletins_disciplinas**: Detalhamento das notas das disciplinas por boletim.


* **dados_pessoais**: Centraliza informações de contato e formação acadêmica.


* **telefones**: Telefones de contato associados aos dados pessoais.


* **Endereçamento (estados, cidades, bairros, ruas)**: Estrutura normalizada para gestão de endereços completos.



---

## Visões (Views) Criadas

O banco inclui views otimizadas para consulta e geração de relatórios no app:

* **vw_01_alunos_cursos**: Relação de alunos, suas matrículas e os cursos vinculados.


* **vw_02_alunos_turmas_cursos**: Exibe turmas, salas e turnos dos alunos.


* **vw_03_disciplinas_professores**: Exibe as disciplinas com os respectivos professores responsáveis.


* **vw_04_disciplinas_professores_cursos**: Cruzamento entre curso, disciplina e professor.


* **vw_05_alunos_responsaveis**: Exibe o aluno vinculado ao seu responsável e telefone de contato.


* **vw_06_alunos_disciplinas_notas**: Notas e médias obtidas nas disciplinas.


* **vw_07_alunos_turmas_disciplinas_professores**: Visão geral de alunos, turmas, disciplinas e docentes.


* **vw_08_desempenho_academico**: Relatório de médias finais, frequência e situação acadêmica.


* **vw_09_situacao_matriculas**: Acompanhamento do status da matrícula.


* **vw_10_relatorio_academico**: Visão consolidada para boletins e relatórios gerais.



---

## Tecnologias e Configurações

* **SGBD**: MySQL / MariaDB (compatível com PHPMyAdmin)


* **Engine**: InnoDB (suporte a transações e chaves estrangeiras)


* **Charset**: `utf8mb4_general_ci`
