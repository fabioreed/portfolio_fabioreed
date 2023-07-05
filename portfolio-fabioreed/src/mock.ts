import burguer from './assets/Burgueria Kenzie.png'
import nukenzie from './assets/nukenzie.jpg'
import kenziehub from './assets/kenziehub.jpg'
import godonate from './assets/godonate.jpg'

const projects = [
  {
    'name': 'Hamburgueria',
    'img': burguer,
    'category': 'frontend',
    'description': 'Projeto em React - Typescript. Nesse projeto foi feito uma feature para Login e Cadastro utilizando React Hook Form. E com a proteção de rotas, sendo utilizado React Router Dom. É também utilizado Context API para organizar o projeto. Juntamente com boas práticas, código limpo, variáveis descritivas e componentização.',
    'technologies': ['React','Typescript', 'Hook Form', 'Router Dom', 'Styled-components', 'Vite'],
    'link': 'https://hamburgueria-parte2.vercel.app/',
    'github': 'https://github.com/fabioreed/Burger-Bar---React-and-Typescript'
  },
  {
    'name': 'Nu Kenzie - Budget control',
    'img': nukenzie,
    'category': 'frontend',
    'description': 'Uma aplicação para gerenciamento de gastos, cadastrando entradas e saídas. Nesse projeto utilizei o método Reduce, para calcular o valor total das transações. Também é possível escolher se a transação é entrada ou saída, e deletar transações. Que nem uma ToDo List.',
    'technologies': ['React', 'JS', 'Vite'],  
    'link': 'https://nu-kenzie-dusky.vercel.app/',
    'github': ''
  },
  {
    'name': 'Kenzie Hub',
    'img': kenziehub,
    'category': 'frontend',
    'description': 'Social media para desenvolvedores cadastrar suas tecnologias. Foi feito um CRUD (Criar, Ler, Editar, Deletar) utilizando uma API real, utilizando Context API para organizar o projeto, componentizacao e boas praticas. É possível o usuário se cadastrar e logar, com proteção de rotas, utilizando o Router Dom e Hook Form do React!',
    'technologies': ['React', 'JS', 'Hook Form', 'Router Dom', 'Styled-components', 'Vite', 'Tostify'],
    'link': 'https://kenziefabiohub.vercel.app/',
    'github': ''
  },
  {
    'name': 'Go.Donate - donate and collect food and clothing',
    'img': godonate,
    'category': 'frontend',
    'description': 'Projeto em grupo, utilizando Git Flow. O problema que a Go.Donate está resolvendo é a dificuldade que empresas e pessoas têm em encontrar uma maneira fácil e eficiente de ajudar pessoas carentes. Utilizamos Protecao de rotas para o Login e Cadastro, e fizemos uma API fake com JSON-server. Uma vez o usuario logado, é possível cadastrar eventos, editar e deltar, assim como ver quais empresas e usuários estão participando com horário, local e qual o tipo de doação.',
    'technologies': ['React', 'Typescript', 'GIT', 'Hook Form', 'Router Dom', 'Styled-components', 'Vite', 'Tostify', 'axios', 'JSON-server', 'Material UI'],
    'link': 'https://projeto-fabioreed.vercel.app/',
    'github': 'https://github.com/Go-Donate/Go-Donate'
  },
  {
    'name': 'Starbucks - Landing Page',
    'img': '',
    'category': 'frontend',
    'description': '',
    'technologies': ['HTML', 'CSS'],
    'link': 'https://fabioreed.github.io/Starbucks-Lading-Page/',
    'github': 'https://github.com/fabioreed/Starbucks-Lading-Page'
  },
  {
    'name': 'Pepsi - Landing Page',
    'img': '',
    'category': 'frontend',
    'description': '',
    'technologies': ['HTML', 'CSS'],
    'link': 'https://fabioreed.github.io/Pepsi-hover/',
    'github': 'https://github.com/fabioreed/Pepsi-hover'
  },
  {
    'name': 'Netflix - using API',
    'img': '',
    'category': 'frontend',
    'description': '',
    'technologies': ['React', 'JS', 'CSS'],
    'link': '',
    'github': 'https://github.com/fabioreed/NetflixClone'
  },
  {
    'name': 'Maps - using API',
    'img': '',
    'category': 'backend',
    'description': '',
    'technologies': ['HTML', 'JS', 'CSS'],
    'link': 'https://fabioreed.github.io/Maps/',
    'github': 'https://github.com/fabioreed/Maps'
  },
  {
    'name': 'Market API',
    'img': '',
    'category': 'backend',
    'description': "We received a request to create a REST API. This API will be used to organize the stock of a startup in the testing process that intends to become a network of autonomous markets (Smart Store). Today the market works with only two types of products: food and cleaning. As we will be controlling the market's stock, our application must have routes for creating, listing, updating and deleting products.",
    'technologies': ['Typescript'],
    'link': '',
    'github': 'https://github.com/fabioreed/market-sp1-m4-fabioreed'
  },
  {
    'name': 'Movies TypeORM API',
    'img': '',
    'category': 'backend',
    'description': "The goal is to develop an API that will be used on a streaming platform. This API will be intended to manage the collection of available movies.",
    'technologies': ['Typescript', 'PostgreSQL', 'TypeORM', 'Zod'],
    'link': 'https://fabioreed.github.io/m2-api-empresas/',
    'github': 'https://github.com/fabioreed/movies-com-typeorm'
  },
  {
    'name': 'CRUD Admin API',
    'img': '',
    'category': 'backend',
    'description': "The company you work for needs to create an MVP (Minimum Viable Product) of an API that controls users through a CRUD. This API also needs to have access control, where some resources can only be accessed by users who are logged in to the application, and other resources can only be accessed by users who are logged in and have administrator permissions.",
    'technologies': ['Typescript', 'PostgresSQL'],
    'link': '',
    'github': 'https://github.com/fabioreed/crud_admin'
  },
  {
    'name': 'Kimoveis - Real Estate',
    'img': '',
    'category': 'backend',
    'description': "The owner of Kimóveis real estate hired his company to develop an application to manage his services. Through the application, it should be possible to register properties and users interested in acquiring properties. In addition, it should be possible to schedule and consult visit times to properties available in the real estate database.",
    'technologies': ['Typescript', 'PostgresSQL', 'TypeORM', 'Zod'],
    'link': '',
    'github': 'https://github.com/fabioreed/crud_admin'
  },
  {
    'name': 'PetKare - Python API',
    'img': '',
    'category': 'backend',
    'description': "",
    'technologies': ['Python', 'ORM', 'Django', 'Rest Framework'],
    'link': '',
    'github': 'https://github.com/fabioreed/pet-kare-fabioreed'
  },
  {
    'name': 'Kenzie Buster - Python API',
    'img': '',
    'category': 'backend',
    'description': "",
    'technologies': ['Python', 'ORM', 'Django', 'Rest Framework'],
    'link': '',
    'github': 'https://github.com/fabioreed/m5-kenzie-buster-fabioreed'
  },
  {
    'name': 'BandKamp - Python API',
    'img': '',
    'category': 'backend',
    'description': "",
    'technologies': ['Python', 'ORM', 'Django', 'Rest Framework'],
    'link': '',
    'github': 'https://github.com/fabioreed/bandkamp_api'
  }
]

export default projects