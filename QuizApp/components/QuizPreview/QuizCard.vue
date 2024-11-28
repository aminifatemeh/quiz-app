<script setup lang="ts">
import { inject } from "vue";

const previewResponse = inject("previewResponse");
const participationQuiz = inject("participationQuiz");
const questionId = inject("questionId");
</script>

<template>
  <div class="content_quiz-card">
    <div class="quiz-card_content">
      <div class="content_text">
        <span class="heading-5 right">{{ previewResponse.title }}</span>
        <div
          class="subtitle-1 right"
          v-html="previewResponse.description"
        ></div>
      </div>
      <div class="content_tags-buttons">
        <div class="content_tags">
          <button class="meta-1 center">
            {{ previewResponse.questions_count }} سوال تستی
          </button>
          <button class="meta-1 center">بدون محدودیت زمانی</button>
          <button class="meta-1 center">قابل تکرار</button>
        </div>
        <div class="content_buttons">
          <NuxtLink
            :to="`/QuestionPage/${questionId}`"
            style="text-decoration: none"
          >
            <button @click="participationQuiz">
              <span class="title-3 center">شروع آزمون</span>
              <Icon name="icons:arrow-left" style="width: 20px; height: 20px" />
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="quiz-card_image">
      <img src="../../assets/images/Vector.png" alt="preview card image" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/sass/_colors.scss";

.content_quiz-card {
  width: 100%;
  padding: 36px;
  display: flex;
  justify-content: space-between;
  gap: 48px;
  border: 2px solid $grayscale-2;
  border-radius: 20px;
  .quiz-card_content {
    display: flex;
    flex-direction: column;
    gap: 28px;
    .content_text {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .content_tags-buttons {
      display: flex;
      flex-direction: column;
      gap: 40px;
      .content_tags {
        display: flex;
        gap: 12px;
        button {
          padding: 8px 10px;
          background-color: $grayscale-2;
          border-radius: 8px;
          border: none;
        }
      }
      .content_buttons {
        button {
          padding: 10px 16px 10px 12px;
          background-color: $accent-100;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 10px;
          border: none;
          transition: 0.5s ease;
          &:hover {
            background-color: $accent-20;
          }
        }
      }
    }
  }
}
//MEDIA QUERIES
// Small devices (landscape phones, 576px and down)
@media (max-width: 576px) {
  .content_quiz-card {
    flex-direction: column;
    padding: 28px;
    .quiz-card_image {
      display: none;
    }
    .content_tags {
      flex-wrap: wrap;
    }
    .content_buttons {
      button {
        width: 100%;
      }
    }
  }
}
</style>
