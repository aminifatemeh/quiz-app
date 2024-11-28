<script setup lang="ts">
import QuestionHeader from "~/components/QuestionPage/QuestionHeader.vue";
import QuestionCheckbox from "~/components/QuestionPage/QuestionCheckbox.vue";
import QuestionButtons from "~/components/QuestionPage/QuestionButtons.vue";
import { inject } from "vue";
definePageMeta({
  layout: "default",
});

const submitAnswer = inject("submitAnswer");
</script>

<template>
  <section class="question-page_section">
    <div class="question-page_container">
      <div class="question-page_content">
        <div class="d-flex flex-column gap-4">
          <QuestionHeader />
          <QuestionCheckbox />
        </div>
        <QuestionButtons :on-submit="submitAnswer" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "../../assets/sass/_colors.scss";
.question-page_section {
  padding: 100px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  .question-page_container {
    width: 944px;
    padding: 36px;
    border: 2px solid $grayscale-2;
    border-radius: 20px;
    .question-page_content {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
  }
}
</style>
