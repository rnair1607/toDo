import { shallowMount } from "@vue/test-utils";
import DeleteConfirmation from "@/components/DeleteConfirmation.vue";

describe("Delete confirmation", () => {
  it("is a vue component", () => {
    let wrapper = shallowMount(DeleteConfirmation);
    expect(wrapper.vm).toBeTruthy();
  });

  it("Renders the title", () => {
    let wrapper = shallowMount(DeleteConfirmation);
    let title = wrapper.find("h3");
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe("Delete task");
  });

  it("Renders the text", () => {
    let wrapper = shallowMount(DeleteConfirmation);
    let para = wrapper.find("p");
    expect(para.exists()).toBe(true);
    expect(para.text()).toEqual(
      expect.stringContaining(`Are you sure you want to delete this task?`)
    );
  });

  it("clicks Delete button", async () => {
    let wrapper = shallowMount(DeleteConfirmation);
    let deleteBtn = wrapper.find("button#deleteBtn");
    expect(deleteBtn.text()).toBe("Delete");
    await deleteBtn.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("removeTask");
    expect(wrapper.emitted()).toHaveProperty("toggleDelete");
  });

  it("clicks cancel button", async () => {
    let wrapper = shallowMount(DeleteConfirmation);
    let cancelBtn = wrapper.find("button#cancelBtn");
    expect(cancelBtn.exists()).toBe(true);
    await cancelBtn.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("toggleDelete");
  });
});
