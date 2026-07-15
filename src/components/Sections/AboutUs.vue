<script setup>

</script>
<template>
    <div  id="about-Us" class="warp">
        <div class="mockup">
            <h1>About</h1>

            <div class="cardone-right">
                <img alt="TaskPlus mockup" src="/src/assets/images/about-logo.svg" class="mockup__image" />
                <span>
                    <b>
                    TaskPlus is a website to manage your Notes & Tasks and order them based on Statuses (Priority, Read, activeness)
                    <br>
                    <br>
                    <br> 
                    <br>
                    This website was created by Katheri Saleh a front-end dev, this website is made with HTML CSS, JS & Vue.js
                    (using localstorage to store the Notes/Tasks)
                    </b>
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    text-align: center;
    color: black;
}

span {
    padding: 15px;
    color: black;
    font-size: 24px;
}
html {
  scroll-behavior: smooth;
}


.mockup {
    margin: 20px;
    min-height: 550px;
    width: 100%;
    max-width: 950px;
    background: white;
    padding: 18px;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

.mockup__image {
    width: 42%;
    height: auto;
    display: block;
    border-radius: 8px;
    padding: 10px;
}

.cardone-right {
    display: flex;
    justify-content: start;
    padding-top: 5%;

}

.warp {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>