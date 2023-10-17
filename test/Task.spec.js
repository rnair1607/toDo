import { shallowMount } from "@vue/test-utils";
import Task from "@/components/Task.vue";

describe("Task", () => {
  it("renders headers and elements", async () => {
    let wrapper = shallowMount(Task, {
      data() {
        return {
          pastDueDate: true,
          task: {
            content: "Random",
            dueDate: "12/12/24",
            done: false,
          },
        };
      },
    });

    let content = wrapper.find("#content");
    expect(content.exists()).toBe(true);
    expect(content.text()).toBe("Random");

    let dueDateElement = wrapper.find("#dueDate");
    expect(dueDateElement.exists()).toBe(true);
    expect(dueDateElement.text()).toBe("12/12/24");

    let dltBtn = wrapper.find("#delete");
    expect(dltBtn.exists()).toBe(true);

    let editBtn = wrapper.find("#edit");
    expect(editBtn.exists()).toBe(true);
    await editBtn.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("dulpicate");
  });
});
