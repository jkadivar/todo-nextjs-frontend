import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string().min(1, "Task title is required"),
  description: z.string().min(1, "Task description is required"),
  status: z.enum(["To Do", "In Progress", "Completed"]),
  due_date: z.string().min(1, "Due date is required"),
});

export  type CreateTaskFormValues = z.infer<typeof createTaskSchema>;



export const editTaskSchema = z.object({
  title: z.string().min(1, "Task title is required"),
  description: z.string().min(1, "Task description is required"),
  status: z.enum(["To Do", "In Progress", "Completed"]),
  due_date: z.string().min(1, "Due date is required"),
});

export  type EditTaskFormValues = z.infer<typeof editTaskSchema>;
