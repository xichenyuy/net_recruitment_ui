<script>
import Select from './select.vue';

export default{
    
components:{Select,
   
}

}
</script>
<template>
   
    <header>
        <div class="header-content">
            <div class="content-logo">
                <img src="../assets/团学logo.png" alt="" >
        </div>
            <div class="title">
                <h1>团委学生会招新系统</h1>
            </div>
           
        </div>
        <div  class="select">
            <Select></Select>
            </div>
            
    </header>

</template>

<style scoped>
header{
    display: flex;
    align-items: center;
    /*当容器为flex时，垂直方向上居中对齐*/
    /*当容器为flex时，水平方向居中对齐为justify-content: center*/ 
    width:10000px;
    height: 50px;
    background-color: rgb(255, 118, 20);
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.16);
}
.header-content{
    display: inline-flex;
    width:500px ;
    height: 50px;
    align-items: center;
    margin-left: 50px;
}
.content-logo img{
    width: 100%;
}
.content-logo{
    width:80px ;
  border: 1px solid  rgb(255, 118, 20);
  padding: 2px;
  margin: 5px;
  height: 50px;
  display: flex;
  align-items: center
}
.title{
  width:180px ; 
  border: 1px solid  rgb(255, 118, 20);
  padding: 2px;
  margin: 5px;
  height: 50px;
  font-size:xx-small;
  color: aliceblue;
  display: flex;
  align-items: center
}

</style>
