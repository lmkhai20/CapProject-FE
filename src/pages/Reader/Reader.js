import React, { useState } from "react";
import axios from "axios";
import LoadingSpinner from "../Loading";
import "./app.scss"; // Import your SCSS file

const Reader = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [responseImage, setResponseImage] = useState("");
  const [result, setResult] = useState({});
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async () => {
    setUploading(true);
    setErrorMessage("");
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);

      try {
        const response = await axios.post(
          "http://localhost:8000/upload-image/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const { result: apiResult, image: apiImage } = response.data;

        setResult(apiResult);
        setResponseImage(apiImage);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setResponseImage("");
          setResult({});
          setErrorMessage("Error: Bad request, please check your input.");
        } else {
          setResponseImage("");
          setResult({});
          setErrorMessage("An error occurred. Please try again later.");
        }
        console.error("Error uploading image: ", error);
      } finally {
        setUploading(false); // Tắt LoadingSpinner dù có lỗi hay không
      }
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-form">
        <input
          type="file"
          onChange={handleFileChange}
          className="file-input"
          title=" "
        />
        <button onClick={handleSubmit} className="upload-button">
          Reader
        </button>
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {uploading && <LoadingSpinner />}

      {!uploading && (
        <div className="image-and-result-container">
          {responseImage && (
            <img
              src={responseImage}
              alt="Response"
              className="response-image"
            />
          )}

          <div className="result-container">
            <table className="result-table">
              <tbody>
                {Object.entries(result).map(([key, value]) => (
                  <tr key={key} className="result-item">
                    <td>
                      <strong>{key}:</strong>
                    </td>
                    <td>
                      {Array.isArray(value) ? (
                        <ul>
                          {value.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <span>{value}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reader;
