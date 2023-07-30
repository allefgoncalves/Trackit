import { styled } from "styled-components";
import { Icon } from '@iconify/react';

export default function HabitoToday(){
    return(
        <Habit>
            <Text>
                <p1>Ler 1 capítulo de livro</p1>  {/*variavel do habito*/}
                <p2>Sequência atual: 4 dias</p2>  {/*quantidades de dias é uma variavel e muda de cor*/}
                <p2>Seu recorde: 5 dias</p2>      {/*variavel do record de dias*/}
            </Text>
            <Check>
                <Icon icon="entypo:check" color="white" width="69" height="69"/>
            </Check>
        </Habit>
    );
}

const Text = styled.div`
    font-family: Lexend Deca;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: left;
    color:#666666;
    p1{
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 5px;
    }
    p2{
        font-size: 13px;
        line-height: 16px;
    }
    display: flex;
    flex-direction: column;
    margin-right: 60px;
`

const Check = styled.div`
    width: 69px;
    height: 69px;
    background-color: #8FC549; //essa cor muda 
    border-radius: 5px;
    font-weight: 600;
`

const Habit = styled.div`
    width: 310px;
    height: 64px;
    background-color:#FFFFFF;
    margin: 20px auto;
    display: flex;
    padding: 15px;
    border-radius: 5px;
`
