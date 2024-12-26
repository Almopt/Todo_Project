import { IoIosAddCircleOutline } from 'react-icons/io';
import { useState, FormEvent } from 'react';

interface TaskCreatorProps {
  onCreateTask: (task: string) => void;
}

export function TaskCreator({ onCreateTask }: TaskCreatorProps) {
  const [newTaskText, setNewTaskText] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onCreateTask(newTaskText);
    setNewTaskText(''); // Clear input after submission
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Add a new Task"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        className="w-[39.875rem] h-[3.375rem] outline-none border border-gray-700 rounded-lg bg-gray-500 p-4 focus:text-gray-100 focus:border-purple"
      />
      <button type="submit" disabled={!newTaskText.trim()} className="flex items-center gap-4 bg-blue-dark px-4 text-gray-100 rounded-lg hover:bg-blue disabled:cursor-not-allowed">
        <span className="font-bold">Create</span>
        <IoIosAddCircleOutline className="font-bold w-5 h-5" />
      </button>
    </form>
  );
}
