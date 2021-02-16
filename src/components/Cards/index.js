import styled from 'styled-components'

const Cards = styled.div`
  font-family: 'Roboto', sans-serif;
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid #4d4d4d;
  background-color: #212121;
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height:1;
    margin-bottom:0;
  }
  p{
    font-size: 14px;
    font-weight:400;
    line-height:1;
  }
`;

Cards.Content = styled.div`
  padding: 24px 32px 32px 32px; 
  
  & > *:first-child{
    margin-top:0;
  }
  & > *:last-child {
    margin-bottom:0;
  }
  ul{
    list-style:none;
    padding:0;
  }
  input {
    background-color:#212121;
    border-color:#FF6F00;
    border-radius: 4px;
    width:97%;
    height:35px;
    color: ${({ theme }) => theme.colors.contrastText};
  }
  button {
    margin-top:5%;
    background-color:#FF6F00;
    border-radius: 4px;
    width:99%;
    height:35px;
    color: ${({ theme }) => theme.colors.contrastText};
  }
  button:disabled{
    opacity:40%;
  }
`;

Cards.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color:${({theme}) => theme.colors.primary};  

  *{
    margin:0;
  }
`;

Cards.Topic = styled.div`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}30`};
  padding: 10px 15px;
  margin-bottom: 8px;
  border-radius: 4px;
  transition: .3s;
  display: block;
  cursor: pointer;

  &:hover, 
  &:focus{
    opacity:.5;
  }

`;

export default Cards;