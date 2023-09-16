import { mount } from "@vue/test-utils";
import Task from "@/components/Task.vue";
describe("Task", () => {
  test("is a vue component", () => {
    let wrapper = mount(Task, {
      propsData: {
        task: {
          id: "a77369f9-a893-4664-a61c-47d7a2539414",
          content: "check due date validation",
          done: false,
          dueDate: "2023-09-15",
          id: "a77369f9-a893-4664-a61c-47d7a2539414",
        },
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
