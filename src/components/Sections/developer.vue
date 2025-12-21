<script setup>
</script>

<template>
    <div id="developer" class="container">
        <div class="profileCard">

            <h1 class="title">Developer</h1>

            <div class="contentGrid">

                <!-- LEFT SIDE -->
                <div class="skillsColumn">

                    <!-- UX / UI -->
                    <h2 class="sectionTitle">UX/UI Designer</h2>

                    <div class="toolsLayout">
                        <!-- BIG UX ICON -->
                        <div class="uxBox">
                            <img src="/src/assets/images/ux.png" class="uxIcon" alt="UX" />
                        </div>

                        <!-- Figma + XD -->
                        <div class="smallIconsColumn">
                            <div class="smallItem">
                                <img src="/src/assets/images/figma.png" class="smallIcon" alt="Figma" />
                                <span>Figma</span>
                            </div>

                            <div class="smallItem">
                                <img src="/src/assets/images/xd.png" class="smallIcon" alt="XD" />
                                <span>XD</span>
                            </div>
                        </div>
                    </div>

                    <!-- FRONT-END -->
                    <h2 class="sectionTitle">Front-end Developer</h2>

                    <div class="skillsIcons">
                        <img src="/src/assets/images/Vue.js.png" class="skillIcon" alt="Vue" />
                        <span>
                            <img src="/src/assets/images/html.png" class="skillIcon" alt="HTML" />
                            <img src="/src/assets/images/css.png" class="skillIcon" alt="CSS" />
                            <img src="/src/assets/images/js.png" class="skillIcon" alt="JS" />
                        </span>
                    </div>

                </div> <!-- END LEFT COLUMN -->


                <!-- RIGHT SIDE -->
                <div class="previewColumn">
                    <div class="imageFrame">
                        <img src="/src/assets/images/profileHole.png" class="profileImage" alt="Profile" />
                    </div>

                    <p class="profileName">katheri saleh</p>

                    <div class="contactRow">
                        <img class="whatsapp" src="/src/assets/images/whatsapp.svg" alt=""><span
                            class="contactText">778484033</span>
                        <img class="whatsapp" src="/src/assets/images/Github.svg" alt=""> <span
                            class="github">@Katheri0</span>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>


<style scoped>
/* -------- LEFT SIDE (UX / FIGMA / XD) -------- */

.toolsLayout {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
    align-items: start;
}

/* BIG UX BOX */
.uxBox {
    width: 120px;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.uxIcon {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

/* RIGHT SMALL ICONS */
.smallIconsColumn {
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.smallItem {
    display: flex;
    align-items: center;
    gap: 10px;
}

span {
    display: flex;
}

.smallIcon {
    width: 40px;
    height: 40px;
    object-fit: contain;
}

.smallItem span {
    color: black;
    font-size: 16px;
}

/* -------- GENERAL LAYOUT -------- */

.container {
    display: flex;
    justify-content: center;
    padding-top: 20px;
}

.profileCard {
    margin: 20px;
    width: 950px;
    background: white;
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

.title {
    text-align: center;
    margin-bottom: 22px;
    font-size: 32px;
    color: black;
}

.contentGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
}

.skillsColumn {
    padding-left: 20px;
}

.whatsapp {
    width: 8%;
    margin: 1px;
}

.github {
    font-weight: 600;
    width: 8%;
    margin: 1px;
}

.sectionTitle {
    color: black;
    font-size: 25px;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 16px;
    text-align: center;
}

.skillsIcons {
    display: flex;
    gap: 16px;
    margin-top: 12px;
    justify-content: space-evenly;

}

.skillIcon {
    width: 56px;
}

/* RIGHT SIDE */

.previewColumn {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.imageFrame {
    border-radius: 14px;
    width: 360px;
    height: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.profileImage {
    width: 92%;
    border-radius: 50%;
}

.profileName {
    color: black;
    font-size: 22px;
    margin-top: 18px;
    font-weight: 600;
}

span {
    color: black;
}

.contactRow {
    display: flex;
    gap: 10px;
    margin-top: 14px;
    font-size: 16px;
}
</style>
