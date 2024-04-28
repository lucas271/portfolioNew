import chatApp from '../../imgs/projects/chatApp.png';
import nextStore from '../../imgs/projects/nextStore.png';
import nuxtStore from '../../imgs/projects/nuxtStore.png';

import notesApp from '../../imgs/projects/notesApp.png';

const projectsArray = [
    {
        websiteLink: "https://next-store-git-main-chatapps-projects.vercel.app/",
        githubLink: "https://github.com/lucas271/next-store",
        image: nextStore,
        name: "Simulação de e-commerce com next",
        message: "Next foi utilizado com o intuito de simular as melhores praticas para SEO e renderezição de conteudo do servidor. Sistema de authenticação com next-auth, backend com o api routes do next e redux para gerenciamento de estados globais. Tailwind para estilização."
    },
    {
        websiteLink: "https://vue-chat-w-node-git-main-chatapps-projects.vercel.app/",
        githubLink: "https://github.com/lucas271/vueChatWNode",
        image: chatApp,
        name: "Chat app com Node e vue.",
        message: "Esse aplicativo foi feito utilizando o orm prisma para interação com o banco de dados postgres, websockets para mensagens e notificações em tempo real, pinia para gerenciamento de estados globais no vue."
    },
    {
        websiteLink: "https://main--voluble-scone-e0c4ec.netlify.app/",
        githubLink: "https://github.com/lucas271/nuxt-store",
        image: nuxtStore,
        name: "Simulação de e-commerce com nuxt",
        message: "Feito utilizando nuxt com o intuito de utilizar tecnicas como ssr para diminuir o loading time e melhorar a indexação do navegador. Pinia utilizado para estados globais, vuetify para estilos e supabase para banco de dados e autenticação/validação de usuário."
    },

    {
        websiteLink: "https://typescript-simple-notes-app.vercel.app/",
        githubLink: "https://github.com/lucas271/typescript-notes_app",
        image: notesApp,
        name: "Aplicativo simples de anotações.",
        message: "Aplicativo que utiliza mongoDB como banco de dados, typescript na composição de todo codigo e SCSS para estilização. NodeJS com express foi utilizado no backend."
    }
]

export default projectsArray