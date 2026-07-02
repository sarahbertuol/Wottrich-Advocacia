# Wottrich Advocacia — Regras do Projeto

## Fluxo de Deploy (OBRIGATÓRIO)

**NUNCA** publicar alterações direto no domínio final (`wottrichadvocacia.com.br`) sem antes:
1. Publicar no ambiente de teste (preview do Vercel no branch de desenvolvimento)
2. Informar à Sarah o **link de teste** para revisão
3. Aguardar confirmação explícita de que pode ir para produção (deploy no domínio final)

### Como funciona o fluxo
- Todas as alterações vão para o branch `claude/wottrich-advocacia-site-fs5xq1`
- O Vercel gera um **link de preview** automaticamente a cada push nesse branch
- Esse link de preview é o ambiente de TESTE — Sarah revisa aqui
- Só após aprovação, o deploy vai para produção (`www.wottrichadvocacia.com.br`)

### Como encontrar o link de teste
No painel do Vercel → projeto `wottrich-advocacia` → aba **Deployments** → clicar no deploy mais recente → copiar a URL de preview (formato: `wottrich-advocacia-git-<branch>-sarahbertuol.vercel.app`)

---

## Regras de Segurança
- Nenhuma menção a Kátia Mertins em nenhum arquivo
- Nenhum email @wottrichmertins (usar @wottrichadvocacia)
- Todos os links externos: `target="_blank" rel="noopener noreferrer"`

## Informações do Projeto
- Site estático HTML/CSS/JS — 3 páginas: index.html, sobre.html, contato.html
- Branch de desenvolvimento: `claude/wottrich-advocacia-site-fs5xq1`
- Domínio: www.wottrichadvocacia.com.br
- Advogado: Reinaldo Samuel Wottrich — OAB/RS 102.371 (escritório individual)
- Endereço: Av. Presidente Lucena, 3526, Centro, Ivoti/RS
- Instagram: https://www.instagram.com/wottrichadvocacia/
