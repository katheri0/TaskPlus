<script setup>

</script>
<template>
    <div class="warp">
        <div class="mockup">
            <h1>developer</h1>

            <dev class="cardone-left">
                <img alt="TaskPlus mockup" src="/src/assets/images/about-logo.svg" class="mockup__image" />
            </dev>
            <span >katheri saleh</span>

        </div>
    </div>
</template>

<style scoped>
h1 {
    text-align: center;
    color: black;
}

span {
    display: flex;
    text-align: end;
    padding: 15px;
    color: black;
    font-size: 24px;
    justify-self: end;
    padding-right: 99px;
}

.mockup {
    height: 550px;
    width: 950px;
    background: white;
    padding: 18px;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

.mockup__image {
    border: 4px solid #C2C2C2;
    width: 42%;
    height: auto;
    display: block;
    border-radius: 8px;
    padding: 10px;
}

.cardone-left {
    display: flex;
    justify-content: end;
    padding-top: 5%;

}

.warp {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>