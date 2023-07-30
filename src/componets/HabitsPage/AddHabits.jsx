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
                    <div type="reset">Cancelar</div>
                    <button type="submit">Salvar</button>
                </Footer>
            </form>
        </Add>
    );
}

const Footer = styled.div`
    display: flex;
    justify-content: end;
    align-items: end;
    bottom: 0px;
    right: 0px;
    height: 63px;

    div{
        width: 84px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#52B6FF;

        font-family: Lexend Deca;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;
    }

    button{
        width: 84px;
        height: 35px;
        margin-left: 15px;
        background-color: #52B6FF;
        color:#FFFFFF;
        border-radius: 5px;
        border: none;

        font-family: Lexend Deca;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;
    }
`

const Add = styled.div`
    width: 320px;
    height: 160px;
    background-color:#FFFFFF;
    margin: 20px auto;
    display: flex;
    padding: 10px;
    border-radius: 5px;
`

const Grid = styled.div`
    display: flex;
    width: 100%;
    button{
        width: 30px;
        height: 30px;
        border-radius: 5px;
        border: none;
    }
    *:not(:last-child) {
        margin-right: 10px;
  }
`