import {  useUnit } from "effector-react";
import { useNavigate } from "react-router-dom";
import  {$store} from "../../store"

import   './Result.css'


function ResultPage(){
    const store = useUnit($store)
    const navigate = useNavigate()
    function MoveToMainPage(){ // Функция для возращения теста
        navigate('/')
    }
    // Не до конца понимаю как мы должны получать историю пользователя с определнным именем, как вариант я предпологал, что мы можем просто взять самое последнее имя и от него работать
    // Но не уверен, что это адекватрая практика 
    return(
        <section className="flex_container">
           {store.leadership.length > 0 ? <table >
            <caption>
                Ваши баллы 
            </caption>
            <thead>
                <tr>
                    <th scope="col">Результат</th>
                    <th scope="col">Тема</th>
                    <th scope="col">Дата</th>
                </tr>
            </thead>
            <tbody>
                {store.leadership.map((record, index) => 
                    <tr key={index}>
                        <td>{record.currectAnswer} из {record.totallQuestion}</td>
                        <td>{record.quiz}</td>
                        <td>{record.date}</td>
                    </tr>
                )}
    
            </tbody>
            </table>
             : <h2 className="text_empty">На данный момент никто не проходил тест</h2>}
             <button onClick={MoveToMainPage}>Пройти еще раз</button>
        </section>
    )
}
export default ResultPage;