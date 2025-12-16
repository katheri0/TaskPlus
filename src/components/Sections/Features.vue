<script setup>

</script>
<template>
    <div  id="features" class="warp">
        <div class="mockup">
            <h1>Features</h1>
            <dev class="cardone">
                <img alt="TaskPlus mockup" src="/src/assets/images/img.svg" class="mockup__image" />
            </dev>

        </div>
    </div>
</template>

<style scoped>
h1
{
    text-align: center;
    color: black;
}
.mockup {
    margin: 20px;
    height: 600px;
    width: 950px;
    background: white;
    padding: 18px;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

.mockup__image {
    width: 90%;
    height: auto;
    display: block;
    border-radius: 8px;


}
.cardone
{
    display: flex;
    justify-content: center;
}

.warp {
    display: flex;
    justify-content: center;
}
</style>