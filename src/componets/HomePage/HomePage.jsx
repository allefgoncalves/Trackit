import {Link} from "react-router-dom";
import styled from 'styled-components';
import logo from './../../assets/logo.png';
import LoginPage from './Login';
import Containerhome from "../style/Containerhome";

export default function HomePage(){
    
    return(
        <Containerhome>
            <img src={logo} />
            <LoginPage />
            <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
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