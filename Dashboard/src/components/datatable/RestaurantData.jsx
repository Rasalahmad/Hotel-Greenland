import React from 'react';
import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
const RestaurantData = () => {
   
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'Menu Title',
      width: 150,
      editable: true,
    },
    {
      field: 'tiny_title',
      headerName: 'Tiny_Title',
      width: 150,
      editable: true,
    },
    
  ];
  

  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/restaurant/${params.row.title}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  const data=[
    {"id":1,
      "title": "Starter",
      "tiny_title":"BEGINNING"
    },
    {"id":2,
      "title": "Main Cousre",
      "tiny_title":"HOT DISHES"
    },
    {"id":3,
      "title": "Soups & Salads",
      "tiny_title":"SIDE DISHES"
    },
    {"id":4,
      "title": "Chef’s Pick",
      "tiny_title":"OF THE DAY"
    },
    {"id":5,
      "title": "Today’s",
      "tiny_title":"SPECIALS FOOD"
    },
    {"id":6,
      "title": "Drinks & Desserts",
      "tiny_title":"MOST DELICIOUS"
    }
  ]

  
    return (
      <div style={{display:"flex"}}>

        <div className='datatable' style={{width:"720px"}}>
            <p className='datatableTitle'>Restaurant</p>
           <DataGrid
            rows={data}
            columns={columns.concat(actionColumn)}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
           />
        </div>
          <div style={{marginTop:"62px",marginRight:"20px"}}>
          <img style={{height:"600px",width:"530px",borderRadius:"5px"}} src="https://img.freepik.com/premium-vector/young-man-relaxing-cozy-cafe-ordering-food-waiter-bring-menu_87771-9952.jpg" alt="" />
          </div>
      </div>
    );
};

export default RestaurantData;