<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg">456</div>
    123
  </div>


</template>

<script>

  export default {

    name: 'Layout',
    computed: {
      device() {
        console.log(this.$store.state.app.device)
        return this.$store.state.app.device
      },
      sidebar() {
        return this.$store.state.app.sidebar
      },
      classObj() {
        return {
          hideSidebar: !this.sidebar.opened,
          openSidebar: this.sidebar.opened,
          withoutAnimation: this.sidebar.withoutAnimation,
          mobile: this.device === 'mobile'
        }
      }
    }
  }

</script>


