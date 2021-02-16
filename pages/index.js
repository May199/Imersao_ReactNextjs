import { useRouter } from 'next/router'
import Cards from '../src/components/Cards'
import QuizBackground from '../src/components/QuizBackground'
import FooterWrapper from '../src/components/FooterWrapper'
import Social from '../src/components/Social'
import QuizContainer from '../src/components/QuizContainer'

export default function Home(){
  const router = useRouter();
  const [nome, setNome] = React.useState(''); 

  return (
    <QuizBackground>
      <Social>
        <a href="https://github.com/May199"><Social.Github/></a>
        <a href="https://www.instagram.com/manu_blood_/"><Social.Instagram/></a>
      </Social>

      <QuizContainer>
        <Cards>
          <Cards.Header>
            <h1>Quiz Bleach</h1>
          </Cards.Header>

          <Cards.Content> 
            <p>Teste seus conhecimentos sobre o anime Bleach</p> 
            <form onSubmit={function (event){ event.preventDefault(); router.push(`/quiz?name=${nome}`);}}> 
              <input 
                onChange={function (event){setNome(event.target.value)}} 
                placeholder="Diz seu nome de jogador :)"
              />  
              <button type="submit" disabled={nome.length === 0}>JOGAR {nome.toUpperCase()}</button>
            </form> 
          </Cards.Content>
        </Cards>

        <Cards>
          <Cards.Header>
            <h1>Quiz da Galera</h1>
          </Cards.Header>

          <Cards.Content>
            <p>Outros quizzes desenvolvidos no #AluraQuiz</p>

            <a href="https://python-quiz.ermessonlima.vercel.app/">
              <Cards.Topic>ermessonlima/python-quiz</Cards.Topic>
            </a>
            <a href="https://aluraquiz.alec-nk.vercel.app/">
              <Cards.Topic>alec-nk/aluraquiz</Cards.Topic>
            </a>
            <a href="https://quiz-react.brenoha.vercel.app/">
              <Cards.Topic>brenoha/quiz-react</Cards.Topic>
            </a>
            <a href="https://aluraquiz.edlanioj.vercel.app/">
              <Cards.Topic>edlanioj/aluraquiz</Cards.Topic>
            </a>
          </Cards.Content>
        </Cards>

      <FooterWrapper />
      </QuizContainer>
    </QuizBackground>
  )
}
