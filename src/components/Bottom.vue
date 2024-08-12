<template>
    <div class="Bottom">
      <div class="Bottom-content">
        <h1>团委学生会招新系统</h1>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Bottom'
  }
  </script>
  
  <style scoped>
  .Bottom {
    display: flex;
    align-items: center;
    justify-content: center; /* 水平居中对齐 */
    width: 100%;
    height: 50px;
    background-color: rgb(255, 118, 20);
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.16);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000; /* 确保在其他内容之上 */
  }
  
  .Bottom-content h1 {
    color: white;
    font-size: 18px;
    margin: 0;
  }
  </style>
  