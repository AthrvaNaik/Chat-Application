import AuthIndex from './pages/auth/AuthIndex'
import ChatIndex from './pages/chat/ChatIndex'
import ProfileIndex from './pages/profile/ProfileIndex'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<AuthIndex/>}/>
        <Route path='/chat' element={<ChatIndex/>}/>
        <Route path='/profile' element={<ProfileIndex/>}/>
        <Route path='*' element={<Navigate to ='/auth'/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App