import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/ui/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { removeProduct } from "../redux/features/productSlice";

const ManageProduct = () => {
  // Extract product details from the Redux store
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle the click event to view product details
  const handleViewClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Handle the remove action for a product
  const handleRemove = (product) => {
    dispatch(removeProduct(product.id));
  };

  // Define the columns for the DataGrid
  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "productTitle",
      headerName: "Product Title",
      flex: 1,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "category",
      headerName: "Product Category",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => (
        // Render the status cell with conditional styling
        <Typography
          sx={{
            color: params.value === "Out of Stock" ? "red" : "black",
            display: "flex",
            alignItems: "center",
            height: "100%",
            fontSize: "14px",
          }}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "regularPrice",
      headerName: "Regular Price (¥)",
      flex: 1,
    },
    {
      field: "extraPrice",
      headerName: `Extra Price (¥)`,
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => (
        // Render action buttons for view and remove
        <Box>
          <Button
            sx={{ marginRight: 1 }}
            variant="outlined"
            color="primary"
            onClick={() => handleViewClick(params.row)}
          >
            View
          </Button>

          <Button
            variant="outlined"
            color="error"
            onClick={() => handleRemove(params.row)}
          >
            <CloseIcon />
          </Button>
        </Box>
      ),
    },
  ];

  // Define rows for the DataGrid
  const rows = products;

  return (
    <Box>
      <Typography component="h2" variant="h6" fontWeight={700} mb={2}>
        Product List
      </Typography>

      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
        pagination={false}
        disableRowSelectionOnClick
        autoHeight
        hideFooter
        sx={{
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
          },
        }}
      />

      {/* Modal to display product details */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        category={selectedProduct?.category}
        description={selectedProduct?.description}
        extraPrice={selectedProduct?.extraPrice}
        height={selectedProduct?.height}
        length={selectedProduct?.length}
        photos={selectedProduct?.photos}
        productTitle={selectedProduct?.productTitle}
        regularPrice={selectedProduct?.regularPrice}
        status={selectedProduct?.status}
        taxAmount={selectedProduct?.taxAmount}
        totalStock={selectedProduct?.totalStock}
        weight={selectedProduct?.weight}
        width={selectedProduct?.width}
      />
    </Box>
  );
};

export default ManageProduct;
