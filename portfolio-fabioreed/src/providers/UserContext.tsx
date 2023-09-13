import { createContext, useState, useEffect } from 'react'
import projects from '../mock'
import { userData } from '../utils/userData'

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