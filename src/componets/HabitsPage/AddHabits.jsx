import { styled } from 'styled-components';
import { useState } from "react";
import { Input } from '../style/Input';
import axios from 'axios';

export default function AddHabits(){
    const [day, setday] = useState("");
    const [nome, setnome] = useState("");

    function signUp(e){
    
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
        <Add>
            <form onSubmit={signUp}>
                <Input
                type="text"
                placeholder="Nome"
                required
                onChange={e => setnome(e.target.value)}
                value={nome}
                />
                <Grid>  {/*botoes dos dias da semnada*/}
                    <button type="button" active={day === 'Dom'} onClick={() => setday("D")}>D</button>
                    <button type="button" active={day === 'Seg'} onClick={() => setday("S")}>S</button>
                    <button type="button" active={day === 'Ter'} onClick={() => setday("T")}>T</button>
                    <button type="button" active={day === 'Qua'} onClick={() => setday("Q")}>Q</button>
                    <button type="button" active={day === 'Qui'} onClick={() => setday("Q")}>Q</button>
                    <button type="button" active={day === 'Sex'} onClick={() => setday("S")}>S</button>
                    <button type="button" active={day === 'Sab'} onClick={() => setday("S")}>S</button>
                </Grid>
                <Footer>
                    <button type="reset">Cancelar</button>
                    <button type="submit">Cadastrar</button>
                </Footer>
            </form>
        </Add>
    );
}

const Footer = styled.div`
    display: flex;
    position: relative;
    bottom: 0px;
    right: 0px;
    height: 35px;
    
`

const Add = styled.div`
    width: 320px;
    height: 160px;
    background-color:#FFFFFF;
    margin: 20px auto;
    display: flex;
    padding: 10px;
 ;
`

const Grid = styled.div`
  display: flex;
  width: 100%;

  *:not(:last-child) {
    margin-right: 10px;
  }
`