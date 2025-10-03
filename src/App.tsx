import { useState } from 'react';
import type { DragEndEvent } from '@dnd-kit/core';
import { DndContext } from '@dnd-kit/core';
import type { Column as ColumnType } from './types';
import { INITIAL_COLUMNS } from './initial-data';
import { DroppableColumn } from './components/DroppableColumn';

function App() {
  const [columns, setColumns] = useState<Record<string, ColumnType>>(INITIAL_COLUMNS);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    // Si no hay destino o si se suelta en el mismo lugar, no hacer nada
    if (!over || active.id === over.id) return;

    const taskId = active.id as string;
    const destinationColumnId = over.id as string;

    // Encontrar la columna de origen
    let sourceColumnId: string | null = null;
    let draggedTask = null;

    for (const [columnId, column] of Object.entries(columns)) {
      const task = column.tasks.find(t => t.id === taskId);
      if (task) {
        sourceColumnId = columnId;
        draggedTask = task;
        break;
      }
    }

    // Si no encontramos la tarea o si está en la misma columna, no hacer nada
    if (!sourceColumnId || !draggedTask || sourceColumnId === destinationColumnId) return;

    // Actualizar el estado de forma inmutable
    setColumns(prevColumns => {
      const newColumns = { ...prevColumns };

      // Eliminar la tarea de la columna de origen
      newColumns[sourceColumnId] = {
        ...newColumns[sourceColumnId],
        tasks: newColumns[sourceColumnId].tasks.filter(t => t.id !== taskId)
      };

      // Añadir la tarea a la columna de destino
      newColumns[destinationColumnId] = {
        ...newColumns[destinationColumnId],
        tasks: [...newColumns[destinationColumnId].tasks, draggedTask]
      };

      return newColumns;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white">
          Tablero Kanban
        </h1>
      </div>
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {Object.values(columns).map((column) => (
            <DroppableColumn key={column.id} column={column} />
          ))}
        </div>
      </DndContext>
    </div>
  );
}

export default App;