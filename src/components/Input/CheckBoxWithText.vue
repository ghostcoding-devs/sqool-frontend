<template>
<div class="checkboxWrapper">
  <input
    class="form__checkbox"
    :checked="checked"
    type="checkbox"
    :id="inputId"
    @click="onChecked"/>
  <p>{{ text }}</p>
</div>
</template>

<script>
export default {
  name: 'CheckBoxWithText',
  props: {
    inputId: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  data: () => ({
    checked: false
  }),
  methods: {
    onChecked () {
      this.checked = !this.checked
      const eventData = {
        target: {
          id: this.inputId,
          value: this.checked
        }
      }
      this.$emit('onChecked', eventData)
    },
    clearInput () {
      this.checked = false
    }
  }
}
</script>

<style lang="scss" scoped>
.checkboxWrapper{
  display: flex;
}
.checkboxWrapper .form__checkbox{
  margin-top: 23px;
  margin-right: 15px
}
.checkboxWrapper p {
  margin-top: 20px;
  color: #252845
}
</style>
