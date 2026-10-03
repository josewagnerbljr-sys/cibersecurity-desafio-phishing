# Mitigações Avançadas contra Phishing por Clonagem de Página

Este documento aprofunda os controles citados no README principal, com foco em implementação prática.

## 1. Detecção de typosquatting com `dnstwist`

O [`dnstwist`](https://github.com/elceef/dnstwist) gera variações tipográficas de um domínio (troca de caracteres, homoglyphs, erros de digitação comuns) e verifica quais delas estão registradas e ativas — permitindo identificar proativamente domínios de phishing antes que uma campanha seja lançada.

```bash
pip install dnstwist
dnstwist --registered facebook.com
```

Em ambiente corporativo, isso normalmente roda como job agendado (cron/Lambda), com os resultados alimentando um feed de bloqueio no proxy/firewall.

## 2. Certificate Transparency (CT) monitoring

Toda emissão de certificado TLS por uma CA confiável é publicada em logs públicos de CT. Monitorar esses logs por padrões (`*facebook*`, `*-login*`) permite detectar domínios de phishing minutos após o certificado ser emitido — geralmente antes mesmo do e-mail de phishing ser disparado.

Serviços como `crt.sh` ou feeds de CT (ex.: Google CT logs) podem ser consultados programaticamente para esse fim.

## 3. DMARC, SPF e DKIM — por que os três juntos

| Mecanismo | O que valida | Limitação isolada |
|---|---|---|
| SPF | Quais servidores podem enviar e-mail em nome do domínio | Não sobrevive a *forwarding* |
| DKIM | Assinatura criptográfica do conteúdo do e-mail | Não impede uso de domínio "parecido" |
| DMARC | Política de ação quando SPF/DKIM falham + relatórios | Depende de SPF e DKIM configurados |

A combinação dos três, com política DMARC em `p=reject`, é o que efetivamente impede spoofing do domínio legítimo em campanhas de phishing direcionado.

## 4. Autenticação resistente a phishing

Nem todo MFA é igual. Em ordem crescente de resistência a phishing:

1. **SMS/e-mail OTP** — ainda vulnerável a proxies de phishing em tempo real (*adversary-in-the-middle*, ex. Evilginx);
2. **TOTP (Google Authenticator etc.)** — melhor, mas ainda suscetível a AiTM se a vítima digitar o código na página clonada;
3. **WebAuthn / chaves de segurança FIDO2** — **resistente a phishing por design**, pois a chave criptográfica é vinculada à origem (domínio) exata, e não funciona em um domínio clonado.

Organizações com alto risco de phishing direcionado (executivos, times financeiros) devem priorizar FIDO2/WebAuthn.

## 5. Simulações controladas de phishing

Plataformas de *security awareness* (ex. GoPhish, open source) permitem rodar campanhas simuladas internas, medindo taxa de clique e taxa de submissão de credenciais, para calibrar treinamento — este é, inclusive, o único contexto em que reproduzir uma página clonada é apropriado: ambiente interno, consentido, com escopo e autorização formal da organização, nunca publicado como artefato genérico.

## 6. Resposta rápida a takedown

Checklist de contato para remoção de domínio de phishing ativo:
- Registrador do domínio (via WHOIS/ICANN Lookup);
- Provedor de hospedagem (abuse@ do ASN/CDN);
- Google Safe Browsing / Microsoft SmartScreen (submissão de URL maliciosa);
- PhishTank / APWG, para disseminação do IoC à comunidade.
