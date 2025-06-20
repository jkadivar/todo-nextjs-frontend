"use client";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "./ui/select";
import { Loader } from "lucide-react";
import { Button } from "./ui/button";
import { EditTaskFormValues, editTaskSchema } from "@/schema/task";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {  editTask } from "@/http/tasks";
import { API_ENDPOINTS } from "@/lib/api-endpoint";
import { useRouter } from "next/navigation";
import { Task } from "@/types/tasks.type";

export const EditTaskForm = ({ task }: { task: Task }) => {
  const router = useRouter();
  const form = useForm<EditTaskFormValues>({
    resolver: zodResolver(editTaskSchema),
    defaultValues: {
      title: task.title,
      description: task.description,
      status: task.status as "To Do" | "In Progress" | "Completed",
      due_date: new Date(task.due_date).toISOString().split("T")[0],
    },
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: editTask,
    onSuccess: () => {
      form.reset();
      router.push("/");
    },
  });

  const onSubmit = async (data: EditTaskFormValues) => {
    await mutateAsync({
      queryKey: [API_ENDPOINTS.edittask(String(task.id))],
      payload: data,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-center">Edit Task Form</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Task Title"
                        {...field}
                        aria-invalid={
                          form.formState.errors.title ? "true" : "false"
                        }
                      />
                    </FormControl>
                    <FormDescription>Enter the Task title.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Task Description"
                        {...field}
                        aria-invalid={
                          form.formState.errors.description ? "true" : "false"
                        }
                      />
                    </FormControl>
                    <FormDescription>
                      Provide a brief description of the task.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="due_date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Due Date</FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          {...field}
                          aria-invalid={
                            form.formState.errors.due_date ? "true" : "false"
                          }
                        />
                      </FormControl>
                      <FormDescription>
                        Choose the due date for this task.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                          aria-invalid={
                            form.formState.errors.status ? "true" : "false"
                          }
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="To Do">To Do</SelectItem>
                              <SelectItem value="In Progress">
                                In Progress
                              </SelectItem>
                              <SelectItem value="Completed">
                                Completed
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormDescription>
                        Select the Task current status.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                disabled={isPending}
                className="w-full cursor-pointer"
              >
                {isPending ? (
                  <Loader className="h-4 w-4 animate-spin" />
                ) : (
                  "Edit Task"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
