import { styled } from 'styled-components';

export const ContainerInput =styled.div`
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
`


 export const Input = styled.input`
  height: 45px;
  width: 283px;
  border: 1px solid #BEBEBE;
  background-color: #FFFFFF;
  color: #222222;
  font-family: 'Lexend Deca', sans-serif;
  padding: 0px 10px;
  margin: 10px auto;
  border-radius: 4px;

  ::placeholder {
    color: #222222;
    font-family: 'Lexend Deca', sans-serif;
  }
`

export const Button = styled.button`
  height: 45px;
  width: 303px;
  background-color: ${(props) => typeof props.active !== 'boolean' || props.active ? "#52B6FF" : "#888"};
  color: #FFFFFF;
  font-family: 'Lexend Deca', sans-serif;
  padding: 14px;
  ${(props) => !props.noMargin && "margin-bottom: 10px;"}
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
