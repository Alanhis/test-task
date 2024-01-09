import { useState, useEffect } from "react";
import {  useUnit } from "effector-react";
import { useNavigate } from "react-router-dom";
import quiz from "../../../quiz.json"
import {$store,currectAnswer,wrongAnswer, clearTest} from '../../store'

import  "./Quiz.css"

function QuizPage(){
    const store = useUnit($store)
    const navigate = useNavigate();
    const [quizIndex,setQuizIndex] = useState(0);
    const [answer, setAnswer] = useState("")
   useEffect(() => {
    // Проверка на активацию теста, если данные есть, то он начинает тест с последнего теста, если нет, то перекидывает на начальную страницу
    if(Object.entries(store.test).length !== 0){
        setQuizIndex(store.test.totallQuestion)
    } else {
        navigate("/");
    }
   }, [])

   const checkIfTestFinished = () => { // Функция, которая позволяет проверить закончились ли вопросы в тесте, если да, то перекидывает на страницу результатов
    if(quizIndex === 9){
        clearTest()
        navigate("/result")
    }
   }

    const checkAnswer = () => { // Функция, через которую проводиться проверка на правильность ответов
        if(answer === quiz.questions[quizIndex].answer){
            currectAnswer();
            setAnswer("")
            setQuizIndex(quizIndex+1)
            checkIfTestFinished()
        }else{
            wrongAnswer()
            setAnswer("")
            setQuizIndex(quizIndex+1)
            checkIfTestFinished()
        }
    }

    const selectAnswer = (event) => { // Функция, которая сохраняет данные выбора пользователя
        setAnswer(event.target.innerText)
    }

    return(
       <section className="quiz_container">
       <progress value="75" max="100" style={{"--value": quizIndex*10, "--max": 100}}></progress>
       <h1>It&apos;s Quiz time</h1>
        <section>
        <h3>{quiz.questions[quizIndex].question}</h3>
        <section className="flex_container">
        {quiz.questions[quizIndex].options.map((option, index) => 
            <button key={index} onClick={selectAnswer}>{option}</button>
        )}
        </section> 
        <button disabled={answer === ""} onClick={checkAnswer}>Проверить</button>
        </section>
       
       </section>
    )
}
export default QuizPage;