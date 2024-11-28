<script setup lang="ts">
import { inject } from "vue";
import QuizInformationCard from "~/components/QuizResults/QuizInformationCard.vue";
import QuizTableCard from "~/components/QuizResults/QuizTableCard.vue";
const previewResponse = inject("previewResponse");
const totalQuestions = previewResponse.value.questions_count;

definePageMeta({
  layout: "default",
});

const getPerformanceLabel = (result) => {
  const percentage = (result.correct / totalQuestions) * 100;
  if (percentage >= 80) return "عالی";
  else if (percentage <= 50) return "ضعیف";
  else return "متوسط";
};

const getPerformanceIcon = (result) => {
  const percentage = (result.correct / totalQuestions) * 100;
  if (percentage >= 80) return `../assets/icons/emoji-happy-sm.svg`;
  else if (percentage <= 50) return `../assets/icons/emoji-sad.svg`;
  else return `../assets/icons/emoji-poker.svg`;
};
</script>

<template>
  <section class="quiz-results_section">
    <div class="quiz-results_container">
      <QuizInformationCard
        :totalQuestions="totalQuestions"
        :getPerformanceLabel="getPerformanceLabel"
        :getPerformanceIcon="getPerformanceIcon"
      />
      <QuizTableCard
        :totalQuestions="totalQuestions"
        :getPerformanceLabel="getPerformanceLabel"
        :getPerformanceIcon="getPerformanceIcon"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.quiz-results_section {
  padding: 100px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  .quiz-results_container {
    width: 944px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
}
</style>
