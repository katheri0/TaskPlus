<script setup>
    
</script>


<template>
    <div class="custom-bg text-dark">
    <div class="d-flex align-items-center justify-content-center min-vh-100 px-2">
        <div class="text-center">
            <i class="pi pi-exclamation-triangle text-warning fs-1 mb-5"></i>
            <h1 class="display-1 fw-bold">404</h1>
            <p class="fs-2 fw-medium mt-4">عفواً! لم يتم العثور على الصفحة</p>
            <p class="mt-4 mb-5">الصفحة التي تبحث عنها غير موجودة أو تم نقلها.</p>
            <a href="/" class="btn btn-light fw-semibold rounded-pill px-4 py-2 custom-btn">
                العودة الى الصفحة الرئيسية
            </a>
        </div>
    </div>
</div>
</template>

<style scoped>
.custom-bg {
    background: linear-gradient(to right, #e2e8f0, #e5e7eb);
}

.custom-btn:hover {
    background-color: #f3e8ff !important;
    transition: background-color 0.3s ease-in-out;
}

@media (prefers-color-scheme: dark) {
    .custom-bg {
        background: linear-gradient(to right, #1f2937, #111827);
        color: white !important;
    }

    .custom-btn {
        background-color: #374151 !important;
        color: white !important;
    }

    .custom-btn:hover {
        background-color: #4b5563 !important;
    }
}
</style>