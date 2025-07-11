# TrIAvel

Aplicativo web para planejar viagens com inteligência artificial, desenvolvido com .NET no backend e React no frontend. Permite que o usuário receba sugestões personalizadas de viagem já no início, com base em imagens e preferências.

---

## Funcionalidades (Escopo Inicial)

- **Autenticação**
  - Login/autenticação via Google (OAuth2)

- **Onboarding com IA**
  - Após login, o usuário envia uma foto de destino ou descreve interesses (ex: natureza, gastronomia)
  - A IA analisa a imagem e preferências, sugerindo **destinos e roteiros personalizados**

- **Gerenciamento de Viagens**
  - Criar viagens com: título, destino, datas, orçamento, descrição e upload de fotos
  - Listar, editar e excluir viagens
  - Histórico de viagens (passadas e futuras) com filtros e busca

- **Itinerário com Atividades**
  - Adicionar atividades diárias (título, data/hora, local, custo, notas)
  - IA sugere ou complementa atividades quando solicitado

- **Recolaboração com IA**
  - Durante planejamento ou viagem, o usuário pode solicitar sugestões com base em clima, localização ou perfil

---

## Protagonismo da IA

A inteligência artificial tem papel central desde o primeiro contato: ela sugere destinos e roteiros com base nas imagens e preferências do usuário, ajustando em tempo real conforme o uso, garantindo uma experiência realmente personalizada.

---

## Tecnologias Utilizadas

- **Backend**: .NET (ASP.NET Core, .NET 7+), EF Core, NodeJS com Express 
- **Frontend**: React (com TypeScript) ou Blazor WebAssembly, TailwindCSS  
- **Banco de Dados**: SQL Server ou PostgreSQL  
- **Armazenamento de imagens**: Azure Blob Storage ou AWS S3  
- **Autenticação**: Google OAuth (via Identity)  
- **IA**: OpenAI ChatGPT API para geração de itinerários e sugestões

---

## Visão Geral do Fluxo

1. Usuário realiza login com Google  
2. Onboarding com IA: envia foto / descreve interesses  
3. IA retorna sugestões de viagem (destino + roteiro)  
4. Usuário aceita, edita ou solicita novas sugestões  
5. Viagem é registrada com itinerário e fotos  
6. Durante a viagem, usuário pode pedir novas sugestões (clima, localização, proximidade)  
7. Histórico, filtros, busca e possibilidade de excluir viagem ou conta

---

