<script setup lang="ts">
import { inject, ref, defineProps } from "vue";
import { formatDate } from "compatx";
const previewResponse = inject("previewResponse");

const totalQuestions = previewResponse.value.questions_count;
const excellentCount = ref(0);
const cupBackgroundColor = ref(null);

const cupIcon = ref(null);

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
const getPerformanceClass = (result) => {
  const percentage = (result.correct / totalQuestions) * 100;
  if (percentage >= 80) return "excellent";
  else if (percentage <= 50) return "weak";
  else return "average";
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("fa-IR");
};

const calculatePerformance = () => {
  excellentCount.value = previewResponse.value.examinees.filter(
    (result) => getPerformanceClass(result) === "excellent",
  ).length;
  const percentage =
    (excellentCount.value / previewResponse.value.examinee.try) * 100;
  if (percentage >= 80) {
    cupBackgroundColor.value =
      "linear-gradient(135deg, #fcbf17 0%, #fca018 23.67%, #f34158 49.46%, #5636de 74.86%, #24099a 100%)";
    cupIcon.value = "_nuxt/assets/icons/cup.svg";
    return "عالی";
  } else if (percentage <= 50) {
    cupBackgroundColor.value = "#E6E6E6";
    cupIcon.value = "_nuxt/assets/icons/cup-black.svg";
    return "ضعیف";
  } else {
    cupBackgroundColor.value = "#E6E6E6";
    cupIcon.value = "_nuxt/assets/icons/cup-black.svg";
    return "متوسط";
  }
};
</script>

<template>
  <div class="quiz-table_card">
    <span class="heading-5 right">تاریخچه نتایج</span>
    <div class="d-flex" style="gap: 20px">
      <div
        class="cup-icon_background"
        :style="{ background: cupBackgroundColor }"
      >
        <img :src="cupIcon" alt="cup icon" style="width: 44px; height: 44px" />
      </div>
      <div class="d-flex flex-column" style="gap: 12px">
        <span class="title-1 right"
          >میانگین عملکرد شما {{ calculatePerformance() }} است!</span
        >
        <span class="body-2 right"
          >{{ previewResponse.examinee.try }} بار در این آزمون شرکت
          کرده‌اید.</span
        >
      </div>
    </div>
    <hr />
    <div class="table-responsive">
      <table class="table title-3 center">
        <thead>
          <tr>
            <th scope="col">عملکرد شما</th>
            <th scope="col">
              <Icon name="icons:tick-black" style="width: 20px; height: 20px" />
              پاسخ درست
            </th>
            <th scope="col">
              <Icon name="icons:x-black" style="width: 20px; height: 20px" />
              پاسخ اشتباه
            </th>
            <th scope="col">تاریخ</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="result in previewResponse.examinees.slice(0, 10)"
            :key="result.try"
          >
            <th :class="getPerformanceClass(result)" scope="row">
              <img :src="getPerformanceIcon(result)" alt="" />
              {{ getPerformanceLabel(result) }}
            </th>
            <td>{{ result.correct }}</td>
            <td>{{ result.wrong }}</td>
            <td>{{ formatDate(result.started_at) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/sass/_colors.scss";
.quiz-table_card {
  border: 2px solid $grayscale-2;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 36px;
  .cup-icon_background {
    padding: 11px;
    border-radius: 16px;
  }
  .table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 12px;
    thead,
    tbody {
      th,
      td {
        height: 44px;
        padding: 10px 12px;
        border-radius: 10px;
        background-color: $grayscale-2;
        color: $secondary-2-100;
        white-space: nowrap;
      }
    }
    tbody {
      .excellent {
        background-color: $success-10;
        color: $success-100;
      }
      .average {
        background-color: $warning-10;
        color: $warning-100;
      }
      .weak {
        background-color: $danger-10;
        color: $danger-100;
      }
    }
  }
}
</style>
