import { shallowMount, createLocalVue, config } from "@vue/test-utils";
import MainPage from "@/pages/index.vue";

config.mocks.$store = {
  state: {
    tasks: [
      {
        content: "check due date validation",
        done: false,
        dueDate: "2023-09-15",
        id: "a77369f9-a893-4664-a61c-47d7a2539414",
      },
      {
        content: "check due date validation",
        done: false,
        dueDate: "2023-09-15",
        id: "a77369f9-a893-4664-a61c-47d7a2539414",
      },
      {
        content: "check due date validation",
        done: false,
        dueDate: "2023-09-15",
        id: "a77369f9-a893-4664-a61c-47d7a2539414",
      },
    ],
  },
  commit() {},
};

describe("Main Page", () => {
  it("renders the title", () => {
    let wrapper = shallowMount(MainPage, {
      data() {
        return {
          deleteTask: false,
          showCompleted: false,
          showModal: false,
          mode: "",
          editData: "",
          taskToDelete: "",
        };
      },
    });
    let title = wrapper.find("h1");
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe("ToDo");
  });
});
