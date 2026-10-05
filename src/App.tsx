import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App