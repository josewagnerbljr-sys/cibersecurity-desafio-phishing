# Desafio de Phishing — Simulação Educacional Segura

## Visão geral

Este projeto apresenta uma simulação de uma página de login de rede social para fins exclusivamente educacionais, como parte de um laboratório de conscientização em cibersegurança.

A interface reproduz o fluxo conceitual de uma tentativa de phishing, mas foi deliberadamente construída para **não coletar, transmitir ou armazenar senhas reais**.

O objetivo é demonstrar visualmente como uma página falsa pode induzir o usuário a informar credenciais e, ao mesmo tempo, documentar controles que permitem reconhecer e bloquear esse tipo de ameaça.

> **Importante:** este repositório é uma adaptação segura do desafio acadêmico. Não contém mecanismo de captura de credenciais, clonagem de serviços reais, exfiltração, envio de senhas ou coleta de cookies/tokens.

## Objetivos de aprendizagem

- Compreender o conceito de phishing e engenharia social.
- Identificar elementos visuais e comportamentais usados em páginas falsas.
- Estruturar um laboratório local e controlado.
- Documentar decisões técnicas e limitações de segurança.
- Versionar e apresentar o trabalho no GitHub.
- Demonstrar como uma simulação pode ser realizada sem colocar credenciais reais em risco.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- Navegador web
- Git/GitHub
- Opcionalmente, Kali Linux como ambiente de estudo

## Estrutura

```text
desafio-phishing-awareness/
├── README.md
├── LICENSE
├── .gitignore
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── docs/
│   ├── LABORATORIO.md
│   └── RELATORIO.md
└── images/
    └── .gitkeep
```

## Execução

A aplicação é estática e pode ser executada localmente.

### Opção 1 — abrir diretamente

Abra `index.html` no navegador.

### Opção 2 — servidor HTTP local

Com Python instalado:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://127.0.0.1:8000
```

## Funcionamento da simulação

Ao preencher o formulário e clicar em "Entrar", o JavaScript:

1. Intercepta o envio do formulário.
2. Não envia os dados para servidor.
3. Não grava senha em arquivo, cookie, localStorage ou sessionStorage.
4. Exibe uma mensagem de laboratório.
5. Desaconselha explicitamente o uso de credenciais reais.
6. Demonstra como uma página de login pode ser usada como isca de engenharia social.

O endereço de e-mail usado no campo também não é armazenado.

## Credenciais de teste

Use somente valores fictícios, por exemplo:

```text
E-mail: aluno@laboratorio.local
Senha: senha-ficticia-123
```

Não utilize:

- senha real;
- e-mail acompanhado de senha real;
- token;
- cookie;
- chave de API;
- dados bancários;
- dados de terceiros.

## Relação com o desafio original

O material de referência do curso apresenta uma demonstração baseada em Kali Linux e SEToolkit, incluindo clonagem de página e mecanismo de coleta de credenciais.

Nesta entrega, a parte de coleta foi removida e substituída por uma simulação local, mantendo os objetivos acadêmicos de:

- compreender o vetor de ataque;
- visualizar o fluxo de uma página de phishing;
- analisar os indicadores de fraude;
- documentar o experimento;
- desenvolver consciência defensiva.

Essa decisão evita transformar o projeto em um mecanismo operacional para obtenção de credenciais de terceiros.

## Evidências sugeridas

A pasta `/images` está preparada para receber capturas de tela da execução local.

Sugestão de evidências:

```text
/images/
├── 01-home.png
├── 02-formulario-preenchido.png
└── 03-mensagem-laboratorio.png
```

As imagens devem ser produzidas no ambiente do próprio aluno e não devem conter dados pessoais ou credenciais reais.

## Indicadores de phishing demonstrados

Uma análise defensiva deve considerar:

- domínio diferente do domínio legítimo;
- URL encurtada ou suspeita;
- pressão psicológica ou urgência;
- solicitação inesperada de credenciais;
- inconsistências de idioma e layout;
- ausência de conexão HTTPS ou certificado inadequado;
- redirecionamentos desconhecidos;
- formulário enviado para destino não reconhecido.

## Conclusão

O projeto demonstra, em ambiente local e controlado, o conceito de uma página de login utilizada como vetor de engenharia social.

A implementação foi limitada intencionalmente para impedir a captura de senhas reais e para manter o experimento adequado a um laboratório acadêmico.

## Autor

José Wagner Blanco Junior

Projeto acadêmico de estudo em Cibersegurança.
