<template>
  <p>lol</p>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

$input-text-color: #848ab8;
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: $input-text-color;
  font-size: 16px;
  opacity: 1; /* Firefox */
}
.wrapper{
  display: grid;
  grid-template-columns: 500px 1fr;
  grid-template-areas: 'sidebar content';
  min-height: 100%;
  min-width: 100%;
  background-color: white;
}
@media screen and (max-width: 1000px) {
  .wrapper {
    display: flex;
    grid-template-columns: 1fr;
    grid-template-areas: 'content';
  }
  .sidebar{
    display: none !important;
  }
}
@media screen and (max-width: 769px) {
  .wrapper {
    display: flex;
    grid-template-columns: 1fr;
    grid-template-areas: 'content';
  }
  .wrapper .mainContent .container{
    height: 100% !important
  }
  .wrapper .mainContent .container .goToLogin {
    flex-direction: column !important;
    align-items: flex-end !important;
    margin-top: 50px !important;
  }
  .sidebar{
    display: none !important;
  }
}

</style>