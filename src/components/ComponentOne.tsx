import { FC, useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

interface ComponentOneProps {
  data: IncomingData[] | undefined;
}

export interface IncomingData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Iuser {
  0: string;
  1: string;

  2: string;
}

const ComponentOne: FC<ComponentOneProps> = ({ data }) => {
  const [user, setUser] = useState<Iuser | null>();

  useEffect(() => {
    const userData: Iuser | null = JSON.parse(
      localStorage.getItem("user") || "null"
    );
    setUser(userData);
  }, []);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "userId",
      headerName: "User ID",
      width: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "Title",
      width: 150,
      editable: true,
    },
    {
      field: "body",
      headerName: "Body",
      width: 400,
    },
  ];

  return (
    <div>
      <div>
        <div className="user">
          <AccountCircleRoundedIcon fontSize="large" />
          <span>
            <h1>Hello ,</h1>
          </span>
          <h1>{user?.[0]}</h1>
        </div>
        <Box
          sx={{
            height: 400,
            width: {
              xs: '90%', 
              sm: '100%', 
            },
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "20px",
            paddingTop: "30px",
          }}
        >
          <DataGrid
            rows={data || []}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            sx={{
              "& .MuiDataGrid-root": {
                backgroundColor: "white",
              },
              "& .MuiDataGrid-cell": {
                fontFamily: "Poppins, sans-serif",
              },
              "& .MuiDataGrid-columnHeaders": {
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif",
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif",
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </div>
  );
};

export default ComponentOne;
