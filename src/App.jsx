import Historic from './componets/Historic/Historic'
import HomePage from './componets/HomePage/HomePage';
import Register from './componets/Register/Register';
import Habits from './componets/Habits/Habits';
import Today from './componets/Today/Today'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { styled } from 'styled-components';
import { useState } from 'react';

export default function App() {
  const [token, setToken] = useState("");

  return (
    <ContainerMain>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage setToken={setToken}/>}></Route>
          <Route path={`/cadastro`} element={<Register />}></Route>
          <Route path={`/habitos`} element={<Habits />}></Route>
          <Route path={`/hoje`} element={<Today />}></Route>
          <Route path={`/historico`} element={<Historic/>}></Route>
        </Routes>
      </BrowserRouter>
    </ContainerMain>
  )
}

const ContainerMain = styled.div`
  width: 375px;
  margin: 0px auto;
`