import { createContext, useState } from 'react'
import projects from '../mock'

interface IDefaultProviderProps {
  children: React.ReactNode
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
}

export const UserContext = createContext({} as IFunctions)

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [modal, setModal] = useState(false)
  const [contact, setContact] = useState(false)
  const [category, setCategory] = useState('all')
  const [showModal, setShowModal] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)

  const filteredProjects = category === 'all' ? projects : projects.filter(project => project.category === category)

  return (
    <UserContext.Provider value={{ modal, setModal, contact, setContact, category, setCategory, selectedCard, setSelectedCard, showModal, setShowModal, filteredProjects }}>
      { children }
    </UserContext.Provider>
  )
}