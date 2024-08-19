import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: {},
  products: [],
  idCounter: 1,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductInfo: (state, action) => {
      state.product = {
        ...state.product,
        ...action.payload,
        id: state.idCounter,
      };

      if (Object.keys(state.product).length >= 13) {
        const product = {
          productTitle: state.product.productTitle,
          description: state.product.description,
          category: state.product.category,
          _id: state.idCounter,
          photos: state.product.photos,
          regularPrice: parseFloat(state.product.regularPrice),
          extraPrice: parseFloat(state.product.extraPrice),
          taxAmount: parseFloat(state.product.taxAmount),
          weight: parseFloat(state.product.weight),
          length: parseFloat(state.product.length),
          height: parseFloat(state.product.height),
          width: parseFloat(state.product.width),
          totalStock: parseFloat(state.product.totalStock),
        };

        state.products.push(product);
        state.product = {};
        state.idCounter += 1;
      }
    },
  },
});

export const { addProductInfo } = productSlice.actions;

export default productSlice.reducer;
