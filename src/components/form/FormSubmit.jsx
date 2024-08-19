import { Box, Button } from "@mui/material";

const FormSubmit = ({ activeStep, steps }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
      {/* Spacer to push the button to the end of the flex container */}
      <Box sx={{ flex: "1 1 auto" }} />

      {/* Button to either submit the form or move to the next step */}
      <Button type="submit" variant="outlined">
        {/* Conditionally render button text based on the current step */}
        {activeStep === steps.length - 1 ? "Submit" : "Next"}
      </Button>
    </Box>
  );
};

export default FormSubmit;
