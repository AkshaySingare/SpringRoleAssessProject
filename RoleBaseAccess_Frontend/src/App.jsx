import { Routes,Route} from 'react-router-dom'
import './App.css'
import NavBar from './componants/NavBar'
import LoginPage from './componants/LoginPage'
import SignUpPage from './componants/SignUpPage'
import Products from "./componants/Products"
import UpdateForm from './componants/UpdateForm';

function App() {

  return (
    <>
    <Routes>
       <Route path='/' element={<LoginPage/>} />
        <Route path="/navbar" element={<NavBar/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/updateProd/:id' element={<UpdateForm/>} />
        <Route path='/signUpPage' element={<SignUpPage/>} />
    </Routes>
    </>
  )
}

export default App
