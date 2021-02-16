import Cards from '../Cards'
import QuizContainer from '../QuizContainer'

{/*Usando ({}) é uma desconstrução do objeto criado em uma função, sendo assim quando uso o mesmo
nome da váriavel em outro componente e passar isso pro componente, o valor da variavel vai ser sustituído.  
*/}
export default function QuestionCards({question, questionIndex, totalQuestions, onSubmit, addResult}){
    const [selectedAlternatives, setSelectedAlternatives] = React.useState(undefined);
    const [isSubmit, setIsSubmit] = React.useState(false);
    const correctAnswer = selectedAlternatives + 1 === question.answer;
    const hasSelectedAlternatives = selectedAlternatives !== undefined;
    const questionId = `question_${questionIndex}`;
    
    return(
    <Cards>
        <Cards.Header>
            <h1>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h1>
        </Cards.Header>

        <QuizContainer.Img backgroundImage={question.image} />
        <Cards.Content> 
            <h1>{question.title}</h1>
            <p>{question.description}</p>

            <form onSubmit={(event) => {event.preventDefault(); 
                 setIsSubmit(true);
                 setTimeout(() =>{
                    addResult(correctAnswer);
                    onSubmit(); 
                    setIsSubmit(false);
                 }, 2 * 1000);
            }}>

                {question.alternatives.map((alternative, alternativeIndex) => {
                    const alternativeId = `alternative_${alternativeIndex}`;
                    return (
                        <Cards.Topic key={alternativeId} as="label" htmlFor={alternativeId}>
                            <input 
                                style={{display:'none'}} 
                                id={alternativeId} 
                                type="radio" 
                                name={questionId}
                                onChange={() => setSelectedAlternatives(alternativeIndex)}
                            />
                            {alternative}
                        </Cards.Topic>
                    )
                })}
                <button type="submit" disabled={!hasSelectedAlternatives}>CONFIRMAR</button>

                {isSubmit && correctAnswer  && <p>Você acertou</p>} 
                {isSubmit && !correctAnswer && <p>Você errou</p>}
            </form>
        </Cards.Content>
        </Cards>
    )
}