import {Routes, Route} from 'react-router-dom';

import MainPage from './pages/main/Main';
import QuizPage from './pages/quiz/Quiz';
import ResultPage from './pages/result/Result';
import './App.css'

/* Небольшое приложение по тестовому заданию, основной функционал находиться в компонентах страницы и в store-е 
 Само приложение разделено на 3 страницы: 
 1. Главная страница, через которую мы начинаем тест
 2. Страница самого теста
 3. Страница результатов

 Данные по тесту сохраняются в store, который реализован через Effector, которые также потом отправляется в localstorage черещ Effector-Storage

 Дополнительный функционал не реализован, кроме рекомендаций в основном ТЗ
 
 */

function App() {


  return (

      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/test" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>

  )
}

export default App
