import React, { useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import LoadingSpinner from "../Loading";
import iconUpload from "../../assets/images/camera.149f7439.svg"
import "./app.scss"; // Import your SCSS file

const Reader = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [responseImage, setResponseImage] = useState("");
  const [result, setResult] = useState({});
  const [uploading, setUploading] = useState(false);
  const [exportButtonVisible, setExportButtonVisible] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setFileName(file.name);
  };

  const handleSubmit = async () => {
    setUploading(true);
    setExportButtonVisible(true);
    setErrorOccurred(false);
    setErrorMessage("");

    if (!selectedFile) {
      setErrorMessage("Please select an image.");
      // setUploading(false);
      return;
    }

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
        setErrorOccurred(true);
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

  const exportToExcel = () => {
    const data = Object.entries(result).map(([key, value]) => [key, value]); // Chuyển object thành mảng các cặp key-value

    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "result");

    const wbout = XLSX.write(wb, { type: "array", bookType: "xlsx" }); // Thay đổi từ 'blob' sang 'array'

    const blob = new Blob([wbout], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.setAttribute("download", "result.xlsx");
    document.body.appendChild(link);

    link.click();

    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 200);
  };

  return (
    <div className="upload-container">
      <div className="upload-form">
        <img src={iconUpload} alt="icon_upload_image" className="upload-icon"/>

        <label className="custom-file-upload">
          <input
            type="file"
            onChange={handleFileChange}
            className="file-input"
            title=" "
            style={{ display: 'none' }}
          />
          {/* <span>Choose file</span> */}
          <span>{fileName || 'Choose file'}</span>
        </label>

        <button onClick={handleSubmit} className="upload-button">
          Reader
        </button>
      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {uploading && !errorMessage && <LoadingSpinner />}

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
                      <strong>{key}</strong>
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
            {!errorOccurred && exportButtonVisible && (
              <button className="btnDownload" onClick={exportToExcel}>Export to Excel</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Reader;
