import styled from 'styled-components'

const Cards = styled.div`
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
  padding: 24px 32px 32px 32px; // verificar depois pq dá pra colocar assim. 
  
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
`;

Cards.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px; // verificar depois pq dá pra colocar assim. 
  background-color:${({theme}) => theme.colors.primary}; 
  // É basicamente um return para retornar o que tá pedindo =>: function sem parametro, só retorno.  

  *{
    margin:0;
  }
`;
export default Cards;