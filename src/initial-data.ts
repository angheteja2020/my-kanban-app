import type { Task, Column } from './types';

export const INITIAL_COLUMNS: Record<string, Column> = {
  'todo': {
    id: 'todo',
    title: 'Por Hacer',
    tasks: [
      { id: 'task-1', title: 'Configurar el proyecto con Vite y TypeScript' },
      { id: 'task-2', title: 'Instalar Tailwind CSS y dnd-kit' },
      { id: 'task-3', title: 'Diseñar la estructura de componentes' },
      { id: 'task-4', title: 'Implementar la funcionalidad drag and drop' }
    ]
  },
  'inProgress': {
    id: 'inProgress',
    title: 'En Progreso',
    tasks: [
      { id: 'task-5', title: 'Crear los componentes de Column y Task' },
      { id: 'task-6', title: 'Estilizar el tablero con Tailwind' }
    ]
  },
  'done': {
    id: 'done',
    title: 'Hecho',
    tasks: [
      { id: 'task-7', title: 'Definir los tipos TypeScript' },
      { id: 'task-8', title: 'Crear los datos iniciales' }
    ]
  }
};