import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FaDrumstickBite } from "react-icons/fa6";
import Slide from "@mui/material/Slide";
import {
  useAddItemMutation,
  useGetItemQuery,
  useDeleteItemMutation,
  useUpdateItemMutation,
} from "../redux/service/items/itemApi";
import { useGetCategoryQuery } from "../redux/service/categories/categoryApi";
import { useGetBrandQuery } from "../redux/service/brands/brandApi";
import CustomInput from "../components/common/Input";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Items = () => {
  const [open, setOpen] = React.useState(false);
  const [valueModel, setModel] = useState(false);

  const [valueItem, setItem] = useState({
    title: "",
    short_description: "",
    description: "",
    r_price: "",
    s_price: "",
    brand: "65686df92b194abd88cf7e7f",
    category: "6564d9b30a02cf61e2ff1e63",
    // menu:'',
    tags: [
      "6564bbe65a2330d43ecc11b1",
      "6564bbe65a2330d43ecc11b2",
      "6564bbe65a2330d43ecc11b3",
    ],
  });
  const [itemOnce, setItemOnce] = useState({
    id: "",
    ...valueItem,
  });
  console.log("items once");
  console.log(itemOnce);

  const {
    data: categories,
    error: errorCategories,
    isLoading: isLoadingCategories,
    refetch: refetchCategories,
  } = useGetCategoryQuery();
  //console.log('all category')
  //console.log(categories)
  const {
    data: items,
    error: errorItems,
    isLoading: isLoadingItems,
    refetch: refetchItems,
  } = useGetItemQuery();

  const {
    data: brands,
    error: errorBrands,
    isLoading: isLoadingBrands,
    refetch: refetchBrands,
  } = useGetBrandQuery();

  //console.log("brands",brands);

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
    setItemOnce((prevItemOnce) => ({ ...prevItemOnce, ["id"]: e.target.id }));
    setOpen(true);
    setModel(true);
  };

  const handleChange = (e) => {
    // console.log('fou tooo')
    // console.log(valueItem)
    if (e.target.name === "s_price" || e.target.name === "r_price") {
      setItem({ ...valueItem, [e.target.name]: parseInt(e.target.value) });
      setItemOnce((prevItemOnce) => ({
        ...prevItemOnce,
        [e.target.name]: parseInt(e.target.value),
      }));
    } else {
      setItem({ ...valueItem, [e.target.name]: e.target.value });
      setItemOnce((prevItemOnce) => ({
        ...prevItemOnce,
        [e.target.name]: e.target.value,
      }));
    }
  };
  console.log("items", items);
  const handleSubmit = async () => {
    // console.log('fucking handleSubmit')
    // console.log(valueItem)
    await addItem(valueItem);
    setOpen(false);
    refetchItems();
  };

  const handleDelete = async (e) => {
    await deleteItem({
      id: e.target.id,
    });
    refetchItems();
  };

  const handleSubmitEdit = async (e) => {
    console.log(itemOnce);
    await updateItem({ ...itemOnce });
    setOpen(false);
    refetchItems();
  };

  const handleClick = async (e) => {
    console.log("ohh fuck");
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
        <DialogTitle>{"Create Item"}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            className="flex justify-center w-full"
          >
            <div className="flex flex-col md:flex-row justify-center pt-8">
              <div className="w-full">
                <div className="mb-4">
                  <input
                    className=" border border-gray-400 rounded-lg w-full p-3"
                    id="title"
                    name="title"
                    type="text"
                    onChange={handleChange}
                    placeholder="title"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="short_description"
                    name="short_description"
                    type="text"
                    onChange={handleChange}
                    placeholder="short_description"
                  ></textarea>
                </div>
                <div className="mb-4">
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    name="description"
                    type="text"
                    onChange={handleChange}
                    placeholder="description"
                  ></textarea>
                </div>
                <div className="mb-4 flex items-center gap-2 ">
                  <div className=" w-[50%]">
                    <input
                      className=" border border-gray-400 rounded-lg w-full p-3"
                      id="r_price"
                      name="r_price"
                      type="text"
                      onChange={handleChange}
                      placeholder="r_price"
                    />
                  </div>
                  <div className=" w-[50%]">
                    <input
                      className=" border border-gray-400 rounded-lg w-full p-3"
                      id="s_price"
                      name="s_price"
                      type="text"
                      onChange={handleChange}
                      placeholder="s_price"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <FormControl fullWidth>
                    <InputLabel id="">Brand</InputLabel>
                    <Select
                      id="brand"
                      name="brand"
                      value={valueItem.brand}
                      onChange={handleChange}
                    >
                      {brands &&
                        brands.content.map((brand, index) => (
                          <MenuItem key={brand._id} value={brand._id}>
                            {brand.name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="mb-4">
                  <FormControl fullWidth>
                    <InputLabel id="">Category</InputLabel>
                    <Select
                      id="category"
                      name="category"
                      value={valueItem.category}
                      onChange={handleChange}
                    >
                      {isLoading && (
                        <div className="w-10 h-10 border-4 border-red-500 rounded-full animate-spin"></div>
                      )}
                      {categories &&
                        categories.content.map((category, index) => (
                          <MenuItem key={category._id} value={category._id}>
                            {category.name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="mb-4"></div>
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
