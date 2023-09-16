import { mount } from "@vue/test-utils";
import FormModal from "@/components/FormModal.vue";
describe("FormModal", () => {
  test("is a vue component", () => {
    let wrapper = mount(FormModal);
    expect(wrapper.vm).toBeTruthy();
  });
});
