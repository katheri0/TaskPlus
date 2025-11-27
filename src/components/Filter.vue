<script setup>
const props =defineProps(['filterBY'])

</script>

<template>
    <div class="filters">
        <div>
            <p>Filter by state</p>
            <div class="badges">
                <div 
                 @click="$emit('setFilter', 'To-Do')"
                class="badge" :class="{selected: filterBY === 'To-Do'}">
                    To-Do
                </div>
                <div
                 @click="$emit('setFilter', 'Done')"
                 class="badge" :class="{selected: filterBY === 'Done'}">
                    Done
                </div>
                <span
                 @click="$emit('setFilter', '')"
                 v-if="filterBY" class="clear">
                    x clear
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.filters {
    display: flex;
    flex-direction: column;
    margin: 40px 0;
}

.filters p {
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
}

.filters .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 14px 0;
    align-items: center;
}

.filters .clear {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    cursor: pointer;
}
.badge {
  padding: 8px 7px;
  background-color: var(--gray-color);
  color: var(--black-color);
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
}

.badge.selected {
    background-color: #E42C5F;
    color: var(--white-color);
}
</style>