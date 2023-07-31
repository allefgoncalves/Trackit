import { useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import { Input, Button, ContainerInput } from '../style/Input';
import axios from 'axios';
import UseContext from './../contexts/UseContext';

export default function LoginPage(){
    const navigate = useNavigate();
    const [user, setUser] = useState({email:"", password:""});
    const { setToken } = useContext(UseContext);

    function login(e){
    
        e.preventDefault();
    
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
    
        const promise = axios.post(URL, user);
        promise.then( resp => {
            console.log(resp.data);
            setToken(resp.data.token);
            navigate('/habitos');
        });
        promise.catch( erro =>{
            alert(erro.response.data.message)
            console.log(erro)
        });
      }
    
    return(
        <ContainerInput>
            <form onSubmit={login}>
                <Input
                    type="email"
                    placeholder="E-mail"
                    required
                    onChange={ e => setUser({...user, email:e.target.value})}
                    value={user.email}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    required
                    onChange={ e => setUser({...user, password:e.target.value})}
                    value={user.password}
                />
                <Button type="submit">Entrar</Button>
                <Button type="reset">cancelar</Button>
            </form>
        </ContainerInput>
    );
}
