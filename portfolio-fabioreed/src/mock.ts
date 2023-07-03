import burguer from './assets/Burgueria Kenzie.png'
import nukenzie from './assets/nukenzie.jpg'
import kenziehub from './assets/kenziehub.jpg'
import godonate from './assets/godonate.jpg'

const projects = [
  {
    'name': 'Hamburgueria',
    'img': burguer,
    'description': 'Projeto em React - Typescript. Nesse projeto foi feito uma feature para Login e Cadastro utilizando React Hook Form. E com a proteção de rotas, sendo utilizado React Router Dom. É também utilizado Context API para organizar o projeto. Juntamente com boas práticas, código limpo, variáveis descritivas e componentização.',
    'technologies': ['React','Typescript', 'Hook Form', 'Router Dom', 'Styled-components', 'Vite'],
    'link': 'https://hamburgueria-parte2.vercel.app/',
    'github': 'https://github.com/fabioreed/Burger-Bar---React-and-Typescript'
  },
  {
    'name': 'Nu Kenzie - Budget control',
    'img': nukenzie,
    'description': 'Uma aplicação para gerenciamento de gastos, cadastrando entradas e saídas. Nesse projeto utilizei o método Reduce, para calcular o valor total das transações. Também é possível escolher se a transação é entrada ou saída, e deletar transações. Que nem uma ToDo List.',
    'technologies': ['React', 'JS', 'Vite'],  
    'link': 'https://nu-kenzie-dusky.vercel.app/',
    'github': ''
  },
  {
    'name': 'Kenzie Hub',
    'img': kenziehub,
    'description': 'Social media para desenvolvedores cadastrar suas tecnologias. Foi feito um CRUD (Criar, Ler, Editar, Deletar) utilizando uma API real, utilizando Context API para organizar o projeto, componentizacao e boas praticas. É possível o usuário se cadastrar e logar, com proteção de rotas, utilizando o Router Dom e Hook Form do React!',
    'technologies': ['React', 'JS', 'Hook Form', 'Router Dom', 'Styled-components', 'Vite', 'Tostify'],
    'link': 'https://kenziefabiohub.vercel.app/',
    'github': ''
  },
  {
    'name': 'Go.Donate - donate and collect food and clothing',
    'img': godonate,
    'description': 'Projeto em grupo, utilizando Git Flow. O problema que a Go.Donate está resolvendo é a dificuldade que empresas e pessoas têm em encontrar uma maneira fácil e eficiente de ajudar pessoas carentes. Utilizamos Protecao de rotas para o Login e Cadastro, e fizemos uma API fake com JSON-server. Uma vez o usuario logado, é possível cadastrar eventos, editar e deltar, assim como ver quais empresas e usuários estão participando com horário, local e qual o tipo de doação.',
    'technologies': ['React', 'Typescript', 'GIT', 'Hook Form', 'Router Dom', 'Styled-components', 'Vite', 'Tostify', 'axios', 'JSON-server', 'Material UI'],
    'link': 'https://projeto-fabioreed.vercel.app/',
    'github': 'https://github.com/Go-Donate/Go-Donate'
  }
]

export default projects