import { useState } from "react";
import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  // using debounced method for adding a delay to input filter
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 700);
  return (
    <span>
      Search:{" "}
      <input
        type="text"
        // value={filter || ""}
        value={value || ""}
        // onChange={(e) => setFilter(e.target.value)}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  );
};

export default GlobalFilter;
