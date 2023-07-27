import {useParams, Navigate, Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react';
import { Input, Button, ContainerInput } from '../style/Input';

export default function LoginPage({setToken}){
    const Navigate = useNavigate();
    const [form, setForm] = useState({name:"", email:"", image:"", password:""});

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
          Navigate("/");
        });
        // promise.catch( erro => alert(erro.response.data.message));
        promise.catch( erro => console.log(erro));
      }
    
    
    return(
        <ContainerInput>
            <form onSubmit={login}>
                <Input
                    type="text"
                    placeholder="Nome"
                    required
                    // onChange={ e => setName(e.target.value)}
                    onChange={ e => setForm({...form, name:e.target.value}) }
                    value={form.name}
                />
                <Input
                    type="email"
                    placeholder="E-mail"
                    required
                    onChange={ e => setForm({...form, email:e.target.value})}
                    value={form.email}
                />
                <Input
                    type="url"
                    placeholder="Imagem"
                    required
                    onChange={ e => setForm({...form, image:e.target.value})}
                    value={form.image}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    required
                    onChange={ e => setForm({...form, password:e.target.value})}
                    value={form.password}
                />
                <Button type="submit">Entrar</Button>
            </form>
        </ContainerInput>
    );
}
