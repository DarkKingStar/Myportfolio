import React, { useState, useEffect } from 'react';
import data from './json/details.json'
const Edit = () => {
  const [jsonData, setJsonData] = useState(data);
  const [isEditing, setIsEditing] = useState(false);

  // Step 2: Fetch and Display JSON Data
  useEffect(() => {
    // Assuming your JSON file is named data.json
    fetch('./src/assets/json/details.json')
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  // Step 3: Edit JSON Data
  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleChange = (key, value) => {
    setJsonData(prevData => ({
      ...prevData,
      [key]: value
    }));
  }

  // Step 4: Save Edited Data
  const handleSave = () => {
    setIsEditing(false);
    // Assuming you're using Node.js with fs module to save the file
    // You'll need to handle this part server-side
    fetch('./src/assets/json/details.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonData),
    })
      .then(response => response.json())
      .then(data => console.log('Saved:', data))
      .catch(error => console.error('Error:', error));
  }

  return (
    <div style={{position:'absolute',top:"0"}}>
      {isEditing ? (
         <>
         <button onClick={handleSave}>Save</button>
         {Object.keys(jsonData).map(key => (
            <div key={key}>
              <label>{key}</label><br/>
              <input
                type="text"
                value={jsonData[key]}
                onChange={e => handleChange(key, e.target.value)}
              />
            </div>
          ))}
            </>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
    </div>
  );
}

export default Edit;
