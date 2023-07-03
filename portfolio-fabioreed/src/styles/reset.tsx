import { createGlobalStyle } from "styled-components"

const Reset = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
  }

  ul, ol, li {
    list-style: none;
  }
`

export default Reset