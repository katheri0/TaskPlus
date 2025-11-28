<script setup>
import ModulCloseBtn from './ModulCloseBtn.vue';
</script>
<template>
    <div class="modal-wrapper" tabindex="-1">
        <div class="inner">

            <ModulCloseBtn @click="$emit('closePopup')" />
            <slot></slot>

        </div>
    </div>
</template>

<style scoped lang="scss">
.modal-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 500;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    display: grid;
    place-items: center;
    color: #000;
}

.modal-wrapper .inner {
    background-color: white;
    padding: 30px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 600px;
    width: 90%;
}

.modal-wrapper .inner h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 21px;
    margin-bottom: 20px;
}

.modal-wrapper .inner .close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    background-color: #fff;
}

.modal-wrapper .inner .form {
    display: flex;
    flex-direction: column;
    max-width: 100%;
}

.modal-wrapper .inner .form label {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
}

.modal-wrapper .inner .form input,
.modal-wrapper .inner .form select,
.modal-wrapper .inner .form textarea {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    border: 1px solid #C2C2C2;
    border-radius: 4px;
    padding: 8px 12px;
    margin-top: 5px;
}

.modal-wrapper .inner .form input::placeholder,
.modal-wrapper .inner .form select::placeholder,
.modal-wrapper .inner .form textarea::placeholder {
    color: #A6A6A6;
}

.modal-wrapper .inner .form .btn {
    width: fit-content;
    padding-inline: 23px;
}
</style>