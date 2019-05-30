<template>
    <div class="mt-6 p-4">
        <p class="text-3xl font-bold">
            General Knowledge
        </p>

        <div class="flex flex-col mx-auto mt-4 max-w-2xl min-h-screen">
            <div v-for="(question, index) in this.$store.state.questions" :key="index">
                <Question :id="index + 1" :quiz="question"/>
            </div>
            <div class="flex justify-end">

                <Modal v-if="this.$store.state.showModal === true"/>

                <button type="button"
                        class="border border-green-300 pt-2 pb-2 rounded-l rounded-r font-bold bg-green-400 text-white hover:bg-green-500 w-full lg:w-40"
                        @click="submit">
                    Submit
                </button>
            </div>
        </div>

    </div>
</template>

<script>
  import Question from './Question.vue'
  import Modal from './Modal.vue'

  export default {
    name: 'Home',
    data: function () {
      return {
        questions: [],
        showModal: false,
      }
    },
    components: {
      Question,
      Modal,
    },
    methods: {
      submit: function () {
        this.$store.dispatch('showModal', true)
        this.$store.dispatch('modalFooter', true)
        this.$store.dispatch('modalTitle', 'Confirm your answers?')
      },
    },
    mounted () {
      this.$store.dispatch('fetchQuestions')
    },
  }
</script>
