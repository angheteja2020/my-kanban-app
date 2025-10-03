import { useDraggable } from '@dnd-kit/core';
import type { Task } from '../types';

interface DraggableTaskCardProps {
  task: Task;
}

export const DraggableTaskCard = ({ task }: DraggableTaskCardProps) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`bg-white rounded-lg shadow-sm p-3 mb-2 hover:shadow-md transition-shadow cursor-pointer group ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <p className="text-sm text-gray-800">{task.title}</p>
    </div>
  );
};