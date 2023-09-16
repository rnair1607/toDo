<template >
    <div
        class="p-4 bg-sky-950 mt-32 lg:w-2/5 h-2/4 w-11/12   rounded-md border-orange-400 border-solid border-2 flex flex-col items-center justify-evenly">
        <h1 class="text-white text-2xl text-center pb-5 ">{{ this.mode }} task</h1>
        <div class="flex flex-col w-2/4  mb-2 justify-center pl">

            <div class="mb-6">
                <label class="block text-sm font-bold mb-2" for="task">
                    Task
                </label>
                <input
                    :class="['shadow', taskError ? 'border-red-700' : '', 'text-gray-700', 'appearance-none', 'border-2', 'rounded', 'w-full', 'py-2', 'px-3', 'mb-3', 'leading-tight', 'focus:outline-none', 'focus:shadow-outline']"
                    id="task" type="text" v-model="newTask" @change="inputChange('Task')" placeholder="Add a task">
                <p v-if="taskError" class="text-red-700 text-xs italic">Please add a task.</p>
            </div>
            <div class="mb-6">
                <label class="block text-sm font-bold mb-2" for="dueDate">
                    Due Date
                </label>
                <input
                    :class="['shadow', dueDateError ? 'border-red-700' : '', 'text-gray-700', 'appearance-none', 'border-2', 'rounded', 'w-full', 'py-2', 'px-3', 'mb-3', 'leading-tight', 'focus:outline-none', 'focus:shadow-outline']"
                    id="dueDate" type="date" v-model="dueDate" @change="inputChange('Date')" placeholder="DD-MM-YYYY">
                <p v-if="dueDateError" class="text-red-700 text-xs italic">Please choose a due date.</p>
            </div>
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
            dueDate: '',
            dueDateError: false,
            taskError: false
        }
    },
    mounted() {

        if (this.editData) {
            this.id = this.editData.task.id
            this.newTask = this.editData.task.content
            this.dueDate = this.editData.task.dueDate
        } else {
            this.id = uuidv4()
        }
    },
    methods: {
        inputChange(field) {
            if (field === 'Task') {
                this.taskError = false
            }
            if (field === 'Date') {
                this.dueDateError = false
            }
        },
        addTask(mode) {
            if (this.dueDate === '') {
                this.dueDateError = true
            }
            if (this.newTask === '') {
                this.taskError = true

            }
            if (this.newTask && this.dueDate) {

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

