import { useRef } from "react";
import * as KeyCode from "keycode-js";
const Input = ({ placeHolder, action, addNewHandle, filterHandle }) => {
  const data = useRef();
  const handleKeyUp = (e) => {
    if (action === 2) {
      filterHandle(data.current.value);
    } else if (action === 1 && e.keyCode === KeyCode.KEY_RETURN) {
      addNewHandle({
        content: data.current.value,
        done: false,
      });
      data.current.value = "";
    }
  };
  const className = action === 0 ? "todo-input d-none" : "todo-input";
  return (
    <input
      className={className}
      type="text"
      placeholder={placeHolder}
      onKeyUp={handleKeyUp}
      ref={data}
      autoFocus
    />
  );
};

export default Input;
