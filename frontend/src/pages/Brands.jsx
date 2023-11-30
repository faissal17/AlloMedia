import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import {
  useGetbrandQuery,
  useAddBrandMutation,
  useDeleteBrandMutation,
  useUpdateBrandMutation,
} from "../redux/service/brands/brandApi";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Brand = () => {
  const [open, setOpen] = React.useState(false);
  const [valueModel, setModel] = useState(false);
  const [valueBrand, setBrand] = useState({
    id: "",
    name: "",
  });
  const {
    data: Brand,
    error: errorBrand,
    isLoading: isLoadingBrand,
    refetch,
  } = useGetbrandQuery();

  const [addBrand, { data, error, isLoading }] = useAddBrandMutation();
  const [deleteBrand, { data: dataDelete }] = useDeleteBrandMutation();
  const [updateBrand, { data: dataUpdate }] = useUpdateBrandMutation();

  const handleClickOpen = () => {
    setOpen(true);
    setModel(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = async (e) => {
    await setBrand({
      id: e.target.id,
    });
    setOpen(true);
    setModel(true);
  };

  const handleChange = (e) => {
    setBrand({ ...brand, [e.target.id]: e.target.value });
  };

  // const handleSubmit = async () => {
  //   await addBrand(brand);

  //   setBrand({ ...valueBrand, [e.target.id]: e.target.value });
  // };

  const handleSubmit = async () => {
    await addBrand(valueBrand);

    setOpen(false);
    refetch();
  };

  const handleDelete = async (e) => {
    await deleteBrand({
      id: e.target.id,
    });
    refetch();
  };

  const handleSubmitEdit = async (e) => {
    await updateBrand({ ...brand });

    await updateBrand({ ...valueBrand });

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
      <table className="divide-gray-200 w-full mt-5">
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
              Slug
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
              Restaurant
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
          {Brand &&
            Brand.content?.map((brand) => (
              <tr key={brand.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={brand.picture}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {brand.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500"> {brand.slug} </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {brand.status === 1 ? "Active" : "Inactive"}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-nowrap">
                  {brand.restaurant}

                  {brand?.user?.first_name + " " + brand?.user?.last_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(brand.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    id={brand._id}
                    onClick={handleEdit}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit
                  </button>
                  <button
                    id={brand._id}
                    onClick={handleDelete}
                    className="ml-2 text-red-600 hover:text-red-900"
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
        <DialogTitle>{"Create brand"}</DialogTitle>
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

export default Brand;
