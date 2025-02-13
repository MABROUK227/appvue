<template>
    <form @submit.prevent="handleSubmit">
      <FieldComponent
        v-for="field in formData.fields"
        :key="field.id"
        v-bind="field"
        v-model="formValues[field.id]"
        :errorMessage="errors[field.id]"
      />
      <button type="submit">Envoyer</button>
    </form>
  </template>
  
  <script setup lang="ts">
  import { reactive, ref } from 'vue';
  import FieldComponent from './FieldComponent.vue';
  
  interface FormComponentProperties {
    fields: {
      id: string;
      label: string;
      type: string;
      placeholder: string;
    }[];
  }
  
  const formData: FormComponentProperties = reactive({
    fields: [
      { id: 'email', label: 'Email', type: 'email', placeholder: 'Entrez votre email' },
      { id: 'password', label: 'Mot de passe', type: 'password', placeholder: 'Entrez votre mot de passe' },
    ],
  });
  
  const formValues = reactive<{ [key: string]: string }>({
    email: '',
    password: '',
  });
  
  const errors = ref<{ [key: string]: string }>({});
  
  const handleSubmit = () => {
    errors.value = {};
    formData.fields.forEach((field) => {
      if (!formValues[field.id]) {
        errors.value[field.id] = `⚠️ ${field.label} est requis`;
      }
    });
  
    if (Object.keys(errors.value).length === 0) {
      alert(`✅ Formulaire soumis avec succès !\nEmail: ${formValues.email}`);
    }
  };
  </script>
  
  <style scoped>
  button {
    padding: 10px;
    background: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background: #369f6b;
  }
  </style>
  