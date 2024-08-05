<template>
    
        <div class="Bottom">
        <div class="Bottom-content">
        <div class="title">
                <h1>团委学生会招新系统</h1>
            </div>
        </div>
    </div>
    
  </template>
  <style>
  .Bottom{
    display: flex;
    align-items: center;
    /*当容器为flex时，垂直方向上居中对齐*/
    /*当容器为flex时，水平方向居中对齐为justify-content: center*/ 
    width: 100%;
    height: 50px;
    background-color: rgb(255, 118, 20);
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.16);
  }
  .bottom-cintent{
    display: inline-flex;
    width:500px ;
    height: 50px;
    align-items: center
  }
</style>
<script>
export default{
  name:'Bottom'
}
</script>