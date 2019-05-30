import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import axios from 'axios'
import _ from 'lodash'
import 'tailwindcss/dist/tailwind.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(Vuex)
Vue.prototype._ = _

const store = new Vuex.Store({
  state: {
    questions: [],
    score: 0,
    answers: [],
  },
  mutations: {
    questions (state, data) {
      state.questions = data
    },
    answerSelected (state, data) {
      console.log(data)
      state.answers[data.id] = data
    },
    incrementScore (state) {
      state.score += 1
    },
    resetScore (state) {
      state.score = 0
    },
  },
  actions: {
    fetchQuestions (context) {
      axios.get(
        'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple').
        then(response => {
          context.commit('questions', response.data.results)
        })
    },
    answerSelected (context, data) {
      context.commit('answerSelected', data)
    },
    totalScore (context) {
      let answers = context.state.answers
      context.commit('resetScore')
      answers.forEach((answer) => {
        if (answer.correct) {
          context.commit('incrementScore')
        }
      })
      console.log(`your score is ${context.state.score}/10`)
    },
  },
})

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
