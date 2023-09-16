import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import index from "@/pages/index.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("index", () => {
  let store = new Vuex.Store({
    index,
  });

  test("is a vue page", () => {
    let wrapper = mount(index, { store, localVue });
    expect(wrapper.vm).toBeTruthy();
  });
});
