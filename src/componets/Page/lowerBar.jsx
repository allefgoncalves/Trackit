import { styled } from "styled-components";
import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { buildStyles } from "react-circular-progressbar";

export default function LowerBar(){
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        if (percentage < 100) {
          setPercentage(percentage + 1);
        }
    }, [percentage]);
    
    return(
       <Baseboard>
        <div><p>Hábitos</p></div>
        <Circulo>
            <div>
            <CircularProgressbar 
                value={percentage} 
                text="hoje" 
                styles={buildStyles({
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                })}
            />
            </div>
        </Circulo>
        <div>Histórico</div>
       </Baseboard>
    );
}

const Circulo =styled.div`
    background-color: #52B6FF;
    position: relative;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 70px;
    div{
        width: 100px;
    }
`

const Baseboard = styled.div`
    position: fixed;
    width: 313px;
    height: 70px;
    background-color: #FFFFFF;
    left: auto;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    margin-top: 0px;
    padding: 0px 30px;
    border: #e0e0e093 1px solid;
    
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: #52B6FF;
`
