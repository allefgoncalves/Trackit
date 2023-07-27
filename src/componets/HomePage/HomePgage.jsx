import {useParams, Navigate, Link} from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import logo from './../../assets/logo.png';
import LoginPage from './Login';


export default function HomePage(){
    
    return(
        <Containerhome>
            <img src={logo} />
            <LoginPage />
            <StyledLink to="/sign-up">Não tem uma conta? Cadastre-se!</StyledLink>
        </Containerhome>
    );
}

const Containerhome =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 180px;
        height: 178px;
        margin: 68px auto 36px;
    }
`
const StyledLink = styled(Link)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #52B6FF;
`