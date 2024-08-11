import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Problems from '../../components/Arena/Problems';
import Compiler from '../../components/Playground/Compiler';
import Coder from '../../components/Arena/Coder';

const Header = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Problems/>}/>
        {/* <Route path='/contest' element={}/> */}
        <Route path='/code' element={<Coder/>}/>
        <Route path='/playground' element={<Compiler/>}/>
        <Route path='*' element={<Navigate replace to='/'/>}/>
    </Routes>
</>
  )
}

export default Header