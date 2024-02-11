<script setup>
import DataTable from "datatables.net-vue3";
import DataTablesCore from "datatables.net";
import "datatables.net-colreorder-dt";
import "datatables.net-rowreorder-dt";
import "datatables.net-select-dt";
import { ref } from "vue";

DataTable.use(DataTablesCore);

const columns = [
  { data: "delete", title: "" },
  { data: "defiction", title: "" },
  { data: "units", title: "Наименование еденицы" },
  { data: "price", title: "Цена" },
  { data: "quentity", title: "Кол-во" },
  { data: "name", title: "Название товара" },
  { data: "total", title: "Итого" },
];

const options = {
  colReorder: {
    realtime: true,
  },
  rowReorder: {
    update: false,
    selector: "td:first-child",
    dataSrc: "sequence",
    // editor: editor,
  },
  columnDefs: [
    {
      className: "reorder",
      render: () => "",
      targets: 0,
    },
    {
      className: "deleteBtn",
      render: () => "",
      targets: 1,
    },
    { orderable: false, targets: "_all" },
  ],
};

//ghb получении данных с бека в DataTable => :data="getDataTable()"
// async function getDataTable() {
//   try {
//     const dataTable = await axios.get(URL__);
//     console.log(dataTable.data);s
//     return dataTable;
//   } catch (error) {
//     console.log(error);
//   }
// }

/*  dropdown  */
let isActive = ref(false);

// const editor = () => {
//   await axios.post(URL__)...
// }

function toggleIsActiveClass() {
  isActive.value = !isActive.value;
}
</script>

<template>
  <div class="block-wrapper">
    <button @click="addRow" class="block-wrapper__btn">
      <div class="create-icon"></div>
      Добавить строку
    </button>
  </div>
  <div class="block-wrapper">
    <div class="data-setting">
      <a class="data-setting__save-button">Cохранить изменения</a>
      <div class="dropdown">
        <span
          class="dropdown__setting-icon"
          @click="toggleIsActiveClass"
        ></span>
        <div
          class="dropdown__drop"
          :class="{
            'dropdown__drop--active dropdown__drop--width': isActive,
          }"
        >
          <a
            v-for="item in columns"
            class="dropdown__drop-item"
            :key="item.data"
          >
            <div class="checkbox">
              <input type="checkbox" name="check1" id="check1" />
              <label for="check1" class="checkbox__label">{{
                item.title
              }}</label>
            </div></a
          >
        </div>
      </div>
    </div>

    <DataTable
      :ajax="'../../data.json'"
      :columns="columns"
      :options="options"
      class="hover"
    />
    <div class="total">
      <div>
        <div class="total-info">
          <div class="total-info__row">
            <p class="total-info__row-lable">Сумма:</p>
            <p>Сумма руб</p>
          </div>
          <div class="total-info__row">
            <p class="total-info__row-lable">Кол-во:</p>
            <p>Кол-во шт</p>
          </div>
          <div class="total-info__row">
            <p class="total-info__row-lable">Общий вес:</p>
            <p>2322 кг</p>
          </div>
        </div>
        <div class="total-info">
          <div class="total-info__row">
            <p><strong>Общая сумма:</strong></p>
            <p><strong>Общая сумма руб</strong></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "datatables.net-dt";
.dt-rowReorder-float-parent {
  background-color: #ffffff;
  position: absolute;
  border: 1px solid #cac9c9;
  border-radius: 10px;
}
.reorder {
  user-select: none;
  border: none;
  cursor: ns-resize;
  background-image: url("../components/icons/4.svg");
  background-repeat: no-repeat;
  background-position: center;
}
article[data-column-index="1"] {
  opacity: 0;
}
.deleteBtn {
  user-select: none;
  border: none;
  cursor: pointer;
  background-image: url("../components/icons/3.svg");
  background-repeat: no-repeat;
  background-position: center;
}
.sorting_disabled {
  user-select: none;
  cursor: ew-resize;
}
.sorting_disabled:first-child {
  opacity: 0;
  visibility: none;
  user-select: none;
  cursor: auto;
}
.deleteBtn:first-child {
  opacity: 0;
  visibility: none;
  user-select: none;
  cursor: auto;
}

.dropdown__drop--width {
  top: 20px;
  width: 220px;
  left: -260px;
}
table.dataTable > thead > tr > th {
  border-bottom: none;
}
table.dataTable {
  border-spacing: 21px 10px;
}
table.dataTable.no-footer {
  border-bottom: none;
}
td {
  border-radius: 5px;
  border: solid 1px #ccc;
  margin: 10px;
}
.total {
  width: 100%;
  display: flex;
  justify-content: end;
  margin-top: 15px;
}
.total-info {
  display: block;
  justify-content: space-between;
  width: 340px;
  margin: 5px;
  padding: 15px;
  border-radius: 5px;
  border: solid 1px #eeeff1;
  background-color: #fbfcfd;
}
.total-info__row {
  margin-bottom: 15px;
  flex-wrap: 400;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.total-info__row:last-child {
  margin-bottom: 0;
}
.total-info__row-lable {
  color: #8f8f8f;
}
.datatable {
  width: 100%;
}
.dataTables_paginate {
  display: none;
}
.dataTables_info {
  display: none;
}
.dataTables_length {
  display: none;
}
.dataTables_filter {
  display: none;
}
.checkbox__label {
  margin-left: 5px;
}
.data-setting__save-button {
  user-select: none;
  font-size: 12px;
  font-weight: 400;
  color: #a6b7d4;
  cursor: pointer;
}
.data-setting__save-button:hover {
  color: #2f8cff;
}
.data-setting {
  position: absolute;
  display: flex;
  width: 180px;
  justify-content: space-between;
  top: 9px;
  right: -5px;
}
.block-wrapper {
  position: relative;
  display: block;
}
.block-wrapper__btn {
  display: flex;
  font-weight: 400;
  height: 35px;
  padding: 10px 15px 10px 10px;
  background-color: #2f8cff;
  color: #fff;
  border-radius: 5px;
}
</style>
