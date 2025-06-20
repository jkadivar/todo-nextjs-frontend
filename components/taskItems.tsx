import { Task } from "@/types/tasks.type";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { TaskListActions } from "./taskListControls";

export const TaskList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div className="mx-4 sm:mx-6 lg:mx-8 my-6 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow className="bg-gray-50 border-b border-gray-200">
            <TableHead className="text-sm font-semibold text-gray-700 py-4">Title</TableHead>
            <TableHead className="text-sm font-semibold text-gray-700 py-4">Status</TableHead>
            <TableHead className="text-sm font-semibold text-gray-700 py-4">Description</TableHead>
            
            <TableHead className="text-sm font-semibold text-gray-700 py-4">Due Date</TableHead>
            <TableHead className="text-sm font-semibold text-gray-700 py-4 text-right pr-6">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks?.map((task) => (
            <TableRow 
              key={task.id} 
              className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200"
            >
              <TableCell className="text-sm text-gray-900 py-3">{task.title}</TableCell>
              <TableCell className="text-sm text-gray-600 py-3">
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  task.status === 'completed' ? 'bg-green-100 text-green-800' : 
                  task.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 
                  'bg-gray-100 text-gray-800'
                }`}>
                  {task.status}
                </span>
              </TableCell>
              <TableCell className="text-sm text-gray-600 py-3 max-w-xs truncate">{task.description}</TableCell>
              
              <TableCell className="text-sm text-gray-600 py-3">
                {new Date(task.due_date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </TableCell>
              <TableCell className="text-sm text-gray-600 py-3 pr-6">
                <div className="flex justify-end items-center h-full">
                  <TaskListActions task={task} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};