import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'

export function ProtectedRoute({ children }) {
  const { searchData } = useContext(SearchContext)

  if (!searchData) {
    return <Navigate to="/" />
  }

  return children
}
