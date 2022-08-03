import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../stores/todo";

export default function EditTodo({ data, close }) {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState(data.title);
  const [done, setDone] = useState(data.done);

  const submitHandle = (e) => {
    e.preventDefault();

    dispatch(
      editTodo({
        id: data.id,
        title: todo,
        done,
      })
    );
    close();
  };

  return (
    <div>
      <span>Edit Todo</span>
      <form onSubmit={submitHandle}>
        <div className="form-body">
            <input
              className="input-text"
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <label>
              <input
                className="input-check"
                type="checkbox"
                checked={done}
                onChange={(e) => setDone(e.target.checked)}
              />
              Done
            </label>
        </div>
        <button type="submit">Save</button>
      </form>
      <button onClick={close}>Close</button>
    </div>
  );
}
