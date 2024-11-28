<script setup lang="ts">
import { inject } from "vue";

//injecting quiz data, loading and error states
const quizData = inject("quizData");
const isCorrect = inject("isCorrect");
const selectedOptions = inject("selectedOptions");
const quizLoading = inject("quizLoading");

const selectOption = (optionId) => {
  selectedOptions.value = [optionId];
};
</script>

<template>
  <div v-if="quizLoading" class="spinner-border text-secondary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div v-else-if="quizData">
    <div class="title-4 right mb-3" v-html="quizData.query"></div>
    <div class="text_checkbox">
      <div
        class="form-check form-check-reverse d-flex align-items-center gap-2"
        v-for="option in quizData.options"
        :key="option.id"
      >
        <input
          class="form-check-input d-block"
          :class="{ correct: selectedOptions[0] === option.id && isCorrect }"
          :type="quizData.multiple_choice ? 'checkbox' : 'radio'"
          :value="option.id"
          :id="option.id"
          @change="selectOption(option.id)"
          :checked="selectedOptions[0] === option.id"
        />

        <label
          class="form-check-label subtitle-1 right"
          :class="{ labelcorrect: isCorrect }"
          :for="option.id"
          v-html="option.option"
        >
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/sass/_colors.scss";

.text_checkbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  color: $secondary-2-100;
}
.correct {
  background-color: $success-100;
  border: 1px solid $success-100;
}
</style>
