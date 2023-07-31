import { styled } from "styled-components";
import UseContext from './../contexts/UseContext';
import { useContext } from 'react';
import user from './../../assets/user.jpg';


export default function TopBar(){
    const { imgUser } = useContext(UseContext);
    return(
        <Header>
            <p>TrackIt</p>
            <img src={(imgUser!=null&&imgUser!=""&&imgUser!=undefined)?imgUser: user}/>
        </Header>
    );
}

const Header = styled.div`
    position: fixed;
    top: 0px;
    left: auto;
    width: 335px;
    height: 30px;
    background-color: #126BA5;
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: space-between;

    font-family: Playball;
    font-size: 39px;
    font-weight: 400;
    line-height: 49px;
    letter-spacing: 0em;
    text-align: left;
    color:#FFFFFF;

    box-shadow: 0px 4px 4px 0px #00000026;
    img{
        width: 51px;
        height: 51px;
    }
`