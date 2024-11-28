<script setup>
import { ref, provide } from "vue";
import { useRouter } from "vue-router";
import { useFetch } from "#app";

//constants for API calls
const API_BASE_URL = "https://api.sokanacademy.com/api/quizzes";
const commonParams = {
  entity_type: "section",
  entity_slug: "آزمون-بخش-داکر-بازی-3539",
};

const commonHeaders = {
  Authorization:
    "Bearer 57925|vK5JXxnZi7Q6P3FaDPKetO3pC4Bej98lLclh8JQqabfaef7d",
};

//reactive state
const quizData = ref({});
const loading = ref(false);
const quizLoading = ref(false);
const error = ref("");
const submitResponse = ref(null);
const previewResponse = ref(null);
const quizResults = ref([]);
const participationResponse = ref(null);
const selectedOptions = ref([]);
const isCorrect = ref(Boolean);
const buttonText = ref("بررسی پاسخ");
const router = useRouter();

const previewQuizData = async () => {
  const { data: preview } = await useFetch(API_BASE_URL, {
    params: commonParams,
    headers: commonHeaders,
  });
  previewResponse.value = preview.value.data;
};

await previewQuizData();
const questionId = ref(previewResponse.value.first_question.id);

const fetchQuizData = async () => {
  quizLoading.value = true;
  try {
    const { data: response } = await useFetch(
      `${API_BASE_URL}/2/questions/${questionId.value}`,
      {
        params: commonParams,
        headers: commonHeaders,
      },
    );
    quizData.value = response.value.data;
  } catch (error) {
    console.error(error);
  } finally {
    quizLoading.value = false; // Set loading to false after fetching
  }
};

const participationQuiz = async () => {
  try {
    const { data: participation } = await useFetch(
      `${API_BASE_URL}/2/participation`,
      {
        method: "POST",
        params: commonParams,
        headers: commonHeaders,
      },
    );
    participationResponse.value = participation.value;
  } catch (error) {
    console.error("error fetching quiz data", error);
  }
};

//submit answer
const submitAnswer = async () => {
  loading.value = true;
  try {
    const { data: quizAnswer, error: postError } = await useFetch(
      `${API_BASE_URL}/2/questions/${questionId.value}/answers`,
      {
        method: "POST",
        params: commonParams,
        headers: {
          ...commonHeaders,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          answer: selectedOptions.value,
        }),
      },
    );

    submitResponse.value = quizAnswer.value;
    handleResponse(quizAnswer.value);
  } catch (err) {
    console.error(err, "error");
  } finally {
    loading.value = false;
  }
};

//response handling logic
const handleResponse = (data) => {
  isCorrect.value = data.data.correct;
  if (data.data.finished) {
    if (!isCorrect.value) {
      buttonText.value = "بررسی پاسخ";
    } else {
      buttonText.value = "پایان آزمون";
    }
  } else if (isCorrect.value) {
    buttonText.value = "سوال بعدی";
  } else {
    buttonText.value = "بررسی پاسخ";
  }
};

//button click handler
const handleButtonClick = async () => {
  if (buttonText.value === "پایان آزمون") {
    router.push("/ResultsPage");
  } else if (isCorrect.value && !submitResponse.value.data.finished) {
    isCorrect.value = null;
    questionId.value = submitResponse.value.data.next.id;
    await fetchQuizData();
    router.push(`/QuestionPage/${questionId.value}`);
    buttonText.value = "بررسی پاسخ";
  } else {
    await submitAnswer();
  }
};

//initial data fetching
const initializeData = async () => {
  await fetchQuizData();
};

await initializeData();

//provide quiz data across the app using provide/inject
provide("quizData", quizData);
provide("loading", loading);
provide("quizLoading", quizLoading);
provide("error", error);
provide("submitResponse", submitResponse);
provide("questionId", questionId);
provide("isCorrect", isCorrect);
provide("submitAnswer", submitAnswer);
provide("participationQuiz", participationQuiz);
provide("previewQuizData", previewQuizData);
provide("quizResults", quizResults);
provide("selectedOptions", selectedOptions);
provide("previewResponse", previewResponse);
provide("buttonText", buttonText);
provide("handleButtonClick", handleButtonClick);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped></style>
