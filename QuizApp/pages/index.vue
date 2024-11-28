<script setup lang="ts">
import QuizCard from "~/components/QuizPreview/QuizCard.vue";
import QuizTextInfo from "~/components/QuizPreview/QuizTextInfo.vue";

definePageMeta({
  layout: "default",
});
</script>

<template>
  <section class="quiz-preview_section">
    <div class="quiz-preview_content">
      <QuizCard />
      <QuizTextInfo />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../assets/sass/_colors.scss";
.quiz-preview_section {
  width: 100%;
  padding: 100px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  .quiz-preview_content {
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: 944px;
  }
}
</style>
