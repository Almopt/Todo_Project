import { useState } from 'react';
import { TaskCreator } from './TaskCreator';
import { TasksStatus } from './TasksStatus';
import { TaskCard } from './TaskCard';

interface Task {
  id: number;
  isComplete?: boolean;
  task: string;
}

export function TaskContainer() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const numTasksCompleted = tasks.reduce((acc, task) => {
    return task.isComplete ? acc + 1 : acc;
  }, 0);

  const handleCreateNewTask = (newTask: string) => {
    setTasks([
      ...tasks,
      {
        id: Math.random(),
        task: newTask,
        isComplete: false,
      },
    ]);
  };

  const handleDeleteTask = (taskID: number) => {
    setTasks(tasks.filter((item) => item.id !== taskID));
  };

  const handleMarkTaskHasComplete = (taskID: number) => {
    console.log(taskID);
    setTasks(
      tasks.map((task) => {
        if (task.id === taskID) {
          return { ...task, isComplete: !task.isComplete };
        }
        return task;
      })
    );
  };

  return (
    <div className="flex flex-col mt-[-1.6875rem]">
      <TaskCreator onCreateTask={handleCreateNewTask} />
      <TasksStatus numCreatedTasks={tasks.length} numTasksCompleted={numTasksCompleted} />
      {tasks.length === 0 && (
        <>
          <hr className="border-gray-500 mt-6" />
          <div className="flex flex-col h-[15.25rem] items-center justify-center gap-4">
            <img src="src/assets/Clipboard.png" alt="Empty Clipboard" className="w-[3.5rem]" />
            <p className="text-center">
              <span className="font-bold block">You don't have any tasks registered yet</span>
              Create tasks and organize your to-do items
            </p>
          </div>
        </>
      )}
      <div className="mt-6 flex flex-col gap-3">
        {tasks.map((item) => {
          return (
            <TaskCard key={item.id} id={item.id} task={item.task} isComplete={item.isComplete} onDeleteTask={handleDeleteTask} onMarkTaskComplete={handleMarkTaskHasComplete} />
          );
        })}
      </div>
    </div>
  );
}
