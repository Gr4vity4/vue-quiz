<template>
    <div class="mt-6 p-4">
        <p class="text-3xl font-bold">
            General Knowledge
        </p>

        <div class="flex flex-col mx-auto mt-4 max-w-2xl min-h-screen">
            <div v-for="(question, index) in questions" :key="index">
                <Question :id="index + 1" :quiz="question"/>
            </div>
            <div class="flex justify-end">
                <button type="button"
                        class="border border-green-300 pt-2 pb-2 rounded-l rounded-r font-bold bg-green-400 text-white hover:bg-green-500 w-full lg:w-40">
                    Submit
                </button>
            </div>
        </div>

    </div>
</template>

<script>
  import Question from './Question.vue'

  export default {
    name: 'Home',
    data: function () {
      return {
        questions: [],
      }
    },
    components: {
      Question,
    },
    mounted () {
      this.$axios.get('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple').
        then(response => {
          this.questions = response.data.results
        })
    },
  }
</script>
