import { styled } from 'styled-components';
import TopBar from '../Page/TopBar';
import LowerBar from '../Page/lowerBar';
import ContainerPage from '../style/ContainerPage';
import Habits from './Habits';
import AddHabits from './AddHabits';
import { Icon } from '@iconify/react';
import { useState } from 'react';

export default function HabitsPage(){
    const [add, setadd]= useState(false);
    function addHabito(){
        setadd(true);
    }
    return(
        <>
            <TopBar/>
            <ContainerPage>
                
                <MenuHabits>
                    <p>Meus hábitos</p>
                    <button onClick={addHabito}><Icon icon="mingcute:add-fill" color="white" width="69" height="69" /></button>
                </MenuHabits>
                {(add)?<AddHabits setadd={setadd}/>:""}
                <Habits /> 
            </ContainerPage>
            <LowerBar/>
        </>
    );
}

const MenuHabits = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 35px;
    margin-top: 20px;

    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
    color:#126BA5;

    button{
        width: 40px;
        height: 35px;
        border-radius: 5px;
        background-color: #52B6FF;
        display: flex;
        align-items: center;
        justify-content: center;
        border: #52B6FF 1px solid;

        font-size: 27px;
        font-weight: 900;
        color:#FFFFFF;;
    }
`