import { useDroppable } from '@dnd-kit/core';
import type { Column as ColumnType } from '../types';
import { DraggableTaskCard } from './DroppableTaskCard';

interface DroppableColumnProps {
  column: ColumnType;
}

export const DroppableColumn = ({ column }: DroppableColumnProps) => {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`bg-gray-100 rounded-lg p-3 w-72 flex-shrink-0 transition-colors ${
        isOver ? 'bg-blue-100' : ''
      }`}
    >
      <h2 className="font-semibold text-gray-800 mb-3 text-sm">
        {column.title}
      </h2>
      <div className="space-y-2">
        {column.tasks.map((task) => (
          <DraggableTaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};