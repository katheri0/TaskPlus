<script setup>

</script>

<template>
    <div class="cont">
    <div class="note-card">
        <h3>
            <span>
                Hosting & infrastructure
            </span>

            <span>
                <span class=" Reading">
                    <b>Reading</b>
                </span>

                <span class="High-priority">
                    <b>High-priority</b>
                </span>
            </span>
        </h3>
        <p>
            Designing websites with Figma allows you to design attractive and interactive interfaces with ease. Figma is
            a free online platform, providing ready-made design templates and tools that help design prototypes and
            final website design. You can use Fijma to create a variety of designs that suit your needs, whether it's
            for a personal or business website......
        </p>

        <span>
            <button class="Delete-btn">
                <b>Delete</b>
            </button>

            <button class="Edit-btn">
                <b>Edit</b>
            </button>
            <b class="view-btn">
                <a>View</a>
            </b>
        </span>
    </div>
    </div>
</template>
<style scoped>
.cont
{
    display: flex;
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

.Reading {
    background-color: #FFE299;
    color: #FF7621;
    padding: 4px 10px;
    border-radius: 10px;
    font-size: 14px;
    display: inline-block;
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

.note-card {
    display: flex;
    flex-direction: column;
    background-color: var(--white-color);
    color: var(--black-color);
    padding: 20px;
    border-radius: 24px;
    position: relative;
    width: 81%;
    min-height: 185px;
    border: 1.5px solid black;


}

.note-card h3 {
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

.note-card h3>span:first-child {
    overflow: hidden;
    text-overflow: ellipsis;
}

.note-card h3>span:last-child {
    display: flex;
    gap: 6px;
    white-space: nowrap;
    flex-shrink: 0;
}

.note-card p {
    margin-top: 24px;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 7px;
}
</style>