<script setup>
import featurecomponent from '../featureComponent.vue';
</script>
<template>
    <div id="features" class="warp">
        <div class="mockup">
            <featurecomponent />
        </div>
    </div>
</template>

<style scoped>
h1 {
    text-align: center;
    color: black;
}

.mockup {
    margin: 20px;
    height: 675px;
    width: 950px;
    background: white;
    padding: 18px;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

.warp {
    display: flex;
    justify-content: center;
}
</style>