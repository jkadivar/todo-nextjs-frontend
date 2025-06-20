import { EditTaskForm } from "@/components/taskEditorForm";
import { getTasksbyId } from "@/http/tasks";
import { headers } from "next/headers";

const EditTaskPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const headersInstance = await headers();
   const { id } = await params;
  const task = await getTasksbyId(headersInstance, id);

  if (!task) {
    return <div className="p-4 text-red-500">Task not found.</div>;
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <EditTaskForm task={task} />
      </div>
    </>
  );
};

export default EditTaskPage;
