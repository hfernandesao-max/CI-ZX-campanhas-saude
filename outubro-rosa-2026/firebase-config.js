// Configuração do Firebase — substitua pelos valores do seu projecto
// (Consola Firebase → Definições do projecto → As suas aplicações → Aplicação Web → Configuração).
// Estes valores identificam o projecto e podem ser públicos; a protecção dos dados é feita pelas regras do Firestore.
export const firebaseConfig = {
  apiKey: "COLAR_AQUI",
  authDomain: "COLAR_AQUI",
  projectId: "COLAR_AQUI",
  storageBucket: "COLAR_AQUI",
  messagingSenderId: "COLAR_AQUI",
  appId: "COLAR_AQUI"
};

export const configurado = !Object.values(firebaseConfig).some(v => v === "COLAR_AQUI");
