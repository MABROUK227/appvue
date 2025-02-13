<template>
    <button
      :class="[
        'btn',
        variant ? `btn-${variant}` : 'btn-primary',  // Valeur par défaut "primary"
        size ? `btn-${size}` : 'btn-medium',         // Valeur par défaut "medium"
        disabled ? 'btn-disabled' : ''
      ]"
      :type="type || 'button'"  
      :disabled="disabled"
      @click="handleClick"
    >
      <slot>Button</slot>
    </button>
  </template>
  
  <script setup lang="ts">
  interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'; 
    size?: 'small' | 'medium' | 'large';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
  }
  
  // Définition des propriétés avec valeurs par défaut
  const props = defineProps<ButtonProps>();
  const emit = defineEmits(['click']);
  
  const handleClick = () => {
    if (!props.disabled) {
      emit('click');
    }
  };
  </script>
  
  <style scoped>
  /* Style de base */
  .btn {
    padding: 12px 24px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    font-weight: 600;
    transition: background-color 0.3s, transform 0.2s;
    display: inline-block;
    text-align: center;
  }
  
  /* Variantes dynamiques */
  .btn-primary { background-color: #007bff; color: white; }
  .btn-secondary { background-color: #6c757d; color: white; }
  .btn-success { background-color: #28a745; color: white; }
  .btn-danger { background-color: #dc3545; color: white; }
  .btn-warning { background-color: #ffc107; color: black; }
  .btn-info { background-color: #17a2b8; color: white; }
  
  /* Taille dynamique */
  .btn-small { font-size: 14px; padding: 8px 16px; }
  .btn-medium { font-size: 16px; padding: 12px 24px; }
  .btn-large { font-size: 20px; padding: 16px 32px; }
  
  /* Effet hover */
  .btn:hover {
    filter: brightness(90%);
    transform: scale(1.02);
  }
  
  /* Bouton désactivé */
  .btn-disabled {
    opacity: 0.6;
    cursor: not-allowed;
    filter: grayscale(50%);
  }
  </style>
  