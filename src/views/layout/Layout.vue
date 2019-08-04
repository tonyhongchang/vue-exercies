<template>
  <div class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg">456</div>
     <div class="main-container">
      <navbar/>
    </div>
  </div>


</template>

<script>

  import Navbar from "./components/Navbar";

  export default {
    name: 'Layout',
    components: {Navbar},
    computed: {
      device() {
        console.log(this.$store.state.app.device)
        return this.$store.state.app.device
      },
      sidebar() {
        return this.$store.state.app.sidebar
      }
    }
  }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
</style>


