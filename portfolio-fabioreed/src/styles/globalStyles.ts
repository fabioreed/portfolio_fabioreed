import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  :root {
    --primary-color: #589AFC;
    --secondary-color: #642AF7;
    --background: #FFF9E7;
    --white: #F6F6F6;
    --gray: #706F6F;
    --light-gray: #a0a0a0;
    --yellow: #F8CD53;
    --green: #6FD660;

    --new-green: #80E5D8;
    --pink: #EC64A7;
    --purple: #6F47C1;
    --super-pink: #FC0081;
    --super-purple: #8126C6;

    --black: #181818;
    --whatsapp: #25D366;
    --linkedin: #0077B5;
    --gmail: #EA4335;
    --blue: #101c2e;

    --gradient-1: #9BEAF9;
    --gradient-2: #439AE1;
    --background-blue: #1A202C;
  }

  body {
    font-family: 'Quicksand', sans-serif;
    /* background: linear-gradient(rgba(16, 28, 46, .9999), rgba(0, 0, 0, 0.8)), url('https://images5.alphacoders.com/523/523521.jpg'); */
    background: linear-gradient(var(--background-blue), rgba(0, 0, 0, 0.8)), url('https://images5.alphacoders.com/523/523521.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  button {
    border-radius: 8px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
  }

  span {
    font-family: 'Shadows Into Light', cursive;
  }
`

export default GlobalStyle