import React, { useState } from 'react';
import '../styles.css'; // Import global styles

function PDFListView({ pdfs, setSelectedPdf }) {
  const [search, setSearch] = useState('');

  // Filter PDFs based on the search input (case-insensitive)
  const filteredPdfs = pdfs.filter(pdf =>
    pdf.name && pdf.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main-content">
      {/* Search input to filter PDFs */}
      <input
        type="text"
        placeholder="Search PDFs"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {/* Display message if no PDFs match the search */}
      {filteredPdfs.length === 0 ? (
        <p className="no-pdfs">No PDFs found</p>
      ) : (
        <div>
          {/* Map over filtered PDFs and display them */}
          {filteredPdfs.map(pdf => (
            <div 
              key={pdf.link} 
              className="pdf-card" 
              onClick={() => setSelectedPdf(pdf)}  // Set selected PDF when clicked
            >
              <img
                src={pdf.thumbnail || '/path/to/default-image.jpg'}  // Default image if thumbnail is missing
                alt={pdf.name}
                className="pdf-thumbnail"
              />
              <div>
                <h3>{pdf.name}</h3>
                <p>{pdf.author}</p>
                <button onClick={() => window.open(pdf.link, '_blank')}>Read PDF</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PDFListView;
