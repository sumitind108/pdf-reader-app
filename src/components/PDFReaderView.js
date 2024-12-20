import React from 'react';

function PDFReaderView({ pdf }) {
  return (
    <div className="pdf-reader">
      {/* Display PDF title and author */}
      <h1>{pdf.name}</h1>
      <p>By: {pdf.author}</p>

      {/* Display the PDF inside an iframe */}
      <iframe
        src={pdf.pdfUrl}  // URL for the PDF
        title={pdf.name}
        width="100%"
        height="600px"
        style={{ border: 'none' }}  // Remove border for a clean look
      ></iframe>
    </div>
  );
}

export default PDFReaderView;
