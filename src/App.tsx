import { useState } from 'react';
import type { Column as ColumnType } from './types';
import { INITIAL_COLUMNS } from './initial-data';
import { Column } from './components/Column';

function App() {
  const [columns, setColumns] = useState<Record<string, ColumnType>>(INITIAL_COLUMNS);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white">
          Kanban Board
        </h1>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {Object.values(columns).map((column) => (
          <Column key={column.id} column={column} />
        ))}
      </div>
    </div>
  );
}

export default App;