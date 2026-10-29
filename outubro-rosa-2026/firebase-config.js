// Configuração do Firebase — projecto ci-zx-campanhas-saude
// Estes valores identificam o projecto e podem ser públicos; a protecção dos dados é feita pelas regras do Firestore.
export const firebaseConfig = {
  apiKey: "AIzaSyCSuyaQfGbGhRucYH9h6-Ctuo1NsIL5iKw",
  authDomain: "ci-zx-campanhas-saude.firebaseapp.com",
  projectId: "ci-zx-campanhas-saude",
  storageBucket: "ci-zx-campanhas-saude.firebasestorage.app",
  messagingSenderId: "1020830960236",
  appId: "1:1020830960236:web:f351d330a228adb533a649"
};

export const configurado = !Object.values(firebaseConfig).some(v => v === "COLAR_AQUI");
