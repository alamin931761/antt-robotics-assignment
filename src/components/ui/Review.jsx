import { Box, Button, Typography } from "@mui/material";
import Input from "../form/Input";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Review = () => {
  // Extract product details from the Redux store
  const { products } = useSelector((state) => state.products);
  const {
    productTitle,
    description,
    category,
    regularPrice,
    extraPrice,
    taxAmount,
    weight,
    length,
    height,
    width,
    totalStock,
    photos,
  } = products[products.length - 1];

  return (
    <Box>
      <Box>
        {/* Section Title: Product Details */}
        <Typography component="h1" variant="h5">
          Product Details
        </Typography>
        {/* Display the product title as a disabled input field */}
        <Input inputValue={productTitle} disabled={true} />

        {/* Display the product description as a disabled multiline input field */}
        <Input multiline={true} inputValue={description} disabled={true} />

        {/* Display the product category as a disabled input field */}
        <Input inputValue={category} disabled={true} />

        {/* Display the product pricing details as disabled input fields */}
        <Input inputValue={regularPrice} disabled={true} />
        <Input inputValue={extraPrice} disabled={true} />
        <Input inputValue={taxAmount} disabled={true} />

        {/* Section Title: Inventory Details */}
        <Typography component="h1" variant="h5">
          Inventory Details
        </Typography>
        {/* Display the product dimensions and stock details as disabled input fields */}
        <Input inputValue={weight} disabled={true} />
        <Input inputValue={length} disabled={true} />
        <Input inputValue={height} disabled={true} />
        <Input inputValue={width} disabled={true} />
        <Input inputValue={totalStock} disabled={true} />

        {/* Section Title: Add Photo */}
        <Typography component="h1" variant="h5">
          Add Photo
        </Typography>
        {/* Display product photos as a grid of images */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, marginTop: 2 }}>
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

        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          {/* Spacer to push the button to the end of the flex container */}
          <Box sx={{ flex: "1 1 auto" }} />

          <Button
            variant="outlined"
            component={Link}
            to="/manage-product"
            sx={{ textTransform: "capitalize" }}
          >
            Manage Product
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Review;
