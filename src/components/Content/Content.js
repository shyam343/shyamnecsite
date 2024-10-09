import React from 'react';
import './Content.css';

const Content = ({ searchTerm }) => {
  const highlightText = (text) => {
    if (!searchTerm) return text; // Return original text if no search term
    const regex = new RegExp(`(${searchTerm})`, 'gi'); // Create regex for case-insensitive matching
    return text.split(regex).map((part, index) => 
      regex.test(part) ? <span key={index} className="highlight">{part}</span> : part
    );
  };

  return (
    <div className="content">
      <h1 className="welcome">WELCOME TO SAH NECPREPARATION</h1>
      <p className="subtitle">
       NEC Question Answer Preparation For NEC License Exam.
      </p>
      
      <div className="card-container">
        {/* Computer Engineering Card */}
        <div className="card">
          <h2 className="card-title">{highlightText('Computer Engineering.')}</h2>
          <ul>
            <li>{highlightText('1. Concept of Basic Electrical and Electronics Engineering')} <a href="https://drive.google.com/file/d/12YX8xs2jKyjxFyUTWHkZcotKQW9Wej4W/view?usp=drive_link " target="_blank" rel="noopener noreferrer">PDF</a></li>
            <li>{highlightText('2. Digital Logic and Microprocessor.')} <a href="https://drive.google.com/file/d/1sErTm4s-EOAbXElS5Fs0l9arbtZHmHSk/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('3. Programming Language and Its Applications.')} <a href="https://drive.google.com/file/d/1nZcNHsIZXy4K1hsqglnBjVxesm3v-J6R/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('4. Computer Organization and Embedded System.')} <a href="https://drive.google.com/file/d/1f1YrTYGdUKIfZmB4IIDHlhzTNQPnas34/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('5. Concept of Basic Electrical and Electronics Engineering.')} <a href="https://drive.google.com/file/d/1ItlFIdcxMO-dYc7qTzHZ_3Nsss04j-DM/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('6. Digital Logic and Microprocessor.')} <a href="https://drive.google.com/file/d/1F4agVAv7KG6H5xrgyHFgukPJc69rubS3/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('7. Programming Language and Its Applications.')} <a href="https://drive.google.com/file/d/1UWkQOsmNGQnPgFmoHquRasfMivtGFNM9/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('8. Computer Organization and Embedded System.')} <a href="https://drive.google.com/file/d/1UWkQOsmNGQnPgFmoHquRasfMivtGFNM9/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('9. Concept of Basic Electrical and Electronics Engineering.')} <a href="https://drive.google.com/file/d/1Iz-rsEYY_MIBdUWG5h2WUXHWk8-Eqe5p/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('10. Digital Logic and Microprocessor.')} <a href="https://drive.google.com/file/d/1P6hJAFkb8bUkl8P1i_5LGVlXezEGO8hY/view?usp=drive_link">PDF</a></li>
          </ul>
          <a href="https://drive.google.com/file/d/1O-j9S8qdoz9OZfkdKoR3u2WKxhrj2IE5/view?usp=drive_link" className="download-btn"> 
            <button>Download Syllabus</button>
          </a>
        </div>

        {/* Civil Engineering Card */}
        <div className="card">
          <h2 className="card-title">{highlightText('Civil Engineering')}</h2>
          <ul> 
            <li>{highlightText('1. Basic Civil Engineering')} <a href="https://drive.google.com/file/d/1LmYAnGHo85aJfMkSoWiK4hR2JaCViZLy/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('2. Soil Mechanics and Foundation Engineering.')} <a href="https://drive.google.com/file/d/1WKB4Ov24kTxhQ3C7nw4GLTaEVkfyWKJi/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('3. Basic Water Resources Engineering.')} <a href="https://drive.google.com/file/d/1Fg_JQr6Gyd2C2NjLmeW7pmXCBSXrMKJT/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('4. Structural Mechanics.')} <a href="https://drive.google.com/file/d/1p42deDeGm8CtjutuxPlDOqA6ByLf8MN6/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('5. Design of Structures.')} <a href="https://drive.google.com/file/d/1a5CrZsTOAwbkAq_AfyzU9aJ77RTmjIPT/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('6. Water Supply, Sanitation and Environment.')} <a href="https://drive.google.com/file/d/1YW5zcYXYC0dT7ux6WMmj4Fgu7lNZYM35/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('7. Irrigation and Drainage.')} <a href="https://drive.google.com/file/d/1Hf0zTXGON5FG5Mq0l4KpZqOmHdyVUSn_/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('8. Hydropower.')} <a href="https://drive.google.com/file/d/1BwgDhuHI1DggwqETkGLqDOFpc189IVCw/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('9. Transportation.')} <a href="https://drive.google.com/file/d/1mP1a9qPwvjoiFbkDf5duWNT43lDKBzIn/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('10. Project Planning, Design and Implementation.')} <a href="https://drive.google.com/file/d/1VsrW1vtVQFuEiXth0WPf57ZUaKT6IEFJ/view?usp=drive_link">PDF</a></li>
          </ul>
          <a href="https://drive.google.com/file/d/1xqNRmwGvxKTZlngAVmfV4Ywyxq_r81c-/view?usp=drive_link" className="download-btn"> 
            <button>Download Syllabus</button>
          </a>
        </div>

        {/* Electrical & Electronic Engineering */}
        <div className="card">
          <h2 className="card-title">{highlightText('Electronics and Communication Engineering')}</h2>
          <ul>
            <li>{highlightText('1. Concept of Basic Electrical and Electronics Engineering')} <a href="https://drive.google.com/file/d/12YX8xs2jKyjxFyUTWHkZcotKQW9Wej4W/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('2. Digital Logic and Microprocessor.')} <a href="https://drive.google.com/file/d/1sErTm4s-EOAbXElS5Fs0l9arbtZHmHSk/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('3. Programming Language and Its Applications.')} <a href="https://drive.google.com/file/d/1nZcNHsIZXy4K1hsqglnBjVxesm3v-J6R/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('4. Computer Organization and Embedded System.')} <a href="https://drive.google.com/file/d/1f1YrTYGdUKIfZmB4IIDHlhzTNQPnas34/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('5. Concept of Basic Electrical and Electronics Engineering.')} <a href="https://drive.google.com/file/d/1ItlFIdcxMO-dYc7qTzHZ_3Nsss04j-DM/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('6. Digital Logic and Microprocessor.')} <a href="https://drive.google.com/file/d/1F4agVAv7KG6H5xrgyHFgukPJc69rubS3/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('7. Programming Language and Its Applications.')} <a href="https://drive.google.com/file/d/1UWkQOsmNGQnPgFmoHquRasfMivtGFNM9/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('8. Computer Organization and Embedded System.')} <a href="https://drive.google.com/file/d/1UWkQOsmNGQnPgFmoHquRasfMivtGFNM9/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('9. Concept of Basic Electrical and Electronics Engineering.')} <a href="https://drive.google.com/file/d/1Iz-rsEYY_MIBdUWG5h2WUXHWk8-Eqe5p/view?usp=drive_link">PDF</a></li>
            <li>{highlightText('10. Digital Logic and Microprocessor.')} <a href="https://drive.google.com/file/d/1P6hJAFkb8bUkl8P1i_5LGVlXezEGO8hY/view?usp=drive_link">PDF</a></li>
          </ul>
          <a href="https://drive.google.com/file/d/1O-j9S8qdoz9OZfkdKoR3u2WKxhrj2IE5/view?usp=drive_link" className="download-btn"> 
            <button>Download Syllabus</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Content;
