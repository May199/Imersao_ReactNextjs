import styled from 'styled-components'
import { useRouter } from 'next/router'
import NextLink from 'next/link';
import Cards from '../src/components/Cards'
import QuizBackground from '../src/components/QuizBackground'
import FooterWrapper from '../src/components/FooterWrapper'
import Social from '../src/components/Social'
import db from '../db.json'

export const QuizContainer = styled.div` 
  width:100%;
  max-width:350px;
  padding-top: 45px;
  margin: auto 10%; 
  @media screen and (max-width:500px){
    margin: 9%;
    margin-top:30px;
  }
`;
//Copiado - Estudar
export function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
}
export default function Home() {
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
            {/*Ao clicar no butão jogar, a função sem parametros redireciona para a página quiz*/}
            <p>Teste seus conhecimentos sobre o anime Bleach</p> 
            <form onSubmit={function (event){ event.preventDefault(); router.push(`/quiz?name=${nome}`);}}> 
              <input 
                onChange={function (event){setNome(event.target.value)}} 
                placeholder="Diz seu nome de jogador :)"
              />  
              <button type="submit" disabled={nome.length === 0}>JOGAR {nome}</button>
            </form> 
          </Cards.Content>
        </Cards>

        <Cards>
          <Cards.Header>
            <h1>Quiz da Galera</h1>
          </Cards.Header>

          {/*Copiado - Estudar*/}
          <Cards.Content>
            <p>Outros quizzes desenvolvidos no #AluraQuiz</p>

            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <li key={linkExterno}>
                    <Cards.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                      {`${githubUser}/${projectName}`}
                    </Cards.Topic>
                  </li>
                );
              })}
            </ul>
          </Cards.Content>
        </Cards>

      <FooterWrapper />
      </QuizContainer>
    </QuizBackground>
  )
}
