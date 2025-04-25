<template>
  <div class="page-container">
    <div class="content">
      <div class="info">
        <p class="info__field">Name:</p>
        <p title="Trần Phú Quý" class="info__value">Trần Phú Quý</p>
      </div>
      <div class="info">
        <p class="info__field">Email:</p>
        <p class="info__value">
          <a
            title="tranphuquypk1997@gmail.com"
            href="`mailto:tranphuquypk1997@gmail.com`"
          >
            tranphuquypk1997@gmail.com
          </a>
        </p>
      </div>
      <div class="info">
        <p class="info__field">Phone:</p>
        <p class="info__value">
          <a title="0349467408" :href="`tel:+84349467408`"> 0349467408 </a>
        </p>
      </div>
      <div class="info">
        <p class="info__field">Address:</p>
        <address title="Thủ Đức district" class="info__value">
          Thủ Đức district
        </address>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.content {
  font-size: 1.2rem;
  .info {
    display: flex;
    gap: 1rem;
    &__field {
      color: $color-light;
      min-width: 5rem;
    }
    &__value {
      color: $color-bold;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
}
</style>
