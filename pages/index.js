import styled from 'styled-components'
import Cards from '../src/components/Cards'
import QuizBackground from '../src/components/QuizBackground'
import FooterWrapper from '../src/components/FooterWrapper'
import Social from '../src/components/Social'

export const QuizContainer = styled.div` 
  width:100%;
  max-width:350px;
  padding-top: 45px;
  margin: auto 10%; 
  @media screen and (max-width:500px){
    margin:auto;
    padding:15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground>
      <Social>
        <Social.Github/>
        <Social.Instagram/>
      </Social>
      <QuizContainer>
        <Cards>
          <Cards.Header>
            <h1>Titulo do Quiz</h1>
          </Cards.Header>
          <Cards.Content>
            <p>Description</p>  
          </Cards.Content>
        </Cards>

        <Cards>
          <Cards.Header>
            <h1>Titulo do Quiz</h1>
          </Cards.Header>
          <Cards.Content>
            <p>Description</p>
          </Cards.Content>
        </Cards>

      <FooterWrapper />
      </QuizContainer>
    </QuizBackground>
  )
}
