# 💬 Spring AI Frontend - ReactJS

Este é um **cliente ReactJS** que consome a API REST exposta pelo projeto [spring-ai-chat](https://github.com/robgolrj/spring-ai-chat). A aplicação permite:

* Conversar com um modelo de linguagem natural (chat);
* Gerar **receitas inteligentes** com base em ingredientes;
* Criar **imagens com IA** a partir de descrições textuais.

🔗 **Repositório do backend (Spring Boot + Spring AI):**
👉 [https://github.com/robgolrj/spring-ai-chat](https://github.com/robgolrj/spring-ai-chat)

---

## 🚀 Funcionalidades

### 🧠 Talk with AI

Interaja com um modelo de linguagem natural.

```
GET /ai/ask-ai-options?prompt=...
```

### 🍳 Recipe Generator

Crie receitas completas com base nos ingredientes, culinária e restrições alimentares.

```
GET /ai/recipe-creator?ingredients=...&cuisine=...&dietaryRestrictions=...
```

### 🖼️ Image Generator

Gere imagens utilizando IA com o modelo DALL·E da OpenAI.

```
GET /ai/generate-image?prompt=...
```

---

## 🧑‍💻 Tecnologias Utilizadas

* React 18+
* Axios
* React Markdown
* CSS
* Integração com API REST

---

## ⚙️ Como executar

### 1. Clone este repositório:

```bash
git clone https://github.com/robgolrj/ai-api-client-reactjs.git
cd ai-api-client-reactjs
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure a URL base da API

Edite o arquivo `src/services/api.js`:

```js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/ai", // ou endereço da sua API Spring Boot
});

export default api;
```

> 📝 Certifique-se de que o backend está rodando e acessível.

### 4. Execute o projeto

```bash
npm start
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## 📁 Estrutura do Projeto

```
src/
├── pages/
│   ├── chat/
│   │   └── TalkWithAi.jsx
│   ├── image/
│   │   └── ImageGenerator.jsx
│   └── recipes/
│       └── RecipeGenerator.jsx
├── services/
│   └── api.js
├── App.jsx
└── App.css
```

---

## 📦 Repositórios

* 🔧 **API Backend (Spring Boot + Spring AI)**
  👉 [https://github.com/robgolrj/spring-ai-chat](https://github.com/robgolrj/spring-ai-chat)

* 💬 **Frontend ReactJS**
  👉 [https://github.com/robgolrj/ai-api-client-reactjs](https://github.com/robgolrj/ai-api-client-reactjs)
