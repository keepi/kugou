<template>
  <div id="app">
    <mt-header fixed class="kugou-header">
        <router-link class="logo" to="/" slot="left">
        </router-link>
        <mt-button @click="gotoSearch" icon="search" slot="right"></mt-button>
    </mt-header>

    <router-view class="navbar" name="navBar" 
                v-show="!getShowSubList"></router-view>
    <router-view class="gotoback" name="gotoback"></router-view>
    
    <div class="content">
      <router-view></router-view>
      <router-view name="rankList"></router-view>
    </div>
  </div> 
</template>

<script>

import rankList from './view/rankList/rankList'
import store from './store'
export default {
  name: 'App',
  methods: {
    gotoSearch(){
      this.$router.push('/search');
    },
  },
  computed: {
    getShowSubList(){
      return this.$store.state.showSubList
    }
  },
  create(){
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
    color:#333;
    text-decoration: none;
}
ul, li, p{
  list-style: none;
  padding: 0;
  margin: 0;
}
.kugou-header{
  height: 3.2143rem;
  line-height: 3rem;
}
.logo{
  display: inline-block;
  vertical-align: middle;
  width: 7.286rem;
  height: 1.67857rem;
  margin-left: .7143rem;
  background: url(http://m.kugou.com/v3/static/images/index/logo.png) no-repeat;
  background-size: 100%;
}
.mint-navbar{
  margin-top: -15px;
}
.mint-tab-item-label{
  font-size:18px;
}
</style>
