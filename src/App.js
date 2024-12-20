import React, { useState, useEffect } from 'react';
import PDFListView from './components/PDFListView';
import PDFReaderView from './components/PDFReaderView';
import './styles.css';

function App() {
  const [pdfs, setPdfs] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Fetch PDF data from API on component mount
  useEffect(() => {
    // Function to fetch data from the API
    const fetchPdfs = async () => {
      try {
        const response = await fetch('https://api.npoint.io/dee51ea017d20efdfcc8');
        if (!response.ok) {
          throw new Error('Failed to fetch PDFs');
        }
        const data = await response.json();
        console.log('Fetched PDFs:', data);  // Log fetched data for debugging
        setPdfs(data);  // Store fetched PDFs in state
      } catch (error) {
        console.error('Error fetching PDFs:', error);  // Log error message
      }
    };

    fetchPdfs();  // Call the fetch function
  }, []);  // Empty dependency array to run only once when the component mounts

  return (
    <div className="app">
      {/* If no PDF is selected, show the PDF list view */}
      {!selectedPdf ? (
        <PDFListView pdfs={pdfs} setSelectedPdf={setSelectedPdf} />
      ) : (
        // If a PDF is selected, show the PDF reader view
        <PDFReaderView pdf={selectedPdf} />
      )}
    </div>
  );
}

export default App;
