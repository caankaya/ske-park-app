// src/api/axiosInstance.js

import axios from "axios";

// Créer une instance d'axios avec la configuration de base
const instance = axios.create({
  baseURL: process.env.VITE_API_URL, // La base URL de l'API
});

export default instance;
