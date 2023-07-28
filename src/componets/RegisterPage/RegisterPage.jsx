import Containerhome from "../style/Containerhome";
import Register from './Register';
import logo from './../../assets/logo.png';
import { styled } from 'styled-components';
import {useParams, Navigate, Link} from "react-router-dom";

export default function RegisterPage(){
    return(
        <Containerhome>
            <img src={logo}/>
            <Register />
            <StyledLink to="/sign-up">Não tem uma conta? Cadastre-se!</StyledLink>
        </Containerhome>
    );
}
const StyledLink = styled(Link)`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #52B6FF;
`
