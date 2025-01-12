import React from 'react';
import { Doctor } from '../models/Doctor'; // Importar la interfaz

interface DoctorCardProps {
  doctor: Doctor;  // Usar la interfaz Doctor para tipar las props
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div>
      <h2>{doctor.nombre}</h2>
      <p>Especialidad: {doctor.especialidad}</p>
    </div>
  );
};

export default DoctorCard;