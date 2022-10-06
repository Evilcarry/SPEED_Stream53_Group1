import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import Login from './features/auth/Login'
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
//import ArticlesList from './features/articles/ArticlesList'
import UsersList from './features/users/UsersList'
import SearchPage from './features/articles/SearchPage'

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
        
          <Route path="users">
            <Route index element={<UsersList />} />
          </Route>
        </Route>{/* end dash */}
      </Route>
    </Routes>
  );
}

export default App;
