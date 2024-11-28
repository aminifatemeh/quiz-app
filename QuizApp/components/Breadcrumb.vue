<template>
  <nav class="breadcrumb-container" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item subtitle-1 right" aria-current="page">خانه</li>
      <Icon
        class="mx-2"
        name="icons:arrow-left"
        style="width: 20px; height: 28px"
      />
      <li class="breadcrumb-item subtitle-1 right">
        <a href="#">دوره های آموزشی</a>
      </li>
      <Icon
        class="mx-2"
        name="icons:arrow-left"
        style="width: 20px; height: 28px"
      />
      <li class="breadcrumb-item subtitle-1 right">
        <a href="#">آموزش کاربردی داکر</a>
      </li>
      <Icon
        class="mx-2"
        name="icons:arrow-left"
        style="width: 20px; height: 28px"
      />
      <li class="breadcrumb-item title-4 right last-item">
        <a href="#">آزمون فصل دوم</a>
      </li>
    </ol>
  </nav>
</template>

<style lang="scss" scoped>
@import "../assets/sass/_colors.scss";

.breadcrumb-container {
  display: flex;
  align-items: center;
  padding: 0;

  .breadcrumb {
    height: 28px;

    .breadcrumb-item {
      a {
        text-decoration: none;
        color: $secondary-2-100;
      }
    }
    .last-item {
      a {
        color: $grayscale-5;
      }
    }
  }
}

//MEDIA QUERIES
// Small devices (landscape phones, 576px and down)
@media (max-width: 576px) {
  .breadcrumb-container {
    margin: 20px 16px 0 16px;
  }
}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .breadcrumb-container {
    margin: 20px 40px;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .breadcrumb-container {
    margin: 20px 40px;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
  .breadcrumb-container {
    margin: 40px 80px;
  }
}
</style>
