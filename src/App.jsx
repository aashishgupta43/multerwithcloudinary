import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file2, setFile2] = useState(null);
  const [username, setUsername] = useState('');
const [imgUrl, setImgUrl] = useState('');
  const handleFileChange = (e) => {
    setFile2(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();


    const formData = new FormData();
    formData.append('file2', file2);
    formData.append('username', username);

    try {
      const res = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(res.data);


      alert('Upload successful!');

  setImgUrl(res.data.url);

    } catch (err) {
      console.error(err);
      alert('Upload failed.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Upload File to Express Server</h2>
      <form onSubmit={handleUpload}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br /><br />
        <input type="file" onChange={handleFileChange} required />
        <br /><br />
        <button type="submit">Upload</button>


      </form>
       
{imgUrl && <img src={imgUrl} alt="Uploaded" style={{ width: '300px' }} />}
    </div>
  );
}

export default App;
