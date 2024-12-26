import { CheckIcon } from './CheckIcon';
import { TrashIcon } from './TrashIcon';

interface TaskCardInfo {
  id: number;
  isComplete?: boolean;
  task: string;
  onDeleteTask: (taskID: number) => void;
  onMarkTaskComplete: (taskID: number) => void;
}

export function TaskCard({ id, isComplete = false, task, onDeleteTask, onMarkTaskComplete }: TaskCardInfo) {
  const baseClasses = 'w-6 h-6 rounded-full cursor-pointer';
  const checkBoxClasses = !isComplete ? 'bg-black border-2 border-blue hover:border-blue-dark' : 'bg-purple-dark hover:bg-purple flex justify-center items-center';

  return (
    <div className="p-4 bg-gray-500 flex justify-between rounded-lg border border-gray-400 border-solid drop-shadow">
      <div className="flex gap-3">
        <button
          className={`${baseClasses} ${checkBoxClasses}`}
          aria-label={isComplete ? 'Mark task as incomplete' : 'Mark task as complete'}
          onClick={() => onMarkTaskComplete(id)}
        >
          {isComplete && <CheckIcon />}
        </button>
        <p className={`${isComplete ? 'line-through text-gray-300' : ''}`}>{task}</p>
      </div>
      <button onClick={() => onDeleteTask(id)}>
        <TrashIcon />
      </button>
    </div>
  );
}
