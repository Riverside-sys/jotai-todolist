import { useSetAtom } from "jotai";
import { todosAtom, type RemoveFn } from "../common/store/todo";
import { atom } from "jotai";
import type { FormEvent } from "react";
import type { TodoType } from "../common/store/todo";
import Filter from "./Filter";
import Filtered from "./Filtered";

const Todolist = () => {
  const setTodos = useSetAtom(todosAtom);

  const remove: RemoveFn = (todo) =>
    setTodos((prev) => prev.filter((item) => item !== todo));
  const add = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = e.currentTarget.inputTitle.value;
    e.currentTarget.inputTitle.value = "";

    setTodos((prev) => [...prev, atom<TodoType>({ title, completed: false })]);
  };

  return (
    <form onSubmit={add}>
      <Filter />
      <input name="inputTitle" placeholder="Type..." />
      <Filtered remove={remove} />
    </form>
  );
};

export default Todolist;
