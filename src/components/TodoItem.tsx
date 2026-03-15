import type { PrimitiveAtom } from "jotai";
import { useAtom } from "jotai";
import { CloseOutlined } from "@ant-design/icons";

import type { TodoType, RemoveFn } from "../common/store/todo";

const Todoitem = (props: TodoItemProps) => {
  const { atom, remove } = props;
  const [item, setItem] = useAtom(atom);
  const toggleCompleted = () => {
    setItem((props) => ({ ...props, completed: !props.completed }));
  };

  return (
    <>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={toggleCompleted}
      />
      <span style={{ textDecoration: item.completed ? "line-through" : "" }}>
        {item.title}
      </span>
      <CloseOutlined onClick={() => remove(atom)} />
    </>
  );
};

type TodoItemProps = {
  atom: PrimitiveAtom<TodoType>;
  remove: RemoveFn;
};

export default Todoitem;
