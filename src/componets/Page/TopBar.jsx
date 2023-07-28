import { styled } from "styled-components";

export default function TopBar(){
    return(
        <Header>
            <p>TrackIt</p>
            <img src='https://tse2.mm.bing.net/th?id=OIP.TDj2k9Vo4KPQkvR9siBhWQHaHa&pid=Api&P=0&h=180'/>
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