import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import {
  useGetDeliveryQuery,
  useDeleteDeliveryMutation,
  useUpdateDeliveryMutation,
} from "../redux/service/delivery/delivery";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PersonDelivery = () => {
  const [open, setOpen] = React.useState(false);
  const [valueModel, setModel] = useState(false);
  
  const {
    data: deliveries,
    error: errorDeliveries,
    isLoading: isLoadingDeliveries,
    refetch,
  } = useGetDeliveryQuery();
  console.log('deliveries')
  console.log(deliveries)

  const [deleteDelivery, { data: dataDelete }] = useDeleteDeliveryMutation();
  const [updateDelivery, { data: dataUpdate }] = useUpdateDeliveryMutation();

  const handleClickOpen = () => {
    setOpen(true);
    setModel(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = async (e) => {
    
    setOpen(true);
    setModel(true);
  };

  const handleChange = (e) => {
    //setOrder({ ...valueOrder, [e.target.id]: e.target.value });
  };

  

  const handleDelete = async (e) => {
    await deleteDelivery({
      id: e.target.id,
    });
    refetch();
  };

  const handleSubmitEdit = async (e) => {
    //await updateOrder({ ...valueOrder });
    await updateDelivery({
      status:'CONFIRM',
      id:e.target.id
    })
    setOpen(false);
    refetch();
  };

  return (
    <React.Fragment>
      <div className="flex justify-end p-8">
        <div className="flex">
          <button
            onClick={handleClickOpen}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-5"
          >
            Add
          </button>
        </div>
      </div>
      <table className="divide-gray-200 w-full mt-5 ">
        <thead className="bg-gray-200">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              FullName
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              phoneNumber
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              City
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Vycle
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              User
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Cart National
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-100 divide-y divide-gray-200">
          {deliveries &&
            deliveries.content?.map((delivery) => (
              <tr key={delivery._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {delivery.fullName}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex-shrink-0 w-10 h-10">
                        <div className="text-sm font-medium text-gray-900">
                          {delivery.phoneNumber}
                        </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex-shrink-0 w-10 h-10">
                    <div className="text-sm font-medium text-gray-900">
                      {delivery?.city}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex-shrink-0 w-10 h-10">
                    <div className="text-sm font-medium text-gray-900">
                      {delivery?.vycle}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">

                  
                  {delivery?.user.first_name}

                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex-shrink-0 w-10 h-10">
                    <div className="text-sm font-medium text-gray-900">
                      <span id={delivery._id} onClick={handleSubmitEdit}
                      className=" p-2 cursor-pointer px-5 rounded-md "> 
                         {
                          delivery.cartNational ?  delivery.cartNational : 'No Cart'
                         }
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex-shrink-0 w-10 h-10">
                    <div className="text-sm font-medium text-gray-900">
                      <span id={delivery._id} onClick={handleSubmitEdit}
                      className=" p-2 cursor-pointer px-5 rounded-md text-yellow-500 bg-yellow-200"> 
                         {delivery?.status}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    id={delivery._id}
                    onClick={handleDelete}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth={true}
        maxWidth={"sm"}
      >
        <DialogTitle>{"Create Category"}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            className="flex justify-center w-full"
          >
            <div className="flex flex-col md:flex-row justify-center pt-8">
              <div className="w-full">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    onChange={handleChange}
                    placeholder="name"
                  />
                </div>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {!valueModel && (
            <Button
              color="primary"
              variant="contained"
              autoFocus
              onClick={()=>{}}
            >
              Create
            </Button>
          )}

          {valueModel && (
            <Button
              color="primary"
              variant="contained"
              autoFocus
              onClick={handleSubmitEdit}
            >
              Edit
            </Button>
          )}
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default PersonDelivery;
