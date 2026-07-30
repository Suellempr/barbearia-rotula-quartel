# Barbearia Rótula Quartel — Landing Page

Landing page institucional premium, construída em **React + TypeScript + Vite**, com identidade
visual preto/dourado inspirada na logo da barbearia.

## Stack

- React 18 + TypeScript
- Vite
- CSS Modules (sem frameworks de CSS)
- 100% front-end — sem backend, sem banco de dados

## Como executar o projeto

Pré-requisitos: [Node.js](https://nodejs.org) 18+ instalado.

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em modo desenvolvimento
npm run dev
# abre em http://localhost:5173

# 3. Gerar build de produção
npm run build

# 4. Pré-visualizar o build de produção localmente
npm run preview
```

A pasta `dist/` gerada pelo `npm run build` pode ser publicada em qualquer hospedagem estática
(Vercel, Netlify, GitHub Pages, Hostinger, etc).

## Estrutura do projeto

```
src/
  components/       um componente por pasta (Navbar, Hero, Services, Gallery, About,
                     Advantages, ScheduleForm, Location, Footer, WhatsAppButton,
                     BackToTop, Loader)
  pages/Home.tsx     composição das seções na ordem final da página
  data/              conteúdo editável (serviços, galeria, diferenciais, config geral)
  hooks/             lógica reutilizável (scroll suave, reveal on scroll, contexto do
                     serviço selecionado etc.)
  utils/             geração da URL do WhatsApp e cálculo de horários disponíveis
  styles/            tokens.css (cores/tipografia) e global.css (estilos base)
  types/             interfaces TypeScript compartilhadas
```

## Como personalizar

Toda a configuração editável está concentrada em `src/data/`, então não é necessário mexer nos
componentes para o dia a dia.

### 1. Número do WhatsApp
Arquivo: `src/data/businessConfig.ts`
```ts
whatsappNumber: '5511999999999', // DDI + DDD + número, somente dígitos
```

### 2. Preços e descrições dos serviços
Arquivo: `src/data/services.ts` — edite, remova ou adicione itens ao array `services`.
Cada serviço precisa de `id` único, `name`, `description`, `price` e `image`.

### 3. Imagens da galeria
Arquivo: `src/data/gallery.ts` — troque os valores de `src` pelas fotos reais da barbearia
(recomendado: imagens quadradas, mínimo 800px de largura). Também é possível importar imagens
locais colocando os arquivos em `src/assets/` e usando `import` no topo do arquivo.

### 4. Endereço e mapa
Arquivo: `src/data/businessConfig.ts`, objeto `address`. Para o mapa, gere um novo link em
[Google Maps → Compartilhar → Incorporar mapa] e cole a URL do `src` do iframe em
`address.mapsEmbedSrc`.

### 5. Horários disponíveis para agendamento
Arquivo: `src/data/businessConfig.ts`, objeto `schedule`:
```ts
weekdaySlots: ['09:00', '09:30', ...], // segunda a sexta
saturdaySlots: ['09:00', '09:30', ...], // sábado
```
Adicione ou remova horários livremente — o formulário de agendamento se ajusta automaticamente,
inclusive bloqueando domingos.

### 6. Textos institucionais
- Slogan e nome: `src/data/businessConfig.ts` (`name`, `shortName`, `slogan`)
- Texto da seção "História": `src/components/About/About.tsx`
- Textos de cada seção (títulos, subtítulos): diretamente nos respectivos componentes em
  `src/components/*/*.tsx`

### 7. Cores e tipografia (identidade visual)
Arquivo: `src/styles/tokens.css` — todas as cores (preto, dourado, cards) e fontes usadas no
projeto estão centralizadas em variáveis CSS. Alterar os valores aqui reflete automaticamente em
todo o site.

## Funcionalidades implementadas

- Hero em tela cheia com imagem de fundo, overlay e scroll suave até o agendamento
- Navbar fixa com efeito ao rolar a página e menu hambúrguer lateral no mobile
- Cards de serviços com seleção — o serviço escolhido é usado automaticamente no formulário
- Galeria responsiva com modal de imagem
- Seção de história com layout alternado (imagem/texto)
- Seção de diferenciais com ícones
- Formulário de agendamento controlado, com validação, geração dinâmica de horários por dia da
  semana (fechado aos domingos, sábado até 15h) e redirecionamento para o WhatsApp com mensagem
  pronta
- Seção de localização com mapa incorporado (iframe do Google Maps)
- Rodapé com redes sociais
- Botão flutuante do WhatsApp, botão "voltar ao topo" e loader inicial
- Acessibilidade: `aria-label`, `alt` em imagens, foco visível, `prefers-reduced-motion`
  respeitado
- Totalmente responsivo (mobile, tablet, notebook, desktop)

## Observações

- As imagens de serviços, galeria, história e hero usam placeholders do Unsplash. Substitua pelas
  fotos reais da barbearia antes de publicar.
- O projeto não possui backend: o "agendamento" apenas monta a mensagem e abre o WhatsApp — a
  confirmação final é feita manualmente pela equipe da barbearia.
