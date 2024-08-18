import { Box, TextField, Typography } from "@mui/material";

const Input = ({
  label,
  name,
  multiline = false,
  type = "text",
  register,
  errors,
}) => {
  return (
    <Box>
      <TextField
        id="standard-basic"
        label={label}
        variant="standard"
        fullWidth
        multiline={multiline}
        type={type}
        {...register}
      />

      {/* Display error message if there's a validation error */}
      {errors[name]?.message ? (
        <Typography color="red" fontSize="14px">
          {errors[name]?.message}
        </Typography>
      ) : (
        ""
      )}
    </Box>
  );
};

export default Input;
