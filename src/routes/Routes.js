import { Routes, Route } from 'react-router-dom'
import ActorsName from '../pages/ActorsName'
import ActorsPage from '../pages/ActorsPage'
import MoviesPage from '../pages/MoviesPage'
import Layout from '../layout/Layout'

function PageRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="movies">
          <Route index element={<MoviesPage />} />
        </Route>
        <Route path="actors">
          <Route index element={<ActorsPage />} />
          <Route path=":slug" element={<ActorsName />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default PageRoutes
