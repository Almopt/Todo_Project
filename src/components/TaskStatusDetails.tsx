interface TaskCount {
  title: string;
  color_title: string;
  count: number;
}

export function TaskStatusDetails({ title, color_title, count }: TaskCount) {
  return (
    <div className="flex items-center gap-2">
      <strong className={color_title}>{title}</strong>
      <div className="bg-gray-400 rounded-full px-2 py-1 w-[1.5625rem] h-[19px] flex items-center">
        <p className="text-gray-200 text-xs">{count}</p>
      </div>
    </div>
  );
}
