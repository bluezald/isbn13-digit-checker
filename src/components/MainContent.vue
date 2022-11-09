<script setup>
import { ref, computed } from "vue";
import useISBN13CheckDigit from "../composables/useISBN13CheckDigit.js";

const { getCompleteISBN13Code } = useISBN13CheckDigit();

const barcode = ref("");
const isbn13Code = ref("");
const barcodeImageUrl = "https://images.pexels.com/photos/7363196/pexels-photo-7363196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const isValidBarcode = computed(() => {
  return !isNaN(barcode.value) && barcode.value.toString().length === 12;
});

const isEmpty = computed(() => {
  return barcode.value.toString().length === 0;
})

const compute = () => {
  isbn13Code.value = getCompleteISBN13Code(barcode.value);
};
const clear = () => {
  barcode.value = "";
  isbn13Code.value = "";
};
</script>

<template>
  <div class="section">
    <div class="card">
      <div class="card-content">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column">
              <img
                :src="barcodeImageUrl"
                alt=""
              />
            </div>
            <div class="column">
              <div class="content">
                <div class="field">
                  <label class="label">Enter barcode: </label>
                  <div class="control">
                    <input
                      id="barcode-input"
                      class="input barcode"
                      type="number"
                      placeholder="Input barcode here..."
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
                      v-model="isbn13Code"
                    />
                  </div>
                </div>
                <div class="field is-grouped">
                  <div id="barcode-submit" class="control" @click="compute">
                    <button class="button is-link" :disabled="!isValidBarcode">Compute</button>
                  </div>
                  <div id="barcode-clear" class="control" @click="clear">
                    <button class="button is-link is-light" :disabled="isEmpty">Clear</button>
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
