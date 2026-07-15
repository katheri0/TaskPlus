<template>
  <header class="header">
    <div class="header__inner">
      <nav class="header__nav" aria-label="Main navigation">
        <ul class="nav__list">
          <li class="nav__item"><a class="nav__link" href="#Home">Home</a></li>
          <li class="nav__item"><a class="nav__link" href="#features">Features</a></li>
          <li class="nav__item"><a class="nav__link" href="#about-Us">About</a></li>
          <li class="nav__item"><a class="nav__link" href="#developer">Developer</a></li>
        </ul>
      </nav>
      <div class="header__brand">
        <a href="#Home"><img src="/src/assets/images/logo.svg" alt="TaskPlus logo" class="header__logo" /></a>
      </div>

    </div>
  </header>
</template>

<script setup>

</script>

<style scoped>


/* Header */
.header {
  background: transparent;
  padding: 18px 24px;
}

.header__inner {
  max-width: var(--container-max);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.header__logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 999px;
  background: var(--white-color);
  padding: 8px;
  display: block;
  transition: transform 0.2s ease;
}

.header__logo:hover {
  transform: scale(1.05);
}

.nav__list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav__link {
  display: inline-block;
  padding: 8px 24px;
  border-radius: 8px;
  text-decoration: none;
  color: var(--white-color);
  background: var(--accent-color);
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.06);
  font-weight: 600;
  font-size: 14px;
  transition: opacity 0.2s ease, outline 0.2s ease;
}

.nav__link:hover {
  opacity: 0.9;
}

.nav__link:focus-visible {
  outline: 3px solid var(--text-dark);
  outline-offset: 2px;
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
