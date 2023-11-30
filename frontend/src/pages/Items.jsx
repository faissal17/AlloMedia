import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import {
  useAddItemMutation,
  useGetItemQuery,
  useDeleteItemMutation,
  useUpdateItemMutation,
} from "../redux/service/items/itemApi";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Items = () => {
  const [open, setOpen] = React.useState(false);
  const [valueModel, setModel] = useState(false);
  const [valueItem, setItem] = useState({
    title:"",
    short_description:"",
    description:"",
    r_price:0,
    s_price:0,
    brand:'',
    category:'',
    tags:[],
    menu:''

    
  });
  const {
    data: items,
    error: errorItems,
    isLoading: isLoadingItems,
    refetch,
  } = useGetItemQuery();

  const [addItem, { data, error, isLoading }] = useAddItemMutation();
  const [deleteItem, { data: dataDelete }] = useDeleteItemMutation();
  const [updateItem, { data: dataUpdate }] = useUpdateItemMutation();

  const handleClickOpen = () => {
    setOpen(true);
    setModel(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = async (e) => {
    await setItem({
      id: e.target.id,
    });
    setOpen(true);
    setModel(true);
  };

  const handleChange = (e) => {
    setItem({ ...valueItem, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    await addItem(valueItem);
    setOpen(false);
    refetch();
  };

  const handleDelete = async (e) => {
    await deleteItem({
      id: e.target.id,
    });
    refetch();
  };

  const handleSubmitEdit = async (e) => {
    await updateItem({ ...valueItem });
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
              Title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              short_description
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              brands
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              category
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              menu
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              user
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              date
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
          {items &&
            items.content?.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {item.title}
                      </div>
                      
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {item.short_description}
                      </div>
                      
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-full h-full rounded-full"
                      src={item?.brand?.picture}
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-full h-full rounded-full"
                      src={item?.category?.picture}
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-full h-full rounded-full"
                      src={item?.menu?.picture}
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {item.status === 1 ? "Active" : "Inactive"}
                  </span>
                </td>
                
                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.user?.first_name + " " + item?.user?.last_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(item.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    id={item._id}
                    onClick={handleEdit}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Edit
                  </button>
                  <button
                    id={item._id}
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
                    for="name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    name="name"
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
              onClick={handleSubmit}
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

export default Items;
