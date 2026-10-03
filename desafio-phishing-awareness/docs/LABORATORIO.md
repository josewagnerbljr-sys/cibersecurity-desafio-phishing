# Laboratório

## 1. Preparação

Recomenda-se executar este projeto em uma máquina virtual ou ambiente local isolado.

Dependências:

- navegador moderno;
- Python 3, caso seja utilizado o servidor HTTP local;
- Git, para versionamento.

Não é necessário acesso a qualquer conta de rede social.

## 2. Execução

Na pasta do projeto:

```bash
python -m http.server 8000
```

Abra:

```text
http://127.0.0.1:8000
```

## 3. Teste

Use:

```text
E-mail: aluno@laboratorio.local
Senha: senha-ficticia-123
```

Ao clicar em "Entrar", o navegador deve permanecer na própria página e mostrar a mensagem de simulação.

## 4. O que observar

Durante o laboratório, analise:

- aparência de uma tela de login;
- campos solicitando credenciais;
- confiança visual criada pela interface;
- importância do domínio e da origem da página;
- diferença entre aparência legítima e autenticidade técnica;
- ausência de envio real de dados nesta implementação.

## 5. Teste técnico de segurança

Abra as ferramentas de desenvolvedor do navegador e verifique a aba Network.

O formulário não possui `action` apontando para um servidor remoto e o JavaScript chama `preventDefault()`.

Também não existe:

```javascript
localStorage.setItem(...)
sessionStorage.setItem(...)
fetch(...)
XMLHttpRequest(...)
```

para enviar ou persistir a senha.

## 6. Uso do SEToolkit

O desafio original do curso aborda o SEToolkit e mecanismos de coleta de credenciais.

Neste laboratório, o SEToolkit deve ser tratado somente como referência de conteúdo da aula. Não é necessário ativar um coletor de credenciais para executar esta versão segura.

A simulação apresentada aqui cumpre a parte visual e analítica do exercício sem transformar o repositório em uma ferramenta de captura de senhas.

## 7. Encerramento

Depois da demonstração:

1. feche o servidor local com `Ctrl+C`;
2. remova qualquer captura de tela que contenha dados pessoais;
3. mantenha no GitHub apenas arquivos necessários à documentação.
