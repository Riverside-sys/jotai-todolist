import { useAtom } from "jotai";
import { Radio } from "antd";
import { filterAtom } from "../common/store/todo";

const Filter = () => {
  const [filter, setFilter] = useAtom(filterAtom);

  return (
    <Radio.Group onChange={(e) => setFilter(e.target.value)} value={filter}>
      <Radio value="all">All</Radio>
      <Radio value="completed">Completed</Radio>
      <Radio value="incomplete">Incomplete</Radio>
    </Radio.Group>
  );
};

export default Filter;
