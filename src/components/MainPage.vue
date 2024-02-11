<script setup>
import { ref } from "vue";
/*  dropdown  */
let isActive = ref(false);

function toggleIsActiveClass() {
  isActive.value = !isActive.value;
}
</script>

<template>
  <div style="margin: 0 25px">
    <h1 class="title">Проведение ТО и мелкий ремонт</h1>
    <nav class="menubar">
      <ul class="menubar__nav">
        <li>
          <router-link to="/" class="menubar__nav-link" :class="'isActive'"
            >Общее</router-link
          >
        </li>
        <li>
          <router-link to="/goods" class="menubar__nav-link"
            >Товары</router-link
          >
        </li>
        <li>
          <router-link to="/expenses" class="menubar__nav-link"
            >Доп. расходы</router-link
          >
        </li>
      </ul>
      <div class="dropdown">
        <span
          class="dropdown__setting-icon"
          @click="toggleIsActiveClass"
        ></span>
        <div
          class="dropdown__drop"
          :class="{ 'dropdown__drop--active': isActive }"
        >
          <a class="dropdown__drop-item">Отображение столбцов</a>
          <a class="dropdown__drop-item">Порядок столбцов</a>
        </div>
      </div>
    </nav>
    <div class="table-container">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.table-container {
  position: relative;
}
a.router-link-active {
  color: #000;
}

.title {
  font-size: 30px;
  padding-top: 25px;
}

.create-icon {
  margin-right: 7px;
  width: 15px;
  height: 15px;
  background-image: url(../components//icons/2.svg);
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}

.menubar {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
}
.menubar__nav li {
  display: inline-block;
  margin-right: 20px;
}
.menubar__nav li:last-child {
  margin-right: 0;
}
.menubar__nav-link {
  font-size: 16px;
  text-decoration: none;
  color: #1253a2;
  font-weight: 600;
  transition: color 150ms ease-in-out;
}
.menubar__nav-link:hover {
  color: #2f8cff !important;
}
.menubar__nav-link:active {
  color: #000 !important;
}
</style>
