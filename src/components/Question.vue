<template>
    <div class="pb-4">
        <p class="text-xl text-bold pl-4 text-left text-green-800 break-words pb-4">
            {{ `${id}. ${quiz.question}` }}
        </p>
        <div v-for="(answer, index) in answers" :key="index" class="text-left pl-8">
            <input type="radio" class="mr-2" :name="`answer_${id}`">
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
