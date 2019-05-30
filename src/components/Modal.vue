<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-body">
                        <slot name="body">
                            <p class="font-bold text-2xl">{{ this.$store.state.modalTitle }}</p>
                        </slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">
                            <div class="flex justify-center">
                                <button type="button"
                                        class="modal-default-button border border-green-500 bg-green-500 text-white w-40 mr-2 h-10 font-bold rounded"
                                        @click="confirmSubmit"
                                        v-if="this.$store.state.modalFooter === true">
                                    OK
                                </button>
                                <button type="button"
                                        class="modal-default-button border border-red-500 bg-red-500 text-white w-40 ml-2 h-10 font-bold rounded"
                                        @click="cancelSubmit">
                                    {{ this.$store.state.modalFooter === true ? 'Cancel' : 'Close'}}
                                </button>
                            </div>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      confirmSubmit: function () {
        this.$store.dispatch('showModal', false)
        this.$store.dispatch('totalScore')
        this.$store.dispatch('modalTitle', `Your score is ${this.$store.state.score} / 10`)
        this.$store.dispatch('modalFooter', false)
        this.$store.dispatch('showModal', true)
        this.$store.dispatch('resetQuestions')
        this.$store.dispatch('fetchQuestions')
        document.getElementById('form-questions').reset()
      },
      cancelSubmit: function () {
        this.$store.dispatch('showModal', false)
      },
    },
  }
</script>

<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 400px;
        margin: 0 auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-default-button {
        float: right;
    }

    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
