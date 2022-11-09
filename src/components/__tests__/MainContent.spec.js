import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import MainContent from "../MainContent.vue";

describe("MainContent", () => {

  let wrapper = null;
  beforeEach(() => {
    wrapper = mount(MainContent, {});
  })

  it("renders properly", () => {
    expect(wrapper.text()).toContain("Enter barcode");
  })
  
  it("should validate barcode with correct length", () => {
    wrapper.find("#barcode-input").setValue("12345");
    expect(wrapper.vm.isValidBarcode).toEqual(false);
    wrapper.find("#barcode-input").setValue("978014300723");
    expect(wrapper.vm.isValidBarcode).toEqual(true);
  });

  it("should be able to determine if barcode is empty or not", () => {
    expect(wrapper.vm.isEmpty).toEqual(true);
    wrapper.find("#barcode-input").setValue("978014300723");
    expect(wrapper.vm.isEmpty).toEqual(false);
  });

  it("clear button should be disabled if barcode input is not filled", () => {
    expect(wrapper.vm.isEmpty).toBe(true);
  });

  it("should be able to clear barcode if barcode input is filled", () => {
    wrapper.find("#barcode-input").setValue("978014300723");
    const clearButton = wrapper.find("#barcode-clear");
    expect(clearButton.attributes().disabled).toBeFalsy();
    clearButton.trigger("click");
    expect(wrapper.vm.barcode).toEqual("");
  });

  it("should be able to compute ISBN13 code if input is valid", () => {
    wrapper.find("#barcode-input").setValue("978014300723");
    const submitButton = wrapper.find("#barcode-submit");
    expect(submitButton.attributes().disabled).toBeFalsy();
    submitButton.trigger("click");
    expect(wrapper.vm.isbn13Code).toBeTruthy();
  });

});
