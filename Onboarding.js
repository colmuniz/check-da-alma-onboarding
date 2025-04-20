import React, { useState, useEffect } from "react";

const steps = [
  {
    title: "Bem-vindo ao Check da Alma",
    text: "Um espaço diário para refletir, se conectar com Deus e caminhar com propósito.",
    button: "Começar a jornada",
  },
  {
    title: "Nosso Propósito",
    text: "Aqui você será guiado a examinar o coração, reconhecer falhas, agradecer e viver sua missão com Jesus. Tudo com leveza, profundidade e graça.",
    button: "Quero viver isso",
  },
  {
    title: "O que você vai encontrar",
    text: "• Pecadômetro: para reconhecer e se arrepender\n• Gratidômetro: para lembrar o bem e agradecer\n• Fruto do Espírito: avalie sua vivência diária em Gálatas 5\n• Vivendo a Missão: foi sal e luz hoje?",
    button: "Explorar cada um",
  },
  {
    title: "Um espaço feito para a alma",
    text: "Cores suaves, palavras inspiradas na Palavra e um design que acolhe. Esse é um app feito para te lembrar: sua alma importa.",
    button: "Pronto para começar",
  },
  {
    title: "Crie sua conta ou entre",
    text: "Vamos guardar seu progresso espiritual?",
    buttons: ["Criar conta", "Já tenho conta", "Explorar sem login"],
  },
];

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const current = steps[step];

  useEffect(() => {
    setFadeIn(false);
    const timer = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      background: "linear-gradient(to bottom right, #e8e4f4, #fdfcf7)",
      padding: "1rem"
    }}>
      <div style={{
        maxWidth: "28rem",
        width: "100%",
        transition: "opacity 0.7s ease-in-out",
        opacity: fadeIn ? 1 : 0,
      }}>
        <div style={{
          borderRadius: "1rem",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          backgroundColor: "white"
        }}>
          <div style={{ padding: "1.5rem", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.5rem", fontFamily: "serif", color: "#3b2d6b" }}>{current.title}</h2>
            <p style={{ fontSize: "1rem", color: "#4a4a4a", whiteSpace: "pre-line" }}>{current.text}</p>
            {current.buttons ? (
              <div style={{ marginTop: "1rem" }}>
                {current.buttons.map((btn, idx) => (
                  <button key={idx} style={{
                    width: "100%",
                    margin: "0.5rem 0",
                    padding: "0.75rem",
                    border: "1px solid #ccc",
                    borderRadius: "0.5rem"
                  }}>
                    {btn}
                  </button>
                ))}
              </div>
            ) : (
              <button onClick={() => setStep(step + 1)} style={{
                marginTop: "1rem",
                padding: "0.75rem",
                width: "100%",
                backgroundColor: "#a594f9",
                color: "white",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer"
              }}>
                {current.button}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
