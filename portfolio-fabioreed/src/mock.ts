import burguer from './assets/Burgueria Kenzie.png'
import nukenzie from './assets/nukenzie.jpg'
import kenziehub from './assets/kenziehub.jpg'
import godonate from './assets/godonate.jpg'
import starbucks from './assets/starbucks.png'
import pepsi from './assets/pepsi.png'
import netflix from './assets/netflix.png.jpg'
import api from './assets/api.png'

const projects = [
  {
    'name': 'Hamburgueria',
    'img': burguer,
    'category': 'frontend',
    'description': 'Project in React - Typescript. In this project, a resource for Login and Registration was made using React Hook Form. And with route protection, using the React Router Dom. Context API is also used to organize the project. Along with good practices, clean code, descriptive variables and componentization.',
    'technologies': ['React','Typescript', 'Hook Form', 'Router Dom', 'Styled-components', 'Vite'],
    'link': 'https://hamburgueria-parte2.vercel.app/',
    'github': 'https://github.com/fabioreed/Burger-Bar---React-and-Typescript'
  },
  {
    'name': 'Nu Kenzie - Budget control',
    'img': nukenzie,
    'category': 'frontend',
    'description': 'An application for managing expenses, registering inputs and outputs. In this project I used the Reduce method to calculate the total value of transactions. It is also possible to choose whether the transaction is an incoming or outgoing transaction, and delete transactions. Like a ToDo List.',
    'technologies': ['React', 'JS', 'Vite'],  
    'link': 'https://nu-kenzie-dusky.vercel.app/',
    'github': ''
  },
  {
    'name': 'Kenzie Hub',
    'img': kenziehub,
    'category': 'frontend',
    'description': "Social media for developers to register their technologies. A CRUD (Create, Read, Edit, Delete) was done using a real API, using Context API to organize the project, componentization and good practices. It is possible for the user to register and log in, with route protection, using React's Router Dom and Hook Form!",
    'technologies': ['React', 'JS', 'Hook Form', 'Router Dom', 'Styled-components', 'Vite', 'Tostify'],
    'link': 'https://kenziefabiohub.vercel.app/',
    'github': ''
  },
  {
    'name': 'Go.Donate - donate and collect food and clothing',
    'img': godonate,
    'category': 'frontend',
    'description': 'Group project, using Git Flow. The problem that Go.Donate is solving is the difficulty that companies and individuals have in finding an easy and efficient way to help people in need. We use Route Protection for Login and Registration, and we made a fake API with JSON-server. Once the user is logged in, it is possible to register events, edit and deltar, as well as see which companies and users are participating with time, place and type of donation.',
    'technologies': ['React', 'Typescript', 'GIT', 'Hook Form', 'Router Dom', 'Styled-components', 'Vite', 'Tostify', 'axios', 'JSON-server', 'Material UI'],
    'link': 'https://projeto-fabioreed.vercel.app/',
    'github': 'https://github.com/Go-Donate/Go-Donate'
  },
  {
    'name': 'Disney - Clone',
    'img': 'https://user-images.githubusercontent.com/99282728/174812449-1fa6061e-3abd-4046-bdca-895638bd1ebd.png',
    'category': 'frontend',
    'description': "This is the ReactJS Disney Plus Clone, using Redux, Firebase for the Login.",
    'technologies': ['Javascript', 'React', 'CSS', 'Firebase', 'Redux'],
    'link': 'https://github.com/fabioreed/Disney-Clone-master',
    'github': 'https://github.com/fabioreed/bandkamp_api'
  },
  {
    'name': 'Starbucks - Landing Page',
    'img': starbucks,
    'category': 'frontend',
    'description': 'Starbucks Landing Page with Hover and selection of itens',
    'technologies': ['HTML', 'CSS'],
    'link': 'https://fabioreed.github.io/Starbucks-Lading-Page/',
    'github': 'https://github.com/fabioreed/Starbucks-Lading-Page'
  },
  {
    'name': 'Pepsi - Landing Page',
    'img': pepsi,
    'category': 'frontend',
    'description': 'Pepsi CSS Landinpage.',
    'technologies': ['HTML', 'CSS'],
    'link': 'https://fabioreed.github.io/Pepsi-hover/',
    'github': 'https://github.com/fabioreed/Pepsi-hover'
  },
  {
    'name': 'Netflix - using API',
    'img': netflix,
    'category': 'frontend',
    'description': 'Application in React Javascript using API for videos, trailers, pictures.',
    'technologies': ['React', 'JS', 'CSS'],
    'link': 'https://github.com/fabioreed/NetflixClone',
    'github': 'https://github.com/fabioreed/NetflixClone'
  },
  {
    'name': 'Maps - using API',
    'img': 'https://media.cnn.com/api/v1/images/stellar/prod/191004100903-google-maps-phone-stock.jpg?q=w_3169,h_2113,x_0,y_0,c_fill',
    'category': 'backend',
    'description': 'Using Maps coordinates to locate the user.',
    'technologies': ['HTML', 'JS', 'CSS'],
    'link': 'https://fabioreed.github.io/Maps/',
    'github': 'https://github.com/fabioreed/Maps'
  },
  {
    'name': 'Market API',
    'img': 'https://diogomatheus.com.br/assets/images/posts/shared-image/2018-01-15-getting-started-with-nodejs.jpg',
    'category': 'backend',
    'description': "We received a request to create a REST API. This API will be used to organize the stock of a startup in the testing process that intends to become a network of autonomous markets (Smart Store). Today the market works with only two types of products: food and cleaning. As we will be controlling the market's stock, our application must have routes for creating, listing, updating and deleting products.",
    'technologies': ['Typescript'],
    'link': '',
    'github': 'https://github.com/fabioreed/market-sp1-m4-fabioreed'
  },
  {
    'name': 'Movies TypeORM API',
    'img': 'https://diogomatheus.com.br/assets/images/posts/shared-image/2018-01-15-getting-started-with-nodejs.jpg',
    'category': 'backend',
    'description': "The goal is to develop an API that will be used on a streaming platform. This API will be intended to manage the collection of available movies.",
    'technologies': ['Typescript', 'PostgreSQL', 'TypeORM', 'Zod'],
    'link': 'https://fabioreed.github.io/m2-api-empresas/',
    'github': 'https://github.com/fabioreed/movies-com-typeorm'
  },
  {
    'name': 'CRUD Admin API',
    'img': 'https://diogomatheus.com.br/assets/images/posts/shared-image/2018-01-15-getting-started-with-nodejs.jpg',
    'category': 'backend',
    'description': "The company you work for needs to create an MVP (Minimum Viable Product) of an API that controls users through a CRUD. This API also needs to have access control, where some resources can only be accessed by users who are logged in to the application, and other resources can only be accessed by users who are logged in and have administrator permissions.",
    'technologies': ['Typescript', 'PostgresSQL'],
    'link': 'https://github.com/fabioreed/crud_admin',
    'github': 'https://github.com/fabioreed/crud_admin'
  },
  {
    'name': 'Kimoveis - Real Estate',
    'img': 'https://diogomatheus.com.br/assets/images/posts/shared-image/2018-01-15-getting-started-with-nodejs.jpg',
    'category': 'backend',
    'description': "The owner of Kimóveis real estate hired his company to develop an application to manage his services. Through the application, it should be possible to register properties and users interested in acquiring properties. In addition, it should be possible to schedule and consult visit times to properties available in the real estate database.",
    'technologies': ['Typescript', 'PostgresSQL', 'TypeORM', 'Zod'],
    'link': 'https://github.com/fabioreed/crud_admin',
    'github': 'https://github.com/fabioreed/crud_admin'
  },
  {
    'name': 'PetKare - Python API',
    'img': 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ycIMlwgwicqlO6PcFRA-Iw.png',
    'category': 'backend',
    'description': "Let's assume that you are a consultant for a company that specializes in petshop systems. A franchise called PetKare works with manual processes, has papers scattered throughout the reception, in addition to disorganized information about the pets of its customers. In this way, the petshop requested your help to implement an API that would allow PetKare to have greater control and organization of animal data from its range of customers.",
    'technologies': ['Python', 'ORM', 'Django', 'Rest Framework'],
    'link': 'https://github.com/fabioreed/pet-kare-fabioreed',
    'github': 'https://github.com/fabioreed/pet-kare-fabioreed'
  },
  {
    'name': 'Kenzie Buster - Python API',
    'img': 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ycIMlwgwicqlO6PcFRA-Iw.png',
    'category': 'backend',
    'description': "In this project I created an application to manage users, movies and purchases, including authentication and routing permissions for different types of users.",
    'technologies': ['Python', 'ORM', 'Django', 'Rest Framework'],
    'link': 'https://github.com/fabioreed/m5-kenzie-buster-fabioreed',
    'github': 'https://github.com/fabioreed/m5-kenzie-buster-fabioreed'
  },
  {
    'name': 'BandKamp - Python API',
    'img': 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ycIMlwgwicqlO6PcFRA-Iw.png',
    'category': 'backend',
    'description': "At the company where you work, the technology leader asked you to access an old project, where users could register, register albums and songs. This project was developed with Django, using APIView, Serializer and SQLite3. He wants you to do a refactoring, applying the concepts of Generic View, Model Serializer and changing the database to PostgreSQL.",
    'technologies': ['Python', 'ORM', 'Django', 'Rest Framework'],
    'link': 'https://github.com/fabioreed/bandkamp_api',
    'github': 'https://github.com/fabioreed/bandkamp_api'
  }
]

export default projects