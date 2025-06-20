import { TaskList } from "@/components/taskItems";
import { Button } from "@/components/ui/button";
import { getTasks } from "@/http/tasks";
import { LogoutButton } from "@/components/LogoutButton";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const headersInstance = await headers();
  const tasks = await getTasks(headersInstance);

  

  return (
     <div className="m-4 sm:m-6 lg:m-8 p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header row for buttons */}
      <div className="flex justify-between items-center">
        <Link href="/task/add">
          <Button>+ Add Task</Button>
        </Link>
         <LogoutButton />
      </div>

      {/* Task list */}
      <TaskList tasks={tasks} />
    </div>
  );
}
