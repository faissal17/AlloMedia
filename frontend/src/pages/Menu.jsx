import React, { useState } from "react";
import pizza from "../assets/pizza.jpg";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import InputLabel from "@mui/material/InputLabel";
import { RiDeleteBinLine, RiMapPin2Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useGetAllRestaurantsQuery } from "../redux/service/restaurant/restaurantApi";
import {
  useCreateMenuMutation,
  useGetAllMenuQuery,
  useDeleteMenuMutation,
  useUpdateMenuMutation,
} from "../redux/service/menu/menuApi";
import { useGetItemQuery } from "../redux/service/items/itemApi";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Menu = () => {
  const [open, setOpen] = useState(false);
  const [valueModel, setModel] = useState(false);
  const [restaurant, setRestaurant] = React.useState({
    id: "",
    name: "",
    restaurant: {},
  });

  const { data, error, isLoading } = useGetAllRestaurantsQuery();
  const {
    data: dataItems,
    error: errorItems,
    isLoading: loadingItems,
  } = useGetItemQuery();

  const [deleteMenu, { data: dataDelete, error: errorDelete }] =
    useDeleteMenuMutation();
  const [updateMenu, { data: dataUpdate, error: errorUpdate }] =
    useUpdateMenuMutation();

  const { data: dataMenu, error: errorMenu, refetch } = useGetAllMenuQuery();
  const [createMenu, { data: dataCreate, error: errorCreate }] =
    useCreateMenuMutation();

  const handleClickOpen = () => {
    setOpen(true);
    setModel(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;

    await setRestaurant((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    await createMenu(restaurant);
    setOpen(false);
    refetch();
  };

  const handleDelete = async (e) => {
    console.log(e.target.id);
    await deleteMenu({
      id: e.target.id,
    });
    refetch();
  };

  const handleEdit = async (e) => {
    console.log("id", e.target.id);
    await setRestaurant({
      id: e.target.id,
    });
    setOpen(true);
    setModel(true);
  };

  const handleSubmitEdit = async (e) => {
    console.log(restaurant);
    await updateMenu(restaurant);
    setOpen(false);
    refetch();
  };

  console.log(dataMenu);
  return (
    <React.Fragment>
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Menu</h1>
        <button
          onClick={handleClickOpen}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Create
        </button>
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
              Restaurant
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
              Status
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date
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
          {dataMenu?.content.map((item) => (
            <tr key={item._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-10 w-10 rounded-full" src={pizza} />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {item?.name}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {item?.restaurant?.name}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {item?.user?.first_name + " " + item?.user?.last_name}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {item?.status
                    ? item?.status === 1
                      ? "Active"
                      : "Inactive"
                    : "Inactive"}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item?.createdAt}
              </td>
              <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900">
                  <AiOutlineEdit
                    id={item._id}
                    onClick={handleEdit}
                    className="inline-block text-xl"
                  />
                </button>
                <button className="ml-2 text-red-600 hover:text-red-900">
                  <RiDeleteBinLine
                    id={item._id}
                    onClick={handleDelete}
                    className="inline-block text-xl"
                  />
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
        <DialogTitle>{"Create Menu"}</DialogTitle>
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
                    type="text"
                    name="name"
                    onChange={handleChange}
                    placeholder="name"
                  />
                </div>
                <div className="mb-4">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Restaurants
                    </InputLabel>
                    <NativeSelect
                      defaultValue={"test"}
                      inputProps={{
                        name: "restaurant",
                        id: "demo-simple-select-label",
                      }}
                      onChange={handleChange}
                    >
                      <option value={"test"}>test</option>
                      {data?.content.map((item) => (
                        <option value={item._id}>{item.name}</option>
                      ))}
                    </NativeSelect>
                  </FormControl>
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

export default Menu;
