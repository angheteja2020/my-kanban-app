import type { Column as ColumnType } from '../types';
import { TaskCard } from './TaskCard';

interface ColumnProps {
  column: ColumnType;
}

export const Column = ({ column }: ColumnProps) => {
  return (
    <div className="bg-gray-100 rounded-lg p-3 w-72 flex-shrink-0">
      <h2 className="font-semibold text-gray-800 mb-3 text-sm">
        {column.title}
      </h2>
      <div className="space-y-2">
        {column.tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};