<template>
  <input
    :id="inputId"
    class="form_field"
    :type="type"
    :placeholder="placeholder"
    @input="onInput"
    v-on:keydown.enter="$event.stopPropagation()"
    v-on:keyup.enter="submitField"/>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    inputId: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: () => 'text'
    },
    placeholder: String
  },
  methods: {
    onInput (event) {
      this.$emit('onInput', event)
    },
    clearInput () {
      document.getElementById(this.inputId).value = ''
    },
    submitField () {
      this.$emit('onPressedEnter')
    }
  }
}
</script>

<style lang="scss" scoped>
$input-text-color: #848ab8;

.form_field{
  background: #fff;
  color: $input-text-color;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  border: 1px solid #5d6494;
  border-radius: 7px;
  outline: 0;
  padding: 12px;
  margin-top: 20px
}
</style>
