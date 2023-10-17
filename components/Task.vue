<template>
    <div
        :class="['task', 'lg:min-h-[25%]', 'min-h-[40%]', 'flex', 'flex-col', 'md:w-full', 'lg:w-2/5', 'w-11/12', 'border', 'rounded-md', 'border-solid', pastDueDate ? 'border-red-700' : 'border-sky-950', 'border-2', 'mb-3']">
        <div class="flex lg:flex-row flex-col items-center justify-around h-3/6">
            <div class="font-bold text-xl">
                {{ task.content }}
            </div>
            <div class="font-bold text-xl">
                {{ task.dueDate }}
            </div>
        </div>
        <div class="h-3/6 flex flex-row items-center justify-evenly ">
            <div class="flex lg:flex-row lg:justify-around flex-col justify-center items-center w-1/2">
                <button @click="toggleDelete"
                    class=" bg-transparent hover:bg-red-700 text-red-700 hover:text-white font-medium py-2 px-4 rounded-full">
                    Delete
                </button>
                <button v-if="!task.done"
                    class="bg-transparent hover:bg-yellow-700 text-yellow-700 hover:text-white font-medium py-2 px-4 rounded-full"
                    @click="editTask">
                    Edit
                </button>
            </div>
            <div class="flex lg:flex-row flex-col lg:justify-around justify-center items-center w-1/2">
                <button v-if="!task.done" @click="duplicateTask"
                    class="bg-transparent hover:bg-yellow-700 text-yellow-700 hover:text-white font-medium py-2 px-4 rounded-full">
                    Duplicate
                </button>
                <button @click="toggleDone"
                    class="bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white font-medium py-2 px-4 rounded-full">
                    {{ task.done ? 'Undo' : 'Done' }}
                </button>
            </div>
        </div>
        <div>
            <p v-if="pastDueDate" class=" ml-5 mb-5 text-red-700 text-xs italic">Past due date.</p>
        </div>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
export default {
    props: ['task'],
    data() {
        return { pastDueDate: false }
    },
    mounted() {
        this.checkDueDate()
    },
    methods: {
        checkDueDate() {
            let dueDate = new Date(this.task.dueDate)
            let today = new Date()
            today.setHours(0, 0, 0, 0)
            if (today > dueDate && !this.task.done) {
                this.pastDueDate = true
            } else {
                this.pastDueDate = false
            }
        },
        toggleDone() {
            this.$store.commit('TOGGLE_TASK', this.task)
        },
        editTask() {
            this.$emit('dulpicate')
        },
        duplicateTask() {
            this.$store.commit('ADD_TASK', { id: uuidv4(), task: this.task.content, dueDate: this.task.dueDate, done: this.task.done })
        },
        toggleDelete() {

            this.$emit('toggleDelete', this.task)
        }
    }

}
</script>
