<template>
    <div class="pb-4">
        <p class="text-xl text-bold pl-4 text-left text-green-800 break-words pb-4">
            {{ `${id}. ${quiz.question}` }}
        </p>
        <div v-for="(answer, index) in answers" :key="index" class="text-left pl-8">
            <input type="radio" class="mr-2" :id="id" :name="`answer_${id}`" :value="answer"
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
    methods: {
      selected: function (x) {
        let answerSelected = x.target.value
        if (answerSelected === this.quiz.correct_answer) {
          this.$store.dispatch('answerSelected', {
            id: x.target.id,
            value: answerSelected,
            correct: true,
          })
        } else {
          this.$store.dispatch('answerSelected', {
            id: x.target.id,
            value: answerSelected,
            correct: false,
          })
        }
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
