import { useState, useEffect } from "react";

const AuthModal = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const isRegistered = localStorage.getItem("isRegistered");
    if (!isRegistered) {
      setTimeout(() => {
        setShowModal(true);
      }, 2000); // Show modal after 2 seconds
    }
  }, []);

  const handleRegister = () => {
    localStorage.setItem("isRegistered", "true");
    setShowModal(false);
    onClose();
  };

  return (
    showModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-semibold mb-4">Register to continue</h2>
          <p className="mb-4">Sign up now to access exclusive features.</p>
          <div className="flex justify-end space-x-2">
            <button
              className="bg-gray-400 text-white px-4 py-2 rounded"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default AuthModal;
