import HistoricPage from './componets/HistoricPage/HistoricPage'
import HomePage from './componets/HomePage/HomePage';
import HabitsPage from './componets/HabitsPage/HabitsPage';
import TodayPage from './componets/TodayPage/TodayPage'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { styled } from 'styled-components';
import { useState } from 'react';
import RegisterPage from './componets/RegisterPage/RegisterPage';
import Teste from './Teste';

export default function App() {
  const [token, setToken] = useState("");

  return (
    <ContainerMain>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage setToken={setToken}/>}></Route>
          <Route path={`/cadastro`} element={<RegisterPage />}></Route>
          <Route path={`/habitos`} element={<HabitsPage />}></Route>
          <Route path={`/hoje`} element={<TodayPage />}></Route>
          <Route path={`/historico`} element={<HistoricPage/>}></Route>
          <Route path={`/teste`} element={<Teste/>}></Route>
        </Routes>
      </BrowserRouter>
    </ContainerMain>
  )
}

const ContainerMain = styled.div`
  width: 375px;
  margin: 0px auto;
  background-color: #FFFFFF;
`