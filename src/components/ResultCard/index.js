import Cards from '../Cards'

export default function ResultCard({results}){
    return(
        <Cards>
            <Cards.Header>
                Resultado Final
            </Cards.Header>
            <Cards.Content>
                <p>Você acertou {
                /*O reduce() é um metodo de array do javaScript onde é possível fazer tipo um 
                .length em array que são de valores booleanos. */

                results.reduce((somaAtual, result) => {
                    const isCorrect = result === true;
                    if(isCorrect){
                        return somaAtual + 1;
                    }
                    return somaAtual;
                }, 0)} perguntas</p>
                
                {/*Para esta mesma função acima podemos usar da sequinte forma:  
                    {results.filter((x) => x).length} onde ele tá verificando os valores 
                    true, separando no novo array x e nos devolvendo isso. 
                */}
                <ul>  
                    {results.map((result, index) => (
                        <li>
                            Questão {index + 1}: {result == true ? 'Acertou' : 'Errou'} 
                            {/*Usamos um operador ternário para verificar se cada index do meu array Results é verdadeiro ou não*/}
                        </li>
                    ))}

                </ul>
            </Cards.Content>
        </Cards>
    )
}