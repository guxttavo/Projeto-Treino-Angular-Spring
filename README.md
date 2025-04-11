# 🎓 Sistema Escolar - Angular + .NET

Sistema de gestão escolar desenvolvido utilizando as arquiteturas **DDD (Domain-Driven Design)** e **Repository Pattern**, com front-end em **Angular** e back-end em **.NET**.

---

## 📌 Índice

- [📖 Sobre o Projeto](#📖-sobre-o-projeto)
- [🛠 Tecnologias Utilizadas](#🛠-tecnologias-utilizadas)
- [🧱 Arquitetura do Projeto](#🧱-arquitetura-do-projeto)
- [✅ Funcionalidades](#✅-funcionalidades)
- [🚀 Como Rodar o Projeto](#🚀-como-rodar-o-projeto)
- [🖼️ Imagens do Projeto](#🖼️-imagens-do-projeto)
- [📚 Pontos de Aprendizado](#📚-pontos-de-aprendizado)
- [📄 Licença](#📄-licença)

---

## 📖 Sobre o Projeto

Este projeto tem como foco a construção de um **sistema de gestão escolar**, pensado para ser utilizado internamente por uma escola. Seu principal objetivo é **automatizar e facilitar os processos administrativos mais comuns dentro do ambiente escolar**, promovendo mais organização, agilidade e controle das informações.

Entre as funcionalidades principais do sistema estão:

- Cadastro e gerenciamento de **alunos** e **professores**
- Criação e organização de **disciplinas**
- **Geração de certificados** personalizados para os alunos
- **Gestão de informações internas**, como controle de turmas e estrutura pedagógica

Além de atender às demandas práticas de uma escola, o projeto também teve como objetivo o estudo e a aplicação de boas práticas de desenvolvimento de software. Por isso, foi utilizado um conjunto de padrões e arquiteturas modernas, como:

- **DDD (Domain-Driven Design)**, para organizar melhor a lógica de negócio e manter o código mais limpo e desacoplado
- **Repository Pattern**, para facilitar o acesso aos dados de forma mais organizada e reutilizável

## 🛠 Tecnologias Utilizadas

### Backend (.NET)
- ASP.NET Core
- Entity Framework Core
- AutoMapper
- SQLite

### Frontend (Angular)
- Angular
- TypeScript
- RxJS

### DevOps
- Docker

---

## 🧱 Arquitetura do Projeto

### 🔹 Backend

Organizado em camadas:

- **Domain**: Entidades, interfaces e regras de negócio.
- **Application**: Casos de uso e serviços da aplicação.
- **Infrastructure**: Acesso ao banco de dados e implementações de repositórios.
- **API**: Camada de apresentação da aplicação (controllers, endpoints REST).

### 🔹 Frontend

Organizado por **módulos e componentes**, com uso de **services** para comunicação com a API e **interfaces** para tipagem dos dados.

---
