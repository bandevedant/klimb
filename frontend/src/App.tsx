import React from 'react';
import ExcelUpload from './components/ExcelUpload';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="app-container">
            <header className="app-header">
                <div className="header-content">
                    <h1 className="page-title">Candidate Upload</h1>
                </div>
            </header>

            <main className="app-main">
                <section className="upload-section">
                    <div className="upload-header">
                        <h2>Upload Candidate Spreadsheet</h2>
                        <p>Easily import candidate data from Excel files</p>
                    </div>
                    <ExcelUpload />
                </section>
            </main>
        </div>
    );
};

export default App;