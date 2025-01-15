"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../prisma";
import { Todo } from "@/types";

export async function createTodo(prevState: any, formData: FormData) {
  const title = formData.get("title") as string;

  if (!title.trim()) {
    return { message: "title can not be empty" };
  }

  await prisma.todo.create({
    data: {
      title,
    },
  });
  revalidatePath("/");
}

export async function getTodos(): Promise<Todo[]> {
  const todo = await prisma.todo.findMany({
    orderBy: { createdAt: "desc" },
  });

  return todo;
}

export async function editTodo(prevState: any, formData: FormData) {
  const inputId = formData.get("inputId") as string;
  const newTitle = formData.get("newTitle") as string;

  if (!newTitle) {
    return { message: "please edit title" };
  }

  await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      title: newTitle,
    },
  });
  revalidatePath("/");
}

export async function deleteTodo(formData: FormData) {
  const inputId = formData.get("inputId") as string; // Get the ID as a string

  await prisma.todo.delete({
    where: { id: inputId },
  });
  revalidatePath("/");
}

export async function changeStatus(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  const todo = await prisma.todo.findUnique({
    where: {
      id: inputId,
    },
  });

  const updateStatus = !todo?.completed;

  await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      completed: updateStatus,
    },
  });
  revalidatePath("/");
}
