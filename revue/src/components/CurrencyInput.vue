<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input ref="input" :value="value" @input="updateValue($event.target.value)" @focus="selectAll" @blur="formatValue">
  </div>
</template>
<script>
  export default {
    props: {
      value: {
        type: Number,
        default: 0
      },
      label: {
        type: String,
        default: ''
      }
    },
    mounted(){
      this.formatValue()
    },
    methods: {
      updateValue(value) {
        var result = currencyValidator.parse(value, this.value)
        if(result.warining) {
          this.$refs.input.value = result.value
        }
        this.$emit('input', result.value)
      },
      formatValue() {
        this.$refs.value = currencyValidator.format(this.value)
      },
      selectAll(event) {
        setTimeout(event.target.select(), 0)
      }
    }
  }
</script>