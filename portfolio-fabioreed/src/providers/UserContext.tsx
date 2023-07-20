import { createContext, useState, useEffect, SetStateAction, Dispatch } from 'react'
import projects from '../mock'
import { userData } from '../utils/userData'
// import { darkTheme } from '../styles/themes/dark'
// import { lightTheme } from '../styles/themes/light'
// import lightTheme from '../styles/themes/light'
// import darkTheme from '../styles/themes/dark'
// import { DefaultTheme } from 'styled-components/dist/types'

interface IDefaultProviderProps {
  children: React.ReactNode
}

interface RepoType {
  id: number
  name: string
  language: string
  description: string
  html_url: string
  homepage: string
}

interface ThemeType {
  // title: string;
  // color: { };
    primary: string;
    yellow: string;
    gray: string;
    white: string;
    black: string;
    whatsapp: string;
    linkedin: string;
    gmail: string;
    background: string;
 
}

interface IFunctions {
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  contact: boolean
  setContact: React.Dispatch<React.SetStateAction<boolean>>
  category: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  selectedCard: null
  setSelectedCard: React.Dispatch<React.SetStateAction<null>>
  filteredProjects: any
  selectedCategory: string
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
  repositoriesGitHub: RepoType[]
  setRepositoriesGitHub: React.Dispatch<React.SetStateAction<RepoType[]>>
  // theme: ThemeType
  // setTheme: Dispatch<SetStateAction<ThemeType>>
  // toggleTheme: () => void
}

export const UserContext = createContext({} as IFunctions)

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [modal, setModal] = useState(false)
  const [contact, setContact] = useState(false)
  const [category, setCategory] = useState('all')
  const [showModal, setShowModal] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [repositoriesGitHub, setRepositoriesGitHub] = useState<RepoType[]>([])
  // const [theme, setTheme] = useState('light')

  const filteredProjects = category === 'all' ? projects : projects.filter(project => project.category === category)

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos?sort=created&direction=desc`
      )

      const json = await data.json()

      setRepositoriesGitHub(json)

      return json
    }

    fetchData()
  }, [])

  // const toggleTheme = () => {
  //   // setTheme(theme === 'light' ? setTheme('dark') : setTheme('light'))
  // }

  return (
    <UserContext.Provider
      value={{ modal, setModal, contact, setContact, category, setCategory, selectedCard, setSelectedCard, showModal, setShowModal, filteredProjects, selectedCategory, setSelectedCategory, repositoriesGitHub, setRepositoriesGitHub }}>
      {children}
    </UserContext.Provider>
  )
}