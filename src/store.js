import { createStore, createDomain, createEvent } from "effector";
import { persist } from 'effector-storage/local'



const app = createDomain('app')


app.onCreateStore((store) => persist({ store }))
export const initTest = createEvent()
export const currectAnswer = createEvent()
export const wrongAnswer = createEvent()
export const clearTest = createEvent()

export const $store =  createStore({
    leadership: [],
    test: {}
},{name: 'store'})
.on(initTest,(state,payload) => ({...state,test: { // Иницилизация теста, его первичные данные
    name: payload.name,
    currectAnswer: 0,
    totallQuestion: 0,
    quiz: payload.quizTitle,
    date: new Date().toLocaleDateString()
}}))
.on(currectAnswer, (state) => ({...state,test: {...state.test, // Добавление баллов при правильном ответе
    currectAnswer: state.test.currectAnswer+1, 
    totallQuestion: state.test.totallQuestion+1
}}))
.on(wrongAnswer, (state) => ({...state,test: {...state.test, // Изменение данных при неправильном ответе
    totallQuestion: state.test.totallQuestion+1
}}))
.on(clearTest, (state) => ({...state,leadership: state.leadership.concat(state.test), test: []})) // Удаление теста после его добавления в таблицу 
persist({ store: $store, key: 'store' }) // Сохранение стора в localstorage