import React, { useEffect, useState } from "react";
import pizza from "../../assets/pizza.jpg";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import {
  useGetCuisineQuery,
  useAddCuisineMutation,
  useDeleteCuisineMutation,
  useUpdateCuisineMutation,
} from "../../redux/service/cuisines/cuisineApi";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CuisinDashboard = () => {
  const [open, setOpen] = React.useState(false);
  const [valueModel, setModel] = useState(false);
  const [valueCategory, setCateory] = useState({
    id: "",
    name: "",
  });
  const {
    data: cuisines,
    error: errorcuisines,
    isLoading: isLoadingcuisines,
    refetch,
  } = useGetCuisineQuery();

  const [addCuisine, { data, error, isLoading }] = useAddCuisineMutation();
  const [deleteCuisine, { data: dataDelete }] = useDeleteCuisineMutation();
  const [updateCuisine, { data: dataUpdate }] = useUpdateCuisineMutation();

  const handleClickOpen = () => {
    setOpen(true);
    setModel(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = async (e) => {
    await setCateory({
      id: e.target.id,
    });
    setOpen(true);
    setModel(true);
  };

  const handleChange = (e) => {
    setCateory({ ...valueCategory, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    await addCuisine(valueCategory);
    setOpen(false);
    refetch();
  };

  const handleDelete = async (e) => {
    await deleteCuisine({
      id: e.target.id,
    });
    refetch();
  };

  const handleSubmitEdit = async (e) => {
    await updateCuisine({ ...valueCategory });
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
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              picture
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
          {cuisines &&
            cuisines.content?.map((category) => (
              <tr key={category.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {category.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {category.description}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-full h-full rounded-full"
                      src={category.picture}
                      alt=""
                    />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {category.status === 1 ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {category?.user?.first_name + " " + category?.user?.last_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(category.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    id={category._id}
                    onClick={handleEdit}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Edit
                  </button>
                  <button
                    id={category._id}
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

export default CuisinDashboard;
