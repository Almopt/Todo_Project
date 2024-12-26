import { TaskStatusDetails } from './TaskStatusDetails';

interface TasksStatusProps {
  numCreatedTasks: number;
  numTasksCompleted: number;
}

export function TasksStatus({ numCreatedTasks, numTasksCompleted }: TasksStatusProps) {
  return (
    <div className="flex justify-between mt-[4rem]">
      <TaskStatusDetails title={'Tasks Created'} color_title="text-blue" count={numCreatedTasks} />
      <TaskStatusDetails title={'Completed Tasks'} color_title="text-purple" count={numTasksCompleted} />
    </div>
  );
}
