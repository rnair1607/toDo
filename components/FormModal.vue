<template >
    <div
        class="p-4 bg-sky-950 mt-32 lg:w-2/5 h-2/4 w-11/12   rounded-md border-orange-400 border-solid border-2 flex flex-col items-center justify-evenly">
        <h1 class="text-white text-2xl text-center pb-5 ">{{ this.mode }} task</h1>
        <div class="flex flex-col w-2/4  mb-2 justify-center pl">

            <div class="flex flex-col w-full ">
                <label for="task">Title</label>
                <input type="text" class="mb-3 rounded-md text-black w-full h-full" v-model="newTask"
                    placeholder="Add a task" id="task">
            </div>
            <div class="flex flex-col w-full ">
                <label for="dueDate">Due Date</label>
                <input type="date" id="dueDate" v-model="dueDate" class="rounded-md w-full h-full text-black">
            </div>

            <!-- <slot /> -->
        </div>
        <div class="text-md mt-8 w-2/4 py-2 px-6 flex flex-row justify-evenly items-center">
            <button class="text-white " @click="toggleModal">
                Close
            </button>

            <button class="text-orange-400 " @click="addTask(mode)">{{ this.mode === 'Create' ? 'Add' : 'Update'
            }}</button>
        </div>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
    nam: 'FormModal',
    props: ['active', 'mode', 'editData'],
    data() {
        return {
            id: null,
            newTask: '',
            dueDate: ''
        }
    },
    mounted() {
        console.log(`Mode: ${this.mode}`)
        // console.log(this.editData)
        if (this.editData) {
            this.id = this.editData.task.id
            this.newTask = this.editData.task.content
            this.dueDate = this.editData.task.dueDate
        } else {
            this.id = uuidv4()
        }
    },
    methods: {
        addTask(mode) {
            if (this.newTask) {

                if (mode == 'Create') {

                    this.$store.commit('ADD_TASK', { id: this.id, task: this.newTask, dueDate: this.dueDate })
                } else {
                    this.$store.commit('UPDATE_TASK', { id: this.id, task: this.newTask, dueDate: this.dueDate })

                }
                this.newTask = ''
                this.dueDate = ''
                this.toggleModal()
            }
        },
        toggleModal() {
            this.$emit('toggle');
        }
    }

}
</script>

