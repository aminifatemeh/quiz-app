<script setup>
defineProps(["error"]);
const handleClearError = () => clearError({ redirect: "/" });
</script>

<template>
  <NuxtLayout>
    <section class="error-page_section">
      <img src="assets/images/error-404.png" alt="" />
      <p class="heading-5 center">
        متاسفیم! گویا صفحه‌ای که دنبالش هستید دیگر وجود ندارد.
      </p>
      <p class="title-3 center">متن ارور: {{ error.message }}</p>
      <button class="error_button title-3 center" @click="handleClearError">
        بازگشت به صفحه اصلی
      </button>
    </section>
  </NuxtLayout>
</template>

<style scoped lang="scss">
@import "assets/sass/_colors.scss";
.error-page_section {
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  .error_button {
    padding: 10px;
    background-color: $accent-100;
    color: $secondary-2-100;
    border: none;
    border-radius: 10px;
    &:hover {
      background-color: $accent-20;
    }
  }
}
</style>
