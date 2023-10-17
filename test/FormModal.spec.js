import { shallowMount } from "@vue/test-utils";
import FormModal from "@/components/FormModal.vue";

describe("Add task Modal", () => {
  it("renders title mode", () => {
    let wrapper = shallowMount(FormModal, {
      data() {
        return {
          mode: "Test",
        };
      },
    });
    let header = wrapper.find("h1");
    expect(header.exists()).toBe(true);
    expect(header.text()).toBe("task");
  });

  it("clicks close button", async () => {
    let wrapper = shallowMount(FormModal);
    let closeBtn = wrapper.find("button#closeModal");
    expect(closeBtn.exists()).toBe(true);
    await closeBtn.trigger("click");
    expect(wrapper.emitted()).toHaveProperty("toggle");
  });
});
