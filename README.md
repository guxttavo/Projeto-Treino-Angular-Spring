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

Este projeto tem como objetivo simular um sistema de gestão para uma escola, onde é possível cadastrar alunos, professores, turmas e disciplinas.

O sistema foi desenvolvido com foco em **boas práticas de arquitetura**, separando bem as responsabilidades através de **camadas** e utilizando os padrões **DDD** e **Repository Pattern**.

---

## 🛠 Tecnologias Utilizadas

### Backend (.NET)
- ASP.NET Core
- Entity Framework Core
- AutoMapper
- SQL Server (ou outro banco, conforme configurado)
- DDD (Domain-Driven Design)
- Repository Pattern

### Frontend (Angular)
- Angular
- TypeScript
- Angular Material (ou outra biblioteca de UI, se aplicável)
- RxJS

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

## ✅ Funcionalidades

- [x] Cadastro e listagem de alunos  
- [x] Cadastro de professores  
- [x] Criação de turmas e disciplinas  
- [x] Relacionamento entre alunos, turmas e disciplinas  
- [x] Interface amigável para navegação

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- .NET 6 ou superior  
- Node.js e Angular CLI  
- SQL Server (ou outro banco, conforme configurado)

### Backend

```bash
cd Projeto.Backend
dotnet restore
dotnet build
dotnet run
