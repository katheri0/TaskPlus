<script setup>
</script>

<template>
    <div class="not-found">
        <div class="container not-found__content">
            <i class="pi pi-exclamation-triangle not-found__icon"></i>

            <h1 class="not-found__code">404</h1>

            <p class="not-found__title">
                عفواً! لم يتم العثور على الصفحة
            </p>

            <p class="not-found__description">
                الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
            </p>

            <a href="/" class="btn primary not-found__action">
                العودة الى الصفحة الرئيسية
            </a>
        </div>
    </div>
</template>

<style scoped>
.not-found {
    min-height: 94vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color);
    color: var(--white-color);
}

.not-found__content {
    text-align: center;
}

.not-found__icon {
    font-size: 3rem;
    color: var(--secondary-color);
    margin-bottom: 1.5rem;
}

.not-found__code {
    font-size: 6rem;
    font-weight: 700;
    line-height: 1;
}

.not-found__title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1rem;
}

.not-found__description {
    margin-top: 0.75rem;
    margin-bottom: 2rem;
    color: var(--gray-color);
}

.not-found__action {
    padding-inline: 1.25rem;
}

/* Dark mode alignment */

.not-found {
    background-color: #799eda;
    color: var(--white-color);
    border-radius: 24px;
}

.not-found__description {
    color: var(--gray-color);
}
</style>
