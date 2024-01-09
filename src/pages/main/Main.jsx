import { useState } from "react";
import { useNavigate } from "react-router-dom";

import  {initTest} from "../../store"
import   './Main.css'
function MainPage(){

    const [name,setName] = useState("");
    const navigate = useNavigate();
    const onSumbit = () => { // Функция для иницилизации теста (без этого нас будут выкидывать с страницы тестирования)
        initTest({name,quizTitle: "React Quiz"})
        return navigate("/test")
    }
    return(
        <section className="main_section">
            <h2 className="main_title">
                Добро пожаловать на тестирование &quot;React разработка&quot;
            </h2>
          <form className="form_body" onSubmit={onSumbit}> 
            <p className="flex_container">
                <label htmlFor="name">Введить ваше имя</label>
                <input className="main_form_input" type="text" name="name" id="name" value={name} onChange={(e) => {setName(e.target.value)}} placeholder="Имя пользователя"></input>
            </p>
            <button type="submit">Начать выполнение теста</button>
          </form>
        </section>
    )
}
export default MainPage;