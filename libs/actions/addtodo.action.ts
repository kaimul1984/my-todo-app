"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../prisma";

export async function createTodo(formData: FormData) {
  const title = formData.get("title") as string;

  if (!title.trim()) return;

  await prisma.todo.create({
    data: {
      title,
    },
  });
  revalidatePath("/");
}

export async function getTodos() {
  const todo = await prisma.todo.findMany({
    orderBy: { createdAt: "desc" },
  });

  return todo;
}

export async function editTodo(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  const newTitle = formData.get("newTitle") as string;

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

// export async function toggleTodo(id: number, completed: boolean) {
//   return await prisma.todo.update({
//     where: { id },
//     data: { completed },
//   });
// }

/**
 * Delete a todo
 */
// export async function deleteTodo(id: number) {
//   await prisma.todo.delete({ where: { id } });
//   revalidatePath("/");
// }
export async function deleteTodo(formData: FormData) {
  const inputId = formData.get("inputId") as string; // Get the ID as a string

  await prisma.todo.delete({
    where: { id: inputId },
  });
  revalidatePath("/");
}
