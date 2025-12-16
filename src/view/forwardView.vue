<script>

</script>

<template>
    <link href="https://fonts.cdnfonts.com/css/rage-italic" rel="stylesheet">

    <div id="features">
        <h1>Welcome To Task/Note Manager</h1>
        <div class="warp">
            <div class="mockup ">
                <div class="note-side">
                    <p class="noteFont">N+</p>
                    <a class="note-btn" href="/notes">
                        <b>Go To Notes</b>
                    </a>
                </div>
                <hr class="vertical-rule">
                <div class="task-side">
                    <p class="taskFont">T+</p>
                    <a class="task-btn" href="/tasks">
                        <b>Go To Tasks</b>
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.task-btn {
    background-color: #D6D5FF;
    color: #3874D4;
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 14px;
    display: inline-block;
    border: 2px solid #2F60C4;
    cursor: pointer;
    text-align: center;
    text-decoration: none;

}

.note-btn {
    background-color: #FFE45E;
    color: #FF6392;
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 14px;
    display: inline-block;
    border: 2px solid #D3BD53;
    margin: 3px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;

}

p {
    font-family: 'Rage Italic', cursive;
    color: black;
    font-size: 120px;
}

.noteFont {
    color: #FFE45E;
}

.taskFont {
    color: #5689DA;

}

.task-side {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
}

.note-side {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
}


h1 {
    text-align: center;
    color: white;
    padding-bottom: 100px;
    padding-top: 67px;

}

.mockup {
    margin: 20px;
    height: 350px;
    width: 525px;
    background: white;
    padding: 18px;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.vertical-rule {
    width: 3px;
    height: 100%;
    margin: 0 1rem;
    border: none;
    background-color: #000000;
}


.cardone {
    display: flex;
    justify-content: center;
}

.warp {
    display: flex;
    justify-content: center;
    flex-direction: row;
}
</style>