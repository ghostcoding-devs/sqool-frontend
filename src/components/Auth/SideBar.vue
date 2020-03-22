<template>
  <div class="sidebar_content">
    <h1>Sqool</h1>
    <p>Schule von Zuhause</p>
    <ul>
      <li>Keine Kosten</li>
      <li>Virtuelle Klassenzimmer</li>
      <li>Echte Übungsaufgaben</li>
      <li>Für alle Schulen nutzbar</li>
      <li>Fuck Corona</li>
    </ul>
    <img :src="`/sidebar.svg`"/>
  </div>
</template>

<script>
export default {
  name: 'AuthSideBar'
}
</script>

<style lang="scss" scoped>
.sidebar_content{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.sidebar_content h1{
  color: white;
  font-size: 2.4em;
  z-index: 1;
}
.sidebar_content p{
  color: white;
  margin-top: 60px;
  font-size: 1.2em;
  z-index: 1;
}
.sidebar_content ul{
  list-style: none;
  padding-left: 0;
  line-height: 2em;
  z-index: 1;
}
.sidebar_content ul li:before{
  color: white;
  position: absolute;
  left: 0;
  font-size: 1.2em;
  content: '✓';
  z-index: 1;
}
.sidebar_content li{
  color: white;
  position: relative;
  padding-left: 1.5em;
  z-index: 1;
}
.sidebar_content img{
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 0;
}
</style>
