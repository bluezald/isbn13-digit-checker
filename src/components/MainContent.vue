<script setup>
import { ref, computed } from "vue";
import useISBN13CheckDigit from "../composables/useISBN13CheckDigit.js";

const { getCompleteISBN13Code } = useISBN13CheckDigit();

const barcode = ref("");
const isbn13Code = ref("");

const compute = () => {
  isbn13Code.value = getCompleteISBN13Code(barcode.value);
};
const clear = () => {
  barcode.value = "";
  isbn13Code.value = "";
};
const isValidBarcode = computed(() => {
  return !isNaN(barcode.value) && barcode.value.toString().length === 12;
});
</script>

<template>
  <div class="section">
    <div class="card">
      <div class="card-content">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <img
                src="https://images.pexels.com/photos/7363196/pexels-photo-7363196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div class="column">
              <div class="content">
                <div class="field">
                  <label class="label">Enter barcode: </label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="XXXXXXXXXXXXX"
                      v-model="barcode"
                    />
                  </div>
                  <p
                    class="help"
                    :class="isValidBarcode ? 'is-success' : 'is-danger'"
                  >
                    {{
                      isValidBarcode
                        ? "Valid bacrode!"
                        : "Please Input 12 digit barcode."
                    }}
                  </p>
                </div>
                <div class="field">
                  <label class="label">Result: </label>
                  <div class="control">
                    <input
                      disabled
                      class="input"
                      type="text"
                      v-model="isbn13Code"
                    />
                  </div>
                </div>
                <div class="field is-grouped">
                  <div class="control" @click="compute">
                    <button class="button is-link">Compute</button>
                  </div>
                  <div class="control" @click="clear">
                    <button class="button is-link is-light">Clear</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
