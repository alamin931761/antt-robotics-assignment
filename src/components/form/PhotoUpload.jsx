import { useState } from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
import { addProductInfo } from "../../redux/features/productSlice";

const PhotoUpload = ({ steps, activeStep, handleNext }) => {
  // State to store uploaded image files
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();

  // Handle file input change and generate object URLs for selected files
  const handleFileChange = (event) => {
    const selectedFiles = [...event.target.files];
    const fileUrls = selectedFiles.map((file) => URL.createObjectURL(file));
    setFiles((prevFiles) => [...prevFiles, ...fileUrls]);
  };

  // Remove an image from the files array
  const handleRemove = (file) => {
    setFiles(files.filter((image) => image !== file));
  };

  // Handle the Next button click, dispatching photos to Redux store and moving to the next step
  const handleNextButton = () => {
    dispatch(addProductInfo({ photos: files }));
    handleNext();
  };

  return (
    <Box>
      {/* Photo upload area */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* File input and upload button */}
        <Box>
          <input
            accept="image/*"
            id="file-input"
            type="file"
            multiple
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <label htmlFor="file-input">
            <Stack>
              <IconButton color="primary" component="span">
                <PhotoCamera />
              </IconButton>
              <Typography variant="body2">Upload Photos</Typography>
            </Stack>
          </label>
        </Box>

        {/* Display uploaded photos */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, marginTop: 2 }}>
          {files.map((file, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                width: 100,
                height: 100,
              }}
            >
              {/* Display each photo as a thumbnail */}
              <img
                src={file}
                alt="image"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />

              {/* Icon to remove photo */}
              <ClearIcon
                onClick={() => handleRemove(file)}
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  backgroundColor: "rgba(0,0,0,0.4)",
                  color: "white",
                  cursor: "pointer",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Navigation buttons */}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        {/* Spacer to push the button to the end of the flex container */}
        <Box sx={{ flex: "1 1 auto" }} />

        {/* Button to either submit the form or move to the next step */}
        <Button onClick={handleNextButton} disabled={files.length === 0}>
          {/* Conditionally render button text based on the current step */}
          {activeStep === steps.length - 1 ? "Submit" : "Next"}
        </Button>
      </Box>
    </Box>
  );
};

export default PhotoUpload;
