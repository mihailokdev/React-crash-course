function Overlay(props) {
  function cancelOverlay() {
    props.onCancel();
  }

  return (
    <div className="modal">
      <p>Are You Sure?</p>
      <button className="btn btn--alt" onClick={cancelOverlay}>
        Cancel
      </button>
      <button className="btn" onClick={cancelOverlay}>
        Confirm
      </button>
    </div>
  );
}

export default Overlay;
