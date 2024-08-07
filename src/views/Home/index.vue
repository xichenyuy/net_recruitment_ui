<script>
// import Header from '@/components/Header.vue';
import Header from '/src/components/Header.vue';
import Bottom from '/src/components/Bottom.vue';
import Beside from '/src/components/beside.vue';
// import Login from './components/login.vue';

export default {
  components: {
    Header,
    Bottom,
    Beside
  }
};

</script>


  <template>
  <div class="common-layout">
    <el-container>
      <el-header style="position: fixed;">
        <el-affix :offset="0">
        <Header></Header>
      </el-affix>
      </el-header>
      <el-container>
        <el-aside >
          <Beside></Beside>
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer >
            <el-affix position="bottom" :offset="0">
             <Bottom></Bottom>
            </el-affix>
            </el-footer>
        </el-container>
      </el-container>
    </el-container>
    <!-- <Login></Login> -->
  </div>
</template>

     
 

  <!--路由的显示位置，App为网页第一页，放在这指的是在这里显示路由所指向的页面-->
  
  

<style>
.el-header{
  padding:0
}
.el-footer{
  padding: 0;
}

</style>
