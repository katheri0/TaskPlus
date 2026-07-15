<script>
</script>
<template>
  <footer class="footer">
    <div class="footer__container">

      <p class="footer__brand">© 2026 — <span class="footer__highlight">katheri / TaskPlus</span></p>
      <nav class="footer__nav" aria-label="Footer links">
        <a class="footer__link" href="https://github.com/katheri0">GitHub</a>
        <a class="footer__link" href="#">LinkedIn</a>
        <a class="footer__link" href="#">Portfolio</a>
      </nav>
    </div>
  </footer>

</template>

<style scoped>


.footer{
  color: var(--text-dark);
  border-top: 1px solid rgba(0,0,0,0.1);
  padding: 20px 16px;
  box-sizing: border-box;
  -webkit-font-smoothing:antialiased;
}

.footer__container{
  max-width: var(--container-max);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap);
}

.footer__brand{
  margin: 0;
  font-style: italic;
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.2px;
}

.footer__highlight{
  font-style: italic;
}

.footer__nav{
  display: flex;
  gap: 18px;
  align-items: center;
}

.footer__link{
  color: var(--text-dark);
  opacity: 0.85;
  text-decoration: none;
  font-weight: 600;
  font-style: italic;
  font-size: 16px;
  padding: 6px 8px;
  border-radius: 4px;
}

.footer__link:hover,
.footer__link:focus{
  text-decoration: underline;
  opacity: 1;
  outline: none;
}

.footer__link:focus-visible{
  outline: 2px solid var(--text-dark);
  outline-offset: 2px;
}

@media (max-width: 640px){
  .footer__container{
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer__nav{
    margin-top: 8px;
  }
}
</style>
