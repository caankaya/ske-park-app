// src/api/axiosInstance.js

import axios from "axios";


// Créer une instance d'axios avec la configuration de base
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // La base URL de l'API
  timeout: 5000, // Temps d'attente maximal
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
