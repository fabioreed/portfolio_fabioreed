import { useContext } from 'react'
import { MyRoutes } from './routes'
import GlobalStyle from './styles/globalStyles'
import Reset from './styles/reset'
import { ThemeProvider } from 'styled-components'
import { UserContext } from './providers/UserContext'
import { lightTheme } from './styles/themes/light'
import { darkTheme } from './styles/themes/dark'

const App = () => {
  const { theme } = useContext(UserContext)

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Reset />
      <MyRoutes />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
