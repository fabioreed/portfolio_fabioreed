import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  :root {
    --primary-color: #F75D37;
    /* --primary-color: #7E76D5; */
    --secondary-color: #642AF7;
    --background: #FFF9E7;
    --white: #F6F6F6;
    --gray: #5F7067;
    --light-gray: #5d7067;
    --yellow: #F8CD53;
    --green: #6FD660;
    --black: #181818;
    --whatsapp: #25D366;
    --linkedin: #0077B5;
    --gmail: #EA4335;
    --blue: #101c2e;
  }

  body {
    font-family: 'Quicksand', sans-serif;
    background: linear-gradient(rgba(16, 28, 46, .9999), rgba(0, 0, 0, 0.8)), url('https://images5.alphacoders.com/523/523521.jpg');
    /* https://images7.alphacoders.com/888/888980.jpg */
    /* https://images5.alphacoders.com/523/523521.jpg */
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    /* background: #101C2E; */
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