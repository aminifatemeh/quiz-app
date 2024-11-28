<script setup lang="ts">
import { defineProps, inject, ref, watch } from "vue";
const props = defineProps({
  onSubmit: Function,
});

//injecting quiz data, loading and error states
const isCorrect = inject("isCorrect");
const selectedOptions = inject("selectedOptions");
const buttonText = inject("buttonText");
const handleButtonClick = inject("handleButtonClick");
const loading = inject("loading");
watch(selectedOptions, (newValue) => {
  isCorrect.value = null;
});
</script>

<template>
  <div class="d-flex" style="gap: 20px">
    <button
      class="text_button"
      @click="handleButtonClick"
      :disabled="selectedOptions.length === 0 || isCorrect === false"
      :class="{
        disabled: selectedOptions.length === 0 || isCorrect === false,
      }"
    >
      <span v-if="!loading" class="title-3 center">{{ buttonText }}</span>
      <div v-else class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </button>

    <button v-if="isCorrect === false" class="answers_button">
      <span class="indicator-red"></span>
      <Icon name="icons:x-red" style="width: 20px; height: 20px" />
      <span class="body right"> پاسخ اشتباه</span>
    </button>
    <button v-if="isCorrect === true" class="answers_button">
      <span class="indicator-green"></span>
      <Icon name="icons:tick-green" style="width: 20px; height: 20px" />
      <span class="body right"> پاسخ درست</span>
    </button>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/sass/_colors.scss";
.text_button {
  height: 44px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 10px 12px;
  gap: 8px;
  border-radius: 10px;
  border: none;
  background-color: $secondary-2-100;
  &.disabled {
    background-color: $grayscale-4;
    color: $grayscale-3;
    cursor: not-allowed;
  }

  span {
    color: $grayscale-0;
  }
}
.answers_button {
  height: 44px;
  background-color: transparent;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 10px 12px;
  gap: 8px;
  border-radius: 10px;
  border: 2px solid $grayscale-2;
  .indicator-red {
    position: absolute;
    right: -2px;
    width: 6px;
    height: 24px;
    border-radius: 4px 0 0 4px;
    background-color: $danger-100;
  }
  .indicator-green {
    position: absolute;
    right: -2px;
    width: 6px;
    height: 24px;
    border-radius: 4px 0 0 4px;
    background-color: $success-100;
  }
}

//MEDIA QUERIES

// Small devices (landscape phones, 576px and down)
@media (max-width: 576px) {
  .text_button {
    width: 100%;
  }
}
</style>
