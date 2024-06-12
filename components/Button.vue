        <script setup>
        import { ref } from 'vue';
        
        const joke = ref('Cliquez sur le bouton pour générer une blague');
        const answer = ref('');
        const showAnswer = ref(false);
        
        const generateJoke = async () => {
          showAnswer.value = false; // Réinitialisation de showAnswer
          const response = await fetch('http://localhost:3000/api/jokes');
          const data = await response.json();
          const jokes = data.data;
          const randomIndex = Math.floor(Math.random() * jokes.length);
          joke.value = jokes[randomIndex].joke;
          answer.value = jokes[randomIndex].reponse;
        };
        
        const toggleAnswer = () => {
          showAnswer.value = !showAnswer.value;
        };
        </script>





<template>
    <div class="flex flex-col items-center">
      <button
        @click="generateJoke"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Générer une Blague
      </button>
      <div class="mt-4 text-center text-lg">
        <p class="text-base pb-2">Cliquez sur la blague pour voir la réponse</p>
        <p 
          @click="toggleAnswer" 
          class="cursor-pointer hover:underline"
        >
          {{ joke }}
        </p>
        <p  v-if="showAnswer" class="text-base text-green-800">Réponse : {{ answer }}</p>
      </div>
    </div>
  </template>
  
  
