import chatApp from '../../imgs/projects/chatApp.png';
import nextStore from '../../imgs/projects/nextStore.png';
import nuxtStore from '../../imgs/projects/nuxtStore.png';

import notesApp from '../../imgs/projects/notesApp.png';

const projectsArray = [
  {
    websiteLink: 'https://next-store-git-main-chatapps-projects.vercel.app/',
    githubLink: 'https://github.com/lucas271/next-store',
    image: nextStore,
    name: 'Simulação de e-commerce com Next',
    message: 'Next foi utilizado para simular as melhores práticas para SEO e renderização de conteúdo do servidor. Sistema de autenticação com Next Auth, backend com API Routes do Next e Redux para gerenciamento de estados globais. Estilização com Tailwind CSS.',
  },
  {
    websiteLink: 'https://vue-chat-w-node-git-main-chatapps-projects.vercel.app/',
    githubLink: 'https://github.com/lucas271/vueChatWNode',
    image: chatApp,
    name: 'Chat app com Node e Vue.',
    message: 'Este aplicativo foi desenvolvido utilizando o ORM Prisma para interação com o banco de dados PostgreSQL, WebSockets para mensagens e notificações em tempo real, e Pinia para gerenciamento de estados globais no Vue.',
  },
  {
    websiteLink: 'https://main--voluble-scone-e0c4ec.netlify.app/',
    githubLink: 'https://github.com/lucas271/nuxt-store',
    image: nuxtStore,
    name: 'Simulação de e-commerce com Nuxt',
    message: 'Desenvolvido com Nuxt, utilizando técnicas como SSR para reduzir o tempo de carregamento e melhorar a indexação do navegador. Pinia para gerenciamento de estados globais, Vuetify para estilos e Supabase para banco de dados e autenticação/validação de usuário.',
  },

  {
    websiteLink: 'https://typescript-simple-notes-app.vercel.app/',
    githubLink: 'https://github.com/lucas271/typescript-notes_app',
    image: notesApp,
    name: 'Aplicativo simples de anotações.',
    message: 'Aplicativo que utiliza MongoDB como banco de dados, TypeScript na composição de todo o código e SCSS para estilização. Node.js com Express foi utilizado no backend.',
  },
];

export default projectsArray;
