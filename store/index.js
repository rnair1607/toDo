export const state = () => ({
  tasks: [],
});

export const mutations = {
  INIT_STORE(state) {
    if (localStorage.getItem("store")) {
      this.replaceState(
        Object.assign(state, JSON.parse(localStorage.getItem("store")))
      );
    }
  },
  ADD_TASK(state, { id, task, dueDate, done }) {
    console.log(`Task: ${task} dueDate: ${dueDate}`);
    if (!done) {
      done = false;
    }
    state.tasks = [
      { id, content: task, dueDate: dueDate, done },
      ...state.tasks,
    ];
    localStorage.setItem("store", JSON.stringify(state));
  },
  UPDATE_TASK(state, { id, task, dueDate }) {
    state.tasks[state.tasks.findIndex((ele) => ele.id == id)] = {
      id,
      content: task,
      dueDate: dueDate,
      done: false,
    };
    localStorage.setItem("store", JSON.stringify(state));
  },
  REMOVE_TASK(state, { id }) {
    state.tasks.splice(
      state.tasks.findIndex((ele) => ele.id == id),
      1
    );
    localStorage.setItem("store", JSON.stringify(state));
  },
  TOGGLE_TASK(state, task) {
    console.log("Toggle check: ", task);
    let index = state.tasks.findIndex((ele) => ele.id == task.id);
    console.log(state.tasks[index]);
    state.tasks[index].done = !state.tasks[index].done;
    localStorage.setItem("store", JSON.stringify(state));
  },
};
