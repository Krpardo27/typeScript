// src/App.tsx
import React from "react";
import DoctorCard from "./components/DoctorCard";
import { Doctor } from "./models/Doctor"; // Importar la interfaz Doctor

const doctor: Doctor[] = [
  {
    id: 1,
    nombre: "Dr. López",
    especialidad: "Cardiología",
    experiencia: 10,
  },
  {
    id: 2,
    nombre: "Dr. García",
    especialidad: "Pediatría",
    experiencia: 10,
  },
  {
    id: 3,
    nombre: "Dr. Martínez",
    especialidad: "_Neurología",
    experiencia: 10,
  },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>Hospital Doctor List</h1>
      {doctor.map((doc) => (
        <DoctorCard key={doc.id} doctor={doc} />
      ))}
    </div>
  );
};

export default App;
