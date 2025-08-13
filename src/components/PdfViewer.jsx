import React from 'react';

export default function PdfViewer({ url, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-4 z-50"
      onClick={onClose}
      style={{ cursor: 'pointer' }}
    >
      <div
        className="bg-white rounded shadow-lg w-full max-w-4xl h-[80vh] relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the PDF viewer
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-900"
        >
          Close
        </button>
        <iframe
          src={url}
          title="PDF Viewer"
          width="100%"
          height="100%"
          className="rounded"
          frameBorder="0"
        />
      </div>
    </div>
  );
}
