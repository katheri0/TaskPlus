<template>
    <section class="feature-overview">
        <h1 class="feature-title">Features</h1>
        <h2 class="cen">Easy Fast And Reactive Note/Task Manager</h2>

        <div class="feature-grid">
            <!-- Task Status -->
            <article class="feature-card">
                <div class="status-group">
                    <span class="status-badge status-active">Active</span>
                    <span class="status-badge status-inactive">Inactive</span>
                </div>
                <div class="cen"><img src="/src/assets/images/Arrow-L-down.svg" alt=""></div>

                <p class="feature-description">
                    <strong>Task Status</strong><br />
                    Track task activation
                </p>
            </article>

            <!-- Priority Status -->
            <article class="feature-card">
                <div class="status-group">
                    <span class="status-badge status-high">High priority</span>
                    <span class="status-badge status-medium">Med priority</span>
                    <span class="status-badge status-low">Low priority</span>
                </div>
                <div class="cen"><img src="/src/assets/images/Arrow-down.svg" alt=""></div>

                <p class="feature-description">
                    <strong>Task/Note Priority Status</strong><br />
                    Track notes and tasks by priority
                </p>
            </article>

            <!-- Read Status -->
            <article class="feature-card">
                <div class="status-group">
                    <span class="status-badge status-read">Read</span>
                    <span class="status-badge status-reading">Reading</span>
                    <span class="status-badge status-unread">Unread</span>
                </div>
                <div class="cen"><img src="/src/assets/images/Arrow-down.svg" alt=""></div>

                <p class="feature-description">
                    <strong>Note Read Status</strong><br />
                    Track notes by read state
                </p>
            </article>
        </div>

        <!-- Future Feature -->
        <div class="feat-cen">
            <section class="future-feature">
                <strong class="S-feature">Future Feature</strong><br />
                <span class="status-badge status-interconnected">Interconnected</span>
                <p class="future-description">
                    Notes interconnecting with tasks, 
                    knowing exactly which  note connect to which task 
                </p>
            </section>
        </div>
    </section>
</template>

<style scoped>
/* Layout */
.feature-overview {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    text-align: center;
}

.feature-title {
    text-align: center;
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 2.5rem;
}

/* Grid */
.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
    justify-items: center;
}

/* Card */
.feature-card {
    width: 100%;
    max-width: 320px;
    background-color: #ffffff;
    border-radius: 14px;
    padding: 1.8rem 1.4rem;
    box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.13);
    text-align: center;
}

/* Status grouping */
.status-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
}

/* Badges */
.status-badge {
    padding: 0.45rem 0.9rem;
    border-radius: 10px;
    font-weight: 900;
}

/* Semantic colors */
.status-active {
    background-color: #D5FFD8;
    color: #3DFF4A;
}

.status-inactive {
    background-color: #FFD5D5;
    color: #FF3D3D;
}

.status-high {
    background-color: #D6D5FF;
    color: #403DFF;
}

.status-medium {
    background-color: #fff1c1;
    color: #f5a623;
}

.status-low {
    background-color: #FFD5D5;
    color: #FF3D3D;
}

.status-read {
    background-color: #D5FFD8;
    color: #3DFF4A;
}

.status-reading {
    background-color: #FFE299;
    color: #FF7621;
}

.status-unread {
    background-color: #FFD5D5;
    color: #FF3D3D;
}

/* Text */
.feature-description {
    font-size: 0.95rem;
    line-height: 1.4;
    color: #222;
}
/* Future feature */
.future-feature {
    margin-top: 2rem;
    background-color: #ffffff;
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.13);
    width: 100%;
    max-width: 700px;
}

.status-interconnected {
    background-color: #FFD5F2;
    color: #FF3DE5;
    margin-bottom: 1rem;
    display: inline-block;
    border-radius: 10px;

}

.S-feature {
    font-size: 23px;

}

.future-description {
    margin-top: 0.8rem;
    font-size: 1rem;
}

.cen {
    display: flex;
    justify-content: center;
}

.feat-cen {
    display: flex;
    justify-content: center;
    width: 100%;
}
</style>
