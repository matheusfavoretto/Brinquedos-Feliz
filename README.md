# Site BrincaFesta

Site de aluguel de brinquedos para festa infantil, pronto para publicar no GitHub Pages.

## Estrutura

- `index.html` → página principal
- `style.css` → visual do site
- `script.js` → catálogo, cálculos e redirecionamento para WhatsApp

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos desta pasta.
3. No GitHub, abra **Settings**.
4. Clique em **Pages**.
5. Em **Branch**, escolha **main** e pasta **/** root.
6. Salve.
7. Aguarde o link do site ser gerado.

## WhatsApp

O número do WhatsApp está configurado no arquivo `script.js`:

```js
const whatsappNumber = '5519988604840';
```

Se quiser trocar, altere esse número no arquivo.

## Regras implementadas

- Reserva com 40% do valor
- 60% pagos na devolução
- Aluguel padrão de até 2 dias
- Taxa extra de 10% ao dia após o segundo dia
- Escolha do brinquedo e datas de retirada/devolução
- Finalização do pedido via WhatsApp
