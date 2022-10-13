import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import Login from './features/auth/Login'
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
import ArticlesList from './features/articles/ArticlesList'
import SubmitArticle from './features/articles/SubmitArticle'
import UsersList from './features/users/UsersList'
import SearchPage from './features/articles/SearchPage'
import AnaliseArticle from "./features/analiser/analisearticle"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path="login" element={<Login />}/>

        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Welcome />} /> 

          <Route path="articles">
            <Route index element={<SearchPage />} />
          </Route>
          <Route path="submitarticle">
            <Route index element={<SubmitArticle />} />
          </Route>

          <Route path="users">
            <Route index element={<UsersList />} />
          </Route>

          <Route path="analisearticle">
            <Route index element={<AnaliseArticle />} />
          </Route>

        </Route>{/* end dash */}
      </Route>
    </Routes>
  );
}

export default App;
