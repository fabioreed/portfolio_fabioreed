import { createContext, useState } from 'react'

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
}

export const UserContext = createContext({} as IFunctions)

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [modal, setModal] = useState(false)
  const [contact, setContact] = useState(false)
  const [category, setCategory] = useState('all')

  return (
    <UserContext.Provider value={{ modal, setModal, contact, setContact, category, setCategory }}>
      { children }
    </UserContext.Provider>
  )
}