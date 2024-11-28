<script setup lang="ts">
import { defineProps, inject } from "vue";

const previewResponse = inject("previewResponse");

const props = defineProps({
  getPerformanceLabel: {
    type: Function,
  },
  getPerformanceIcon: {
    type: Function,
  },
  totalQuestions: {
    type: Number,
  },
});

const performanceStatus = computed(() => {
  const result = previewResponse.value.examinees[0];
  return props.getPerformanceLabel(result);
});
</script>

<template>
  <div class="quiz-information-card">
    <div class="information-card_content">
      <div class="d-flex flex-column" style="gap: 24px">
        <span class="heading-5 right">{{ previewResponse.title }}</span>
        <div class="d-flex align-items-center" style="gap: 12px">
          <img
            :src="getPerformanceIcon(previewResponse.examinees[0])"
            alt=""
            style="width: 32px; height: 32px"
          />
          <span class="title-1 right"
            >عملکرد شما
            {{ getPerformanceLabel(previewResponse.examinees[0]) }} بود</span
          >
        </div>
        <span class="meta-3 right"
          >جزو شرکت‌کنندگان با عملکرد
          {{ getPerformanceLabel(previewResponse.examinees[0]) }} هستید.</span
        >
      </div>
      <div class="d-flex flex-column" style="gap: 40px">
        <div class="d-flex gap-3 answers-button">
          <button>
            <span class="indicator-green"></span>
            <Icon name="icons:tick-green" style="width: 20px; height: 20px" />
            <span class="body right"
              >{{ previewResponse.examinees[0].correct }} پاسخ درست</span
            >
          </button>
          <button>
            <span class="indicator-red"></span>
            <Icon name="icons:x-red" style="width: 20px; height: 20px" />
            <span class="body right"
              >{{ previewResponse.examinees[0].wrong }} پاسخ اشتباه</span
            >
          </button>
        </div>
        <div class="d-flex justify-content-start w-100">
          <NuxtLink to="/" style="text-decoration: none">
            <button
              :class="{
                'tryagain-button': performanceStatus === 'عالی',
                'tryagain-button-primary':
                  performanceStatus === 'ضعیف' || performanceStatus === 'متوسط',
              }"
            >
              <Icon
                name="icons:rotate-right"
                style="width: 20px; height: 20px"
              />
              <span class="title-3 center">تلاش مجدد</span>
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="information-card_image">
      <img src="../../assets/images/Vector.png" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/sass/_colors.scss";
.quiz-information-card {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 48px;
  padding: 36px;
  border-radius: 20px;
  border: 2px solid $grayscale-2;
  .information-card_content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 28px;
    .answers-button {
      button {
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
      }
      .indicator-green {
        position: absolute;
        right: -2px;
        width: 6px;
        height: 24px;
        border-radius: 4px 0 0 4px;
        background-color: $success-100;
      }
      .indicator-red {
        position: absolute;
        right: -2px;
        width: 6px;
        height: 24px;
        border-radius: 4px 0 0 4px;
        background-color: $danger-100;
      }
    }
    .tryagain-button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border-radius: 10px;
      border: 1px solid $secondary-2-100;
      color: $secondary-2-100;
      background-color: transparent;
      padding: 10px 12px 10px 16px;
    }

    .tryagain-button-primary {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      border-radius: 10px;
      border: none;
      background-color: $accent-100;
      color: $secondary-2-100;
      padding: 10px 12px 10px 16px;
    }
  }
}
//MEDIA QUERIES

// Small devices (landscape phones, 768px and down)
@media (max-width: 768px) {
  .quiz-information-card {
    display: flex;
    justify-content: center;
  }
  .answers-button {
    button {
      text-wrap: nowrap;
    }
  }
  .try-again_button {
    width: 100%;
  }
  .information-card_image {
    display: none;
  }
}
</style>
