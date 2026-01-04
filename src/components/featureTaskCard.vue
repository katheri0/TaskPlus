<script setup>

</script>
<template>
        <div class="task">
        <h3>
            <span>Hosting & infrastructure </span>
            <span>
                <span class="Active"><b>Active</b></span>
                <span class="High-priority"><b>High-priority</b></span>
            </span>
        </h3>
        <p>
            Define hosting, domain and infrastructure for the portfolio website.
        </p>

        <span>
            <button class="Delete-btn"><b>Delete</b></button>

            <button class="Edit-btn"><b>Edit</b></button>
            <span class="Interconected-status"><b>Hosting & infrastructure</b></span>

        </span>

        <div class="task-check">
            <input type="checkbox" />
            <label>
                To-Do
            </label>
        </div>
    </div>
</template>

<style scoped>
    .Edit-btn {
    background-color: #D6D5FF;
    color: #2F60C4;
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 14px;
    display: inline-block;
    border: 2px solid #2F60C4;
    cursor: pointer;
}

.Delete-btn {
    background-color: #FFD5D5;
    color: #FF3D3D;
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 14px;
    display: inline-block;
    border: 2px solid #FF3D3D;
    margin: 3px;
    cursor: pointer;
}

.view-btn a {
    background-color: #f7ff8b;
    color: #e0d100;
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 14px;
    display: inline-block;
    border: 2px solid #ccd000;
    cursor: pointer;
    margin: 3px;
    text-decoration: none;
}

.High-priority {
    background-color: #D6D5FF;
    color: #403DFF;
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 14px;
    display: inline-block;
    cursor: pointer;

}

.Interconected-status {
    background-color: #FFD5F2;
    color: #FF3DE5;
    padding: 4px 10px;
    margin-left: 20px;

    border-radius: 10px;
    font-size: 14px;
    display: inline-block;
    cursor: pointer;

}


.Med-priority {
    background-color: #FFF4C8;
    color: #FFC23D;
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 14px;
    display: inline-block;
    cursor: pointer;

}

.Low-priority {
    background-color: #FFD5D5;
    color: #FF3D3D;
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 14px;
    display: inline-block;
    cursor: pointer;
}

.Reading {
    background-color: #d5ffd8;
    color: #3dff4a;
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 14px;
    display: inline-block;
    cursor: pointer;
}

.Active {
    background-color: #d5ffd8;
    color: #3dff4a;
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 14px;
    display: inline-block;
    cursor: pointer;
}

.Inactive {
    background-color: #FFD5D5;
    color: #FF3D3D;
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 14px;
    display: inline-block;
    cursor: pointer;
}

span span {
    padding: 5px;

}

.more {
    cursor: pointer;
    color: rgb(106, 106, 106);
}

.task {
    display: flex;
    flex-direction: column;
    background-color: var(--white-color);
    color: var(--black-color);
    padding: 20px;
    border-radius: 12px;
    position: relative;
    width: 600px;
    height: 170px;
    border: 2px solid black;
}

.task h3 {
    font-size: 20px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    gap: 10px;
}

.task h3>span:first-child {
    overflow: hidden;
    text-overflow: ellipsis;
}

.task h3>span:last-child {
    display: flex;
    gap: 6px;
    white-space: nowrap;
    flex-shrink: 0;
}

.task p {
    margin-top: 24px;
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
}

.task .task-check {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 10px;
    right: 10px;
}

.task .task-check label {
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    margin-left: 5px;
    cursor: pointer;
}

.task .task-check input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    border: 0.77px solid #AEAEB2;
    appearance: none;
    cursor: pointer;
}

.task .task-check input:checked {
    background-color: #0A7AFF;
    border-color: #0A7AFF;
}

.task .task-check input:checked::before {
    content: '';
    display: block;
    width: 4.5px;
    height: 9px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.tasks {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

</style>