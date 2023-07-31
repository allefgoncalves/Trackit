import { Navigate} from "react-router-dom";
import { useState, useContext } from 'react';
import { Input, Button, ContainerInput } from '../style/Input';
import axios from 'axios';
import UseContext from './../contexts/UseContext';

export default function LoginPage(){
    const [form, setForm] = useState({name:"", email:"",image:"", password:""});
    const { setImgUser } = useContext(UseContext);

    function login(e){
    
        e.preventDefault();
    
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
        const promise = axios.post(URL, form);
    
        promise.then( resp => {
          console.log(resp.data);
          Navigate("/");
        });

        promise.catch( erro => {
            console.log(erro);
            alert(`${erro.response.data.message}`);
        });
      }
    
    
    return(
        <ContainerInput>
            <form onSubmit={login}>
                <Input
                    type="text"
                    placeholder="Nome"
                    required
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
                    onChange={ e =>{
                        setForm({...form, image:e.target.value});
                        setImgUser(e.target.value);
                    }}
                    value={form.image}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    required
                    onChange={ e => setForm({...form, password:e.target.value})}
                    value={form.password}
                />
                <Button type="submit">Cadastrar</Button>
            </form>
        </ContainerInput>
    );
}
