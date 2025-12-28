export const ModalContainer = ({
  isOpen,
  onClose,
  children,
  title,
  byline,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  byline?: string;
}) => {
  if (!isOpen) return null;
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
        {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
        {byline && <p className="text-sm text-gray-600 mb-4">{byline}</p>}
        {children}
      </div>
    </div>
  );
};
