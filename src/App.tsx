import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import Navbar from './components/Navbar'
import ErrorFallback from './components/ErrorFallback'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import UserDetailPage from './pages/UserDetailPage'
import NotFoundPage from './pages/NotFoundPage'

// basename behövs eftersom sajten ligger under /users-app/ på GitHub Pages
const App = () => {
  return (
    <BrowserRouter basename="/users-app">
      <Navbar />
      <main>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:id" element={<UserDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ErrorBoundary>
      </main>
    </BrowserRouter>
  )
}

export default App