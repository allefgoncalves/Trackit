import {useParams, Navigate, Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react';
import { Input, Button, ContainerInput } from '../style/Input';

export default function LoginPage({setToken}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function login(e){
    
        e.preventDefault();
    
        const user ={
          email,
          password
        }
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
    
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
                <Button type="reset">cancelar</Button>
            </form>
        </ContainerInput>
    );
}
