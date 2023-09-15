<template>
  <main>
    <div class="bg-[#07090f] text-white">
      <div class="h-[25vh] flex flex-col items-center justify-evenly">
        <h1 class="text-5xl font-bold">
          ToDo
        </h1>
        <div v-if="deleteTask">
          <DeleteConfirmation @toggleDelete="hideDeleteWarning" @removeTask="removeTask" />
        </div>
        <div v-if="this.showModal"
          class="absolute w-full bg-black bg-opacity-30 h-full top-0 left-0 flex justify-center  ">
          <FormModal :active="showModal" @toggle="closeForm" :mode="mode" :editData="editData" />
        </div>

        <div>
          <button @click="showForm('Create', null)"
            class="bg-transparent hover:bg-[#082F49] text-[#197dbf] hover:text-white py-2 px-4 border border-[#082F49] hover:border-transparent rounded font-medium">
            + Add Task
          </button>
        </div>

        <div>
          <button
            class="bg-transparent hover:bg-[#082F49] text-[#197dbf] hover:text-white py-2 px-4 border border-[#082F49] hover:border-transparent rounded font-medium"
            @click="toggleShow">{{ showCompleted ? 'Show pending tasks' : 'Show completed tasks' }}</button>
        </div>
      </div>

      <div v-if="!showCompleted" class="tasks flex flex-col items-center justify-start md:px-40 h-[75vh] overflow-auto">
        <Task v-for="(task, i) in $store.state.tasks.filter(task => !task.done)"
          @dulpicate="showForm('Edit', { task, i })" :key="task.id" :task="task" @toggleDelete="toggleDelete" />
      </div>
      <div v-if="showCompleted" class="tasks flex flex-col items-center justify-start md:px-40 h-[75vh] overflow-auto">
        <Task v-for="(task, i) in $store.state.tasks.filter(task => task.done)" @toggleDelete="toggleDelete"
          @dulpicate="showForm('Edit', { task, i })" :key="task.id" :task="task" />
      </div>

    </div>
  </main>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      deleteTask: false,
      showCompleted: false,
      showModal: false,
      mode: '',
      editData: '',
      taskToDelete: ''
    }
  },
  beforeMount() {
    this.$store.commit('INIT_STORE')
  },
  methods: {
    closeForm() {
      this.showModal = false
    },

    showForm(mode, data) {
      if (data) {
        console.log(data)
      }
      this.mode = mode
      this.editData = data
      this.showModal = !this.showModal
    },
    toggleShow() {
      this.showCompleted = !this.showCompleted
    },
    hideDeleteWarning() {
      this.taskToDelete = ''
      this.deleteTask = !this.deleteTask
    },
    toggleDelete(task) {
      console.log('toggle delete')
      this.taskToDelete = task
      this.deleteTask = !this.deleteTask
    },
    removeTask() {
      this.$store.commit('REMOVE_TASK', this.taskToDelete)

    }
  }
}
</script>