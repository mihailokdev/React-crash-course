import { useState } from "react";
import Backdrop from "./Backdrop";
import Overlay from "./Overlay";

function Todo(props) {
  const [showModal, setShowModal] = useState(false);

  function deleteHandler() {
    setShowModal(true);
  }

  function closeOverlay() {
    setShowModal(false);
  }

  const { text } = props;
  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {showModal && <Overlay onCancel={closeOverlay} />}
      {showModal && <Backdrop onClick={closeOverlay} />}
    </div>
  );
}

export default Todo;
