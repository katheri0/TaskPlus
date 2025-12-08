<!-- src/views/HeaderView.vue -->
<template>
  <header class="header">
    <div class="header__inner">
      <nav class="header__nav" aria-label="Main navigation">
        <ul class="nav__list">
          <li class="nav__item"><a class="nav__link" href="/">Home</a></li>
          <dev class="in-B">
          <li class="nav__item"><a class="nav__link" href="/features">Features</a></li>
          <li class="nav__item"><a class="nav__link" href="/about">About Us</a></li>
          <li class="nav__item"><a class="nav__link" href="/developer">Developer</a></li>
          </dev>
        </ul>
      </nav>
      <div class="header__brand">
        <img src="/src/assets/images/logo.svg" alt="TaskPlus logo" class="header__logo" />
      </div>

    </div>
  </header>
</template>

<script setup>
// Composition API not required for header state right now.
// Kept as script setup for consistency.
</script>

<style scoped>
:root {
  --bg: #b9d3f6;
  --accent: #587fb8;
  --card: #fff;
  --muted: #333;
}

/* Header */
.header {
  background: transparent;
  padding: 18px 24px;
}

.header__inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.header__logo {
  scale: 2;
  width: 56px;
  height: 56px;
  object-fit: contain;
  border-radius: 999px;
  background: var(--card);
  padding: 6px;
}

.nav__list {
  display: flex;
  gap: 105px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.in-B
{
  display: flex;
  gap: 90px;
}
.nav__link {
  display: inline-block;
  padding: 8px 14px;
  border-radius: 8px;
  text-decoration: none;
  color: #fff;
  background: #375E9D;
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.06);
  font-weight: 600;
  font-size: 14px;
}

/* Responsive */
@media (max-width: 720px) {
  .header__inner {
    flex-direction: row;
    gap: 12px;
  }

  .nav__list {
    gap: 10px;
    overflow: auto;
  }
}
</style>
