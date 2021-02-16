import styled from 'styled-components'

const QuizContainer = styled.div` 
  width:100%;
  max-width:350px;
  padding-top: 45px;
  margin: auto 10%; 
  @media screen and (max-width:500px){
    margin: 9%;
    margin-top:30px;
  }
`;
QuizContainer.Img = styled.img`
  background-image: url(${({backgroundImage}) => backgroundImage});
  background-size: cover;
  background-position: center;
  width:100%;
  height:150px;
`
export default QuizContainer;