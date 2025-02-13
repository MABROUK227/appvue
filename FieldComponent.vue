<template>
    <div class="field">
      <label :for="field.id">{{ field.label }}</label>
      <input
        :id="field.id"
        v-model="modelValue"
        :type="field.type"
        :placeholder="field.placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  
  interface FieldProps {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    modelValue: string;
    errorMessage?: string;
  }
  
  defineProps<FieldProps>();
  defineEmits(['update:modelValue']);
  </script>
  
  <style scoped>
  .field {
    margin-bottom: 15px;
  }
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .error {
    color: red;
    font-size: 14px;
  }
  </style>
  