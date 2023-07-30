import Containerhome from "../style/Containerhome";
import Register from './Register';
import logo from './../../assets/logo.png';
import { styled } from 'styled-components';
import {Link} from "react-router-dom";

export default function RegisterPage(){
    return(
        <Containerhome>
            <img src={logo}/>
            <Register />
            <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
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
