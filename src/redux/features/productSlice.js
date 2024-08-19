import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the product slice
const initialState = {
  product: {},
  products: [],
  idCounter: 1,
};

// Create the product slice using createSlice
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Reducer to add product information
    addProductInfo: (state, action) => {
      state.product = {
        ...state.product,
        ...action.payload,
        id: String(state.idCounter).padStart(6, "0"),
      };

      // Check if the product object has enough data (13 properties)
      if (Object.keys(state.product).length >= 13) {
        // Extract relevant product details to store in the products array
        const product = {
          productTitle: state.product.productTitle,
          description: state.product.description,
          category: state.product.category,
          id: state.product.id,
          photos: state.product.photos,
          regularPrice: parseFloat(state.product.regularPrice),
          extraPrice: parseFloat(state.product.extraPrice),
          taxAmount: parseFloat(state.product.taxAmount),
          weight: parseFloat(state.product.weight),
          length: parseFloat(state.product.length),
          height: parseFloat(state.product.height),
          width: parseFloat(state.product.width),
          totalStock: parseFloat(state.product.totalStock),
          status: parseFloat(state.product.totalStock)
            ? "In Stock"
            : "Out of Stock",
        };

        // Add the new product to the products array
        state.products.push(product);

        // Reset the product object for the next entry
        state.product = {};

        // Increment the ID counter for the next product
        state.idCounter += 1;
      }
    },

    // Reducer to remove a product by ID
    removeProduct: (state, action) => {
      // Filter out the product with the matching ID
      const products = state.products.filter(
        (product) => product.id !== action.payload
      );

      // Update the products array with the remaining products
      state.products = products;
    },
  },
});

// Export the actions for use in components
export const { addProductInfo, removeProduct } = productSlice.actions;

// Export the reducer to be used in the store configuration
export default productSlice.reducer;
