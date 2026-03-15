import type { PrimitiveAtom } from "jotai"
import { atom } from "jotai"

export type TodoType = {
  title: string,
  completed: boolean
}

export type RemoveFn = (item: PrimitiveAtom<TodoType>) => void;

export const filterAtom = atom<string>('all')

export const todosAtom = atom<PrimitiveAtom<TodoType>[]>([])

export const filteredAtom = atom<PrimitiveAtom<TodoType>[]>((get) => {
  const filter = get(filterAtom)
  const todos = get(todosAtom)

  if (filter === 'all') return todos
  else if (filter === 'completed')
    return todos.filter((atom) => get(atom).completed)
  else return todos.filter((atom) => !get(atom).completed)
})

