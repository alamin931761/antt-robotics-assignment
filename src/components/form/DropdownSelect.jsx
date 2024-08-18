import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Controller } from "react-hook-form";

const DropdownSelect = ({ label, register, errors, control, name }) => {
  return (
    <Box>
      {/* FormControl wrapper to style the select dropdown */}
      <FormControl variant="standard" fullWidth>
        {/* InputLabel to provide a label for the select dropdown */}
        <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>

        {/* Controller component from react-hook-form to manage form state */}
        <Controller
          name={name}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              {...field}
              label={label}
            >
              {/* MenuItem for each option in the dropdown */}
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Smart Devices">Smart Devices</MenuItem>
              <MenuItem value="Tools">Tools</MenuItem>
            </Select>
          )}
        />
      </FormControl>

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

export default DropdownSelect;
