import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Modal = ({
  open,
  onClose,
  category,
  description,
  extraPrice,
  height,
  length,
  photos,
  productTitle,
  regularPrice,
  status,
  taxAmount,
  totalStock,
  weight,
  width,
}) => {
  // Hook to access theme properties
  const theme = useTheme();
  // Hook to determine if the screen size is below the "md" breakpoint
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">Product Details</DialogTitle>

      <DialogContent>
        <DialogContentText
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          {/* Display product photos */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
              marginTop: 2,
            }}
          >
            {photos?.map((photo, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  width: 100,
                  height: 100,
                }}
              >
                <img
                  src={photo}
                  alt="image"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            ))}
          </Box>

          {/* Display product details */}
          <Typography>Product title: {productTitle}</Typography>
          <Typography>Description: {description}</Typography>
          <Typography>Regular price: {regularPrice}</Typography>
          <Typography>Extra price: {extraPrice}</Typography>
          <Typography>Tax amount: {taxAmount}</Typography>
          <Typography>Weight: {weight}</Typography>
          <Typography>Length: {length}</Typography>
          <Typography>Height: {height}</Typography>
          <Typography>Width: {width}</Typography>
          <Typography>Total stock: {totalStock}</Typography>
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        {/* Close button to dismiss the dialog */}
        <Button variant="outlined" onClick={() => onClose()} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
