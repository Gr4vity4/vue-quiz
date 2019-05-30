<template>
    <div class="pb-4">
        <p class="text-xl text-bold pl-4 text-left text-green-800 break-words pb-4">
            {{ `${id}. ${quiz.question}` }}
        </p>
        <div v-for="(answer, index) in answers" :key="index" class="text-left pl-8">
            <input type="radio" class="mr-2" :name="`answer_${id}`" :value="answer"
                   @click="selected">
            {{ answer }}
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Question',
    props: [
      'id',
      'quiz',
    ],
    data: function () {
      return {
        answerCorrect: this.quiz.correct_answer,
      }
    },
    methods: {
      selected: function (x) {
        let answerSelected = x.target.value
        console.log('you selected is : ' + answerSelected)
        console.log('answer is : ' + this.answerCorrect)
      },
    },
    computed: {
      answers: function () {
        let data = [...this.quiz.incorrect_answers]
        data.push(this.quiz.correct_answer)
        data = _.shuffle(data)
        return data
      },
    },
  }
</script>
