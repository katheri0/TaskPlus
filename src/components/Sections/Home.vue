<script setup>
import TaskCard from '../TaskCard.vue';
import NoteCard from '../NoteCard.vue';
</script>

<template>
  <section class="home">
    <div class="home__container">
      <aside class="home__left">
        <h1 class="home__title">
          Level Up<br />
          <span class="home__with">With</span><br />
          <span class="home__brand">TaskPlus</span>
        </h1>

        <p class="home__subtitle">Task/Note Manager</p>

        <p class="home__note">No Signup / Login — straight to work</p>

        <RouterLink to="/forward" class="btn btn--primary" rel="nofollow">Try It Now </RouterLink>
      </aside>

      <figure class="home__right">
        <section class="hero">
          <!-- Top -->
          <div class="hero-row hero-row-top">
            <NoteCard class="hero-card" />

            <div class="hero-text hero-text-right">
              make<br />
              a Note
            </div>
          </div>

          <!-- Arrow -->
          <img class="hero-arrow" src="/src/assets/images/Arrow 1.svg" alt="">

          <!-- Bottom -->
          <div class="hero-row hero-row-bottom">
            <div class="hero-text hero-text-left">
              make a<br />
              Task for it
            </div>

            <TaskCard class="hero-card hero-card-task" />
          </div>
        </section>
      </figure>

    </div>
  </section>
</template>

<style scoped>


:root {
  --bg: #b9d3f6;
  --accent: #2f5fa0;
  --card: #fff;
  --muted: #222;
}

.home {
  background: var(--bg);
  justify-content: center;
    display: flex;
}

html {
  scroll-behavior: smooth;
}


.home__container {
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 520px;
  gap: 28px;
  align-items: center;
  padding: 10px;
}

.home__title {
  font-size: 46px;
  line-height: 1.02;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 12px;
  mix-blend-mode: normal;
  text-shadow: 0 1px rgba(0, 0, 0, 0.02);
}

.home__with {
  font-weight: 500;
  display: block;
  font-size: 36px;
  color: #fff;
}

.home__brand {
  display: inline-block;
  font-weight: 800;
  font-size: 48px;
  color: var(--card);
  padding: 6px 10px;
  border-radius: 6px;
  margin-top: 6px;
}

.home__subtitle {
  color: rgba(255, 255, 255, 0.95);
  font-weight: 600;
  margin: 12px 0;
  font-size: 42px;
}

.home__note {
  margin: 18px 0;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
}

/* CTA */
.btn {
  display: inline-block;
  padding: 10px 18px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 700;
}

.btn--primary {
  background: var(--accent);
  color: #fff;
  box-shadow: 0 6px 0 rgba(0, 0, 0, 0.08);
}

/* Right: mockup */
.mockup {
  height: 470px;
  width: 650px;
  background: white;
  padding: 18px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

.mockup__image {
  scale: 1.4;
  width: 70%;
  height: auto;
  display: block;
  border-radius: 8px;
}

/* Responsive */
@media (max-width: 980px) {
  .home__container {
    grid-template-columns: 1fr;
    padding: 0 18px;
  }

  .home__title {
    font-size: 36px;
  }

  .home__brand {
    font-size: 36px;
  }

  .mockup {
    order: -1;
    justify-content: center;
  }
}

/* HERO FIX */
.hero {
  padding: 15px;
  border-radius: 32px;
  background-color: var(--white-color);
  max-width: 720px;
  width: 1000px;
}

/* Rows */
.hero-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Card constraints */
.hero-card {
  max-width: 542px;
  transform: scale(0.95);
  transform-origin: left center;
}

.hero-card-task {
  transform-origin: right center;
}

/* Text */
.hero-text {
  font-size: 40px;
  font-weight: 700;
  line-height: 1.1;
  white-space: nowrap;
}

.hero-text-right {
  margin-left: 24px;
}

.hero-text-left {
  margin-right: 24px;
}

/* Arrow */
.hero-arrow {
  display: block;
  margin-left: 166px;
  width: 260px;
  height: 120px;
}
</style>