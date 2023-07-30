import { styled } from 'styled-components';
import trash from './../../assets/trash-outline.svg';
import { Icon } from '@iconify/react';

export default function Habits(){
    return(
       <>
            <Texto>
                Você não tem nenhum hábito cadastrado ainda.
                Adicione um hábito para começar a trackear!
            </Texto>
            <Habito>
                <div>
                    <p>Ler 1 capítulo de livro</p>{/*aqui vai uma variavel*/}
                    <Grid>
                        <div>D</div>
                        <div>S</div>
                        <div>T</div>
                        <div>Q</div>
                        <div>Q</div>
                        <div>S</div>
                        <div>S</div>
                    </Grid>
                </div>
                <Trash>
                    <Icon icon="ion:trash-outline" color="grey" width="13" height="15" />
                </Trash>
            </Habito>
        </>
    );
}

const Trash =styled.div`
    width: 200px;
    height: 20px;
    display: flex;
    justify-content: end;
    align-items: start;
    img{
        width: 20px;
        height: 25px;
    }
`

const Texto =styled.p`
    
    font-family: Lexend Deca;
    font-size: 22px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
`

const Habito= styled.div`
    width: 320px;
    height: 91px;
    background-color:#FFFFFF;
    margin: 20px auto;
    display: flex;
    padding: 10px;
    border-radius: 5px;
    button{
       
    }
`

const Grid = styled.div`
    display: flex;
    width:270px;
    margin-top: 5px;

    div{
        width: 30px;
        height: 30px;          //essas cores vao alternar 
        //color:#D4D4D4;              //cor 1
        //border: 1px solid #D4D4D4;  //cor 1
        //background-color:#FFFFFF;   //cor 2

        color:#FFFFFF;              //teste alternado de cor
        border: 1px solid #FFFFFF;  
        background-color:#D4D4D4;   

        margin-right:10px;
        display:flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;    
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
    }
`