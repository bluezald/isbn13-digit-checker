import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import MainContent from "../MainContent.vue";

describe("MainContent", () => {
  it("renders properly", () => {
    const wrapper = mount(MainContent, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Input Barcode");
  });
});
