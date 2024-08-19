import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

const ManageProduct = () => {
  // Extract product details from the Redux store
  const { products } = useSelector((state) => state.products);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "productTitle",
      headerName: "Product Title",
      width: 150,
    },
    {
      field: "description",
      headerName: "Description",
      width: 250,
    },
    {
      field: "category",
      headerName: "Category",
      width: 110,
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
    },

    {
      field: "productCategory",
      headerName: "Product Category",
      width: 220,
    },
    {
      field: "regularPrice",
      headerName: "Regular Price",
      width: 110,
      type: "number",
    },
    {
      field: "extraPrice",
      headerName: "Extra Price",
      width: 110,
      type: "number",
    },

    {
      field: "action",
      headerName: "Action",
      width: 110,
    },
  ];

  const rows = products;
  console.log(rows);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default ManageProduct;
