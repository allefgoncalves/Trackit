import {useParams, Navigate, Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react';

import styled from 'styled-components';

export default function LoginPage({setToken}){
    const Navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login(e){
    
        e.preventDefault();
    
        const user ={
          email,
          password
        }
        //trocar url
        const URL = 'https://mock-api.driven.com.br/api/v2/camppi/auth/login';
    
        const promise = axios.post(URL, user);
        promise.then( resp => {
          console.log(resp.data);//verificar resposta da API
          setToken(resp.data.token);
          Navigate("/habitos");
        });
        // promise.catch( erro => alert(erro.response.data.message));
        promise.catch( erro => console.log(erro));
      }
    
    
    return(
        <ContainerInput>
            <form onSubmit={login}>
                <Input
                    type="email"
                    placeholder="E-mail"
                    required
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    required
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />
                <Button type="submit">Entrar</Button>
            </form>
        </ContainerInput>
    );
}

const ContainerInput =styled.div`
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
`

const Input = styled.input`
  height: 45px;
  width: 283px;
  border: 1px solid #BEBEBE;
  background-color: #FFFFFF;
  color: #222222;
  font-family: 'Lexend Deca', sans-serif;
  padding: 0px 10px;
  margin: 10px auto;
  border-radius: 4px;

  ::placeholder {
    color: #222222;
    font-family: 'Lexend Deca', sans-serif;
  }
`

const Button = styled.button`
  height: 45px;
  width: 303px;
  background-color: ${(props) => typeof props.active !== 'boolean' || props.active ? "#52B6FF" : "#888"};
  color: #FFFFFF;
  font-family: 'Lexend Deca', sans-serif;
  padding: 14px;
  ${(props) => !props.noMargin && "margin-bottom: 10px;"}
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`