import type { Task } from '../types';

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3 mb-2 hover:shadow-md transition-shadow cursor-pointer group">
      <p className="text-sm text-gray-800">{task.title}</p>
    </div>
  );
};