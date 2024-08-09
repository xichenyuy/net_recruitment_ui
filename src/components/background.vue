<template>
  <div class="bg">
    <img src="../assets/团学logo.png" alt="" class="logo">
    <h1 class="title">团委学生会招新系统首页</h1>
  </div>
</template>

<script>
export default {
  name: 'Background'
};
</script>

<style scoped>
.bg {
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 10px; /* 调整顶部边距 */
  justify-content: center; /* 垂直居中 */
  text-align: center; /* 文字水平居中 */
}

.logo {
  max-width: 100%;
  height: auto;
}

.title {
  margin-top: 20px; /* 调整标题与图片的间距 */
  color: #333; /* 加深文字颜色 */
  font-weight: bold; /* 加粗文字 */
  font-size: 24px; /* 增大字体大小 */
}
</style>