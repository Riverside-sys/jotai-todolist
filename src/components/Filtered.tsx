import { useAtom } from "jotai";
import { filteredAtom, type RemoveFn } from "../common/store/todo";
import { a, useTransition } from "@react-spring/web";
import Todoitem from "./Todoitem";

const Filtered = (props: FilteredType) => {
  const [todos] = useAtom(filteredAtom);
  const transitions = useTransition(todos, {
    keys: (todo) => todo.toString(),
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 40 },
    leave: { opacity: 0, height: 0 },
  });

  return transitions((style, atom) => (
    <a.div className="item" style={style}>
      <Todoitem atom={atom} {...props} />
    </a.div>
  ));
};

type FilteredType = {
  remove: RemoveFn;
};

export default Filtered;
