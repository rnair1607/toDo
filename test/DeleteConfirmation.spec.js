import { mount } from "@vue/test-utils";
import DeleteConfirmation from "@/components/DeleteConfirmation.vue";
describe("Delete confirmation", () => {
  test("is a vue component", () => {
    let wrapper = mount(DeleteConfirmation);
    expect(wrapper.vm).toBeTruthy();
  });
});
