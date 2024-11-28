<template>
  <div class="content_quiz-text">
    <div class="quiz-text_title heading-5 right">نکات قبل از شرکت در آزمون</div>
    <div class="quiz-text_list subtitle-1 right">
      <ul>
        <li>
          <span class="bullet-rectangle"></span>
          شما باید به تمامی سوال‌ها پاسخ دهید.
        </li>
        <li>
          <span class="bullet-rectangle"></span>
          این آزمون محدودیت زمانی ندارد و هرچقدر که نیاز دارید، زمان خواهید
          داشت.
        </li>
        <li>
          <span class="bullet-rectangle"></span>
          درصورتی که سوالی را اشتباه پاسخ دهید، راهنمایی در اختیار شما قرار
          می‌گیرد تا بتوانید مورد درسی را مرور کنید و مجددا پاسخ صحیح را انتخاب
          نمایید.
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../assets/sass/_colors.scss";
.content_quiz-text {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 36px;
  border-radius: 20px;
  background-color: $grayscale-1;
  .quiz-text_list {
    ul {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 0;
      li {
        .bullet-rectangle {
          width: 10px;
          height: 10px;
          border-radius: 2px;
          background-color: $secondary-1-100;
        }
        list-style: none;
        display: flex;
        align-items: center;
        gap: 16px;
      }
    }
  }
}
</style>
