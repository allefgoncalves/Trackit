import { styled } from 'styled-components';
import TopBar from '../Page/TopBar';
import LowerBar from '../Page/lowerBar';
import ContainerPage from '../style/ContainerPage';
import HabitoToday from './HabitoToday'

export default function Habits(){
    return(
        <>
            <TopBar/>
            <ContainerPage>
                <Top>
                    segunda, 17/05
                    <Erro>
                        Nenhum hábito concluído ainda
                    </Erro>
                    <Certo>
                        67% dos hábitos concluídos {/* o % é uma variavel*/}
                    </Certo>
                </Top>
                <HabitoToday/>
            </ContainerPage>
            <LowerBar/>
        </>
        
    );
}

const Top = styled.div`
    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left; 
    color: #126BA5;
    margin: 20px auto 20px 5px;
`

const Erro = styled.div`
    font-size: 18px;
    line-height: 22px;
    color: #BABABA;
`

const Certo = styled.div`
    font-size: 18px;
    line-height: 22px;
    color:#8FC549;
`