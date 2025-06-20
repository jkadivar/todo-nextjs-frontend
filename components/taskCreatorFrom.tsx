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
import { CreateTaskFormValues, createTaskSchema } from "@/schema/task";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { createTask } from "@/http/tasks";
import { API_ENDPOINTS } from "@/lib/api-endpoint";
import { useRouter } from "next/navigation";

export const CreateTaskForm = () => {
  const router = useRouter();
  const form = useForm<CreateTaskFormValues>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      title: "",
      description: "",
      status: "To Do",
      due_date: "",
    },
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      form.reset();
      router.push("/");
    },
  });

  const onSubmit = async (data: CreateTaskFormValues) => {
    await mutateAsync({
      queryKey: [API_ENDPOINTS.createtask],
      payload: data,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl text-center">Add Task</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Task Title"
                        {...field}
                        aria-invalid={
                          form.formState.errors.title ? "true" : "false"
                        }
                      />
                    </FormControl>
                    <FormDescription>Enter Task Title</FormDescription>
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
                    <FormDescription>Add a Short Description</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col md:flex-row gap-4">
                {/* Due Date Field */}
                <div className="w-full md:w-1/2">
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
                        <FormDescription>Select a Due Date</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Status Field */}
                <div className="w-full md:w-1/2">
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
                          Select the Task&apos;s status.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  type="submit"
                  disabled={isPending}
                  className="flex-1 cursor-pointer"
                >
                  {isPending ? (
                    <Loader className="h-4 w-4 animate-spin" />
                  ) : (
                    "Add Task"
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.push("/")}
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};