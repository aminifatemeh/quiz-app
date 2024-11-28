<script setup lang="ts">
import { inject } from "vue";
const previewResponse = inject("previewResponse");
const quizData = inject("quizData");
const progressPercentage = computed(() => {
  if (previewResponse.value.questions_count === 0) return 0;
  return Math.min(
    (quizData.value.priority / previewResponse.value.questions_count) * 100,
    100,
  );
});
</script>

<template>
  <div
    class="d-flex flex-sm-row flex-column justify-content-between gap-4 w-100"
  >
    <span class="heading-5 right">{{ previewResponse.title }}</span>
    <div
      class="d-flex align-items-center justify-content-sm-center"
      style="gap: 12px"
    >
      <div class="meta-1 right">
        <span class="question-number">{{ quizData.priority }}</span>
        <span>/</span>
        <span class="question-number_total">{{
          previewResponse.questions_count
        }}</span>
      </div>
      <div
        class="progress"
        role="progressbar"
        aria-label="Basic example"
        :aria-valuenow="progressPercentage"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          class="progress-bar"
          :style="{ width: progressPercentage + '%' }"
        ></div>
      </div>
    </div>
    <hr class="divider d-block d-sm-none" />
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/sass/_colors.scss";
.progress {
  background-color: $grayscale-3;
  width: 100px;
  height: 8px;
  border-radius: 8px;
  .progress-bar {
    height: 8px;
    border-radius: 4px;
    background: linear-gradient(
      90deg,
      $accent-100 0%,
      $warning-100 23.67%,
      $danger-100 49.46%,
      #5636de 74.86%,
      $secondary-1-100 100%
    );
  }
}
</style>
