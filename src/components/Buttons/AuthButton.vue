<template>
  <a class="button" :class="{ darkTheme: dark }">
    {{text}}
  </a>
</template>

<script>
export default {
  name: 'AuthButton',
  props: {
    text: String,
    dark: {
      type: Boolean,
      default: () => false
    },
    img: {
      type: String,
      
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 500;
  font-size: 13px;
  height: 48px;
  width: 100%;
  border-radius: 40px;
  color: #5d6494;
  background: linear-gradient(to bottom,white,#e4e4e9) no-repeat;
  text-shadow: 0 1px 0 #fff;
  box-shadow: 0 7px 14px -3px rgba(45,35,66,.3), 0 2px 4px 0 rgba(45,35,66,.4), inset 0 -2px 0 0 #cfd1e3;
}
.button img{
  height: 24px;
  margin-right: 24px;
}
.button:hover {
  transform: translateY(-2px);
  background-color: #5468ff;
  box-shadow: 0 2px 4px 0 rgba(45,35,66,.4),
             0 1px 1px rgba(0,0,0,0.11),
              0 2px 2px rgba(0,0,0,0.11),
              0 4px 4px rgba(0,0,0,0.11),
              0 8px 8px rgba(0,0,0,0.11),
              0 9px 9px rgba(0,0,0,0.11),
              0 10px 10px rgba(0,0,0,0.11);

}
.darkTheme {
  color: white;
  background: linear-gradient(#aeb7ff, #5468ff);
  text-shadow: 0 1px 0 #4b5ef0;
  box-shadow: 0 7px 13px -3px rgba(45,35,66,.3), 0 2px 4px 0 rgba(45,35,66,.4), inset 0 -2px 0 0 #4b58ba;
}
.darkTheme:hover {
  background-color: #5468ff;
  box-shadow: 0 2px 4px 0 rgba(45,35,66,.4),
             0 1px 1px rgba(0,0,0,0.11),
              0 2px 2px rgba(0,0,0,0.11),
              0 4px 4px rgba(0,0,0,0.11),
              0 8px 8px rgba(0,0,0,0.11),
              0 9px 9px rgba(0,0,0,0.11),
              0 10px 10px rgba(0,0,0,0.11);
}

// .wrapper .mainContent .createWithOAuth:hover{
//   background-color: #5468ff;
//   box-shadow: 0 2px 4px 0 rgba(45,35,66,.4),
//              0 1px 1px rgba(0,0,0,0.11),
//               0 2px 2px rgba(0,0,0,0.11),
//               0 4px 4px rgba(0,0,0,0.11),
//               0 8px 8px rgba(0,0,0,0.11),
//               0 9px 9px rgba(0,0,0,0.11),
//               0 10px 10px rgba(0,0,0,0.11);
//   // transform: translateY(-2px);
// }
</style>
