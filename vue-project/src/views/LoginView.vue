<template>
    <main class="login__main">
      <section>
        <h2>Connexion</h2>
        <form @submit.prevent="handleSubmit">
          <section>
            <article>
              <label :for="data.username.id">{{ data.username.label }}</label>
              <input
                :id="data.username.id"
                v-model="username"
                :placeholder="data.username.placeholder"
                :type="data.username.type"
              />
              <p v-if="errors.username" class="error">{{ errors.username }}</p>
            </article>
  
            <article>
              <label :for="data.password.id">{{ data.password.label }}</label>
              <input
                :id="data.password.id"
                v-model="password"
                :placeholder="data.password.placeholder"
                :type="data.password.type"
              />
              <p v-if="errors.password" class="error">{{ errors.password }}</p>
            </article>
          </section>
  
          <section>
            <button :type="data.btn.type">{{ data.btn.content }}</button>
          </section>
        </form>
      </section>
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const data = ref({
    username: {
      id: 'username',
      label: 'Nom d’utilisateur',
      placeholder: 'Entrez votre nom',
      type: 'text',
    },
    password: {
      id: 'password',
      label: 'Mot de passe',
      placeholder: 'Entrez votre mot de passe',
      type: 'password',
    },
    btn: {
      type: 'submit',
      content: 'Se connecter',
    },
  });
  
  const username = ref('');
  const password = ref('');
  const errors = ref({ username: '', password: '' });
  
  const handleSubmit = () => {
    errors.value.username = username.value.trim() ? '' : '⚠️ Veuillez entrer un nom d’utilisateur.';
    errors.value.password = password.value.trim() ? '' : '⚠️ Veuillez entrer un mot de passe.';
  
    if (!errors.value.username && !errors.value.password) {
      alert(`✅ Connexion réussie ! Bienvenue, ${username.value} !`);
    }
  };
  </script>
  
  <style scoped>
  .login__main {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  h2 {
    margin-bottom: 20px;
    color: #333;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }
  
  .error {
    color: red;
    font-size: 14px;
    margin: 5px 0;
    text-align: left;
  }
  
  button {
    width: 100%;
    padding: 12px;
    background: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 15px;
    transition: background 0.3s ease-in-out;
  }
  
  button:hover {
    background: #369f6b;
  }
  </style>
  