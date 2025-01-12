export interface Doctor {
  id: number;
  nombre: string;
  especialidad: string;
  experiencia: number;
}

export const obtenerDetallesDoctor = (doctors: Doctor): string => {
  return `El doctor ${doctors.nombre}, especializado en ${doctors.especialidad}, tiene ${doctors.experiencia} años de experiencia.`;
};
