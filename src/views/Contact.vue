<template>
  <div class="page-container">
    <div class="contact">
      <div class="contact__container">
        <div class="contact__info">
          <h2 class="contact__title">Get in Touch</h2>
          <p class="contact__text">Please let me now if any, Thanks!</p>
          <ul class="contact__details">
            <li><strong>Email:</strong> tranphuquypk1997@gmail.com</li>
            <li><strong>Phone:</strong> 0349467408</li>
            <li><strong>Address:</strong> Thu Duc district</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.contact {
  padding: 3rem 1rem;

  &__container {
    max-width: 1000px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    background: #fff;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > * {
      margin-bottom: 1rem;
    }
  }

  &__title {
    font-size: 1.75rem;
    color: #111827;
    font-weight: 600;
  }

  &__text {
    color: #6b7280;
    font-size: 1rem;
  }

  &__details {
    list-style: none;
    padding: 0;
    font-size: 0.95rem;
    color: #4b5563;

    li {
      margin-bottom: 0.5rem;

      strong {
        color: #111827;
      }
    }
  }
}
</style>
