import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  :root {
    --primary-color: #7E76D5;
    --background: #FFF9E7;
    --white: #F6F6F6;
    --gray: #5F7067;
    --yellow: #F8CD53;
    --green: #6FD660;
    --black: #181818;
    --whatsapp: #25D366;
    --linkedin: #0077B5;
    --gmail: #EA4335;
  }

  body {
    font-family: 'Quicksand', sans-serif;
    background: linear-gradient(rgba(255, 249, 251, .9), rgba(255, 249, 251, 0.9)), url('https://rare-gallery.com/uploads/posts/4554464-digital-art-minimalism-abstract-pattern-geometry-triangle-square-colorful-lines-mosaic.jpg');
    background-size: auto;
    background-repeat: repeat;
    /* background: #101C2E; */
  }

  button {
    border-radius: 8px 2px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
  }

  span {
    font-family: 'Shadows Into Light', cursive;
  }
`

export default GlobalStyle