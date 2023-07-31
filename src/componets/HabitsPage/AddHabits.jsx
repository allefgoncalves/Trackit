import { styled } from 'styled-components';
import { useState, useContext} from "react";
import { Input } from '../style/Input';
import axios from 'axios';
import UseContext from './../contexts/UseContext';
// tokem alf: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTkyOCwiaWF0IjoxNjkwODIzNDU2fQ.GAx90xa_9BjbwZQIPTzv-Cnd7XY5bFHkV9Bmp1_2urs"

export default function AddHabits({setadd}){
    const [day, setday] = useState([]);
    const [form, setForm] = useState({name:"", days:{}});
   // const { token } = useContext(UseContext);
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OTkyOCwiaWF0IjoxNjkwODIzNDU2fQ.GAx90xa_9BjbwZQIPTzv-Cnd7XY5bFHkV9Bmp1_2urs";
    function signUp(e){

        e.preventDefault();
        form.days=day;
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const config = {
            headers: { Authorization: `Bearer ${token}` }
          }
        const promise = axios.post(URL, form, config);
        
        promise.then( resp => {
          console.log(resp.data);
        });

        promise.catch( erro => alert(erro.response.data.message));
        //promise.catch( erro => console.log(erro));
    }
   
    function compara(x){
        for(let i=0;i<day.length;i++){
            if(day[i]==x){
                return true;
            }
        }
        return false;        
    }   

    function add(dia){
        console.log(compara(dia));
            if(day.length!=0&&compara(dia)){
                    let novo =day.filter(x=>x!=dia)
                    setday(novo);
            }else{
                let x= day;
                x.push(dia);
                setday(x);
            }
    }

    return(
        <Add>
            <form onSubmit={signUp}>
                <Input
                type="text"
                placeholder="Nome do hábito"
                required
                onChange={ e => setForm({...form, name:e.target.value}) }
                value={form.name}
                />
                <Grid>  {/*botoes dos dias da semnada*/}
                <button type="button" active={true==`${compara(0)}`} onClick={() => add(0)}>D</button>
                    <button type="button" active={compara(1)} onClick={() => add(1)}>S</button>
                    <button type="button" active={compara(2)} onClick={() => add(2)}>T</button>
                    <button type="button" active={compara(3)} onClick={() => add(3)}>S</button>
                    <button type="button" active={compara(4)} onClick={() => add(4)}>Q</button>
                    <button type="button" active={compara(5)} onClick={() => add(5)}>Q</button>
                    <button type="button" active={compara(6)} onClick={() => add(6)}>S</button>
                </Grid>
                <Footer>
                    <div><button type="reset" value="Reset">Cancelar</button></div>
                    <button type="submit" value="Submit">Salvar</button>
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
    div{
        button{    
        width: 84px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#52B6FF;
        background-color: #FFFFFF;

        font-family: Lexend Deca;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;
        }
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
        color: ${(props) => typeof props.active !== 'boolean' || props.active ? "#FFFFFF" : "#DBDBDB"};
        border:1px solid #DBDBDB;
        background-color: ${(props) => typeof props.active !== 'boolean' || props.active ? "#DBDBDB" : "#FFFFFF"};
    }
    *:not(:last-child) {
        margin-right: 10px;
    }
`