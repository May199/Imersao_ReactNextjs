import QuizBackground from '../src/components/QuizBackground'
import FooterWrapper from '../src/components/FooterWrapper'
import QuizContainer from '../src/components/QuizContainer'
import QuestionCards from '../src/components/QuestionCards'
import LoadingCard from '../src/components/LoadingCard'
import ResultCard from '../src/components/ResultCard'
import db from '../db.json'

const screenStates = {
    QUIZ: 'QUIZ', 
    LOADING: 'LOADING',
    RESULT: 'RESULT'
}

export default function QuizPage(){
    const [screenState, setScreenState] = React.useState(screenStates.LOADING);
    const [questionIndex, setQuestionIndex] = React.useState(0);
    const [results, setResults] = React.useState([]);
    const question = db.questions[questionIndex];
    const totalQuestions = db.questions.length;
   
    React.useEffect(() => {
        setTimeout(() =>{
            setScreenState(screenStates.QUIZ);
        }, 1 * 1000);
    }, []);

    function handSubmit(){
        const nexQuestion = questionIndex + 1;
        if(nexQuestion < totalQuestions){
            setQuestionIndex(questionIndex + 1);
        }else{
            setScreenState(screenStates.RESULT);
        }
    }
    //Verificar porque é usado assim '...results'.Estou pegando um novo valor do result e setando no array o que já tinha. 
    function addResult(result){
        setResults([
            ...results,
            result,
        ]);
    }

    return(
        <QuizBackground>
        <QuizContainer>

        {screenState === 'QUIZ' && (
            <QuestionCards
                question = {question}
                questionIndex = {questionIndex}
                totalQuestions = {totalQuestions}
                onSubmit = {handSubmit}
                addResult = {addResult}
            />
        )}
        {screenState === 'LOADING' && (
            <LoadingCard/>
        )}
        {screenState === 'RESULT' && (
            <ResultCard
                results = {results}
            />
        )}

        <FooterWrapper/>
        </QuizContainer>
      </QuizBackground>
    )
    
}