const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:4173",
    "https://magnificent-cucurucho-e0045a.netlify.app",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

export { corsOptions };
