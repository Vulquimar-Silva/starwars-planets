import { Routes, Route, Navigate } from 'react-router-dom'

import { Home } from '../pages/HomePage'
import { Planet } from '../pages/PlanetPage'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/planet"
          element={
            <ProtectedRoute>
              <Planet />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
