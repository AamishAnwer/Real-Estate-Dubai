// components/Modal.js
function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        {children}
        <button onClick={onClose} className="mt-4">
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
