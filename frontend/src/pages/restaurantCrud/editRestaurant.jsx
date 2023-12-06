import React, { useEffect, useState } from "react";
import MapManager from "../../components/Maps/mapManager.jsx";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  useCreateRestaurantMutation,
  useUpdateRestaurantMutation,
} from "../../redux/service/restaurant/restaurantApi.js";
import { useGetCategoryQuery } from "../../redux/service/categories/categoryApi.js";
import { useGetAllTagsQuery } from "../../redux/service/tags/tagApi.js";

import { useGetAllMenuQuery } from "../../redux/service/menu/menuApi.js";

import { useGetBrandQuery } from "../../redux/service/brands/brandApi.js";

import { useNavigate, useParams } from "react-router-dom";

const EditRestaurant = () => {
  const navigate = useNavigate();
  const mapState = useSelector((state) => state.map);
  const { id } = useParams();

  const [updateRestaurant, { isLoading, isError, isSuccess }] =
    useUpdateRestaurantMutation();

  const {
    data: categories,
    error: errorCategories,
    isLoading: loadingCategories,
  } = useGetCategoryQuery();

  const {
    data: menus,
    error: errorMenus,
    isLoading: loadingMenus,
  } = useGetAllMenuQuery();

  const {
    data: tags,
    error: errorTags,
    isLoading: loadingTags,
  } = useGetAllTagsQuery();

  const {
    data: brands,
    error: errorBrands,
    isLoading: loadingBrands,
  } = useGetBrandQuery();

  const top100Films = [{ title: "The Shawshank Redemption", year: 1994 }];

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "",
    menu: "",
    tags: [],
    brands: [],
    categories: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.localisation = {
      lat: mapState.location.lat,
      lng: mapState.location.lng,
    };
    formData.id = id;
    await updateRestaurant(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/dashboard/restaurant");
    }
  }, [isSuccess]);
  return (
    <React.Fragment>
      <div className="w-full flex justify-between mt-6">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl m-4 p-10 bg-white rounded shadow-2xl flex-1"
        >
          <p className="text-blue-800 font-bold flex items-center justify-center">
            Edit Restaurant
          </p>
          <div className="mt-3">
            <div className="pr-2">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  name="name"
                  label="Name"
                  variant="outlined"
                  onChange={handleInputChange}
                />
              </Box>
            </div>
          </div>
          <div className="mt-3">
            <div className="pr-2">
              <TextField
                id="outlined-multiline-static"
                label="Description"
                name="description"
                multiline
                rows={4}
                className="w-full"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mt-3">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="status"
                onChange={handleInputChange}
              >
                <MenuItem value="1">Active</MenuItem>
                <MenuItem value="0">Inactive</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex mt-3">
            <div className="pr-2">
              {tags && (
                <Stack spacing={3} sx={{ width: 500 }}>
                  <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={tags.content}
                    getOptionLabel={(option) => option.name}
                    filterSelectedOptions
                    value={formData.tags}
                    onChange={(event, newValue) =>
                      handleInputChange({
                        target: { name: "tags", value: newValue },
                      })
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="tags"
                        placeholder="tags"
                        name="tags"
                        onChange={handleInputChange}
                      />
                    )}
                  />
                </Stack>
              )}
            </div>
          </div>
          <div className="mt-3">
            {brands && (
              <Stack spacing={3} sx={{ width: 500 }}>
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={brands?.content}
                  getOptionLabel={(option) => option?.name}
                  filterSelectedOptions
                  value={formData.brands}
                  onChange={(event, newValue) =>
                    handleInputChange({
                      target: { name: "brands", value: newValue },
                    })
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Brands"
                      placeholder="Brands"
                      name="brands"
                      onChange={handleInputChange}
                    />
                  )}
                />
              </Stack>
            )}
          </div>

          <div className="pr-2 mt-3">
            {categories && (
              <Stack spacing={3} sx={{ width: 500 }}>
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={categories.content}
                  getOptionLabel={(option) => option.name}
                  filterSelectedOptions
                  value={formData.categories}
                  onChange={(event, newValue) =>
                    handleInputChange({
                      target: { name: "categories", value: newValue },
                    })
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="categories"
                      placeholder="categories"
                      name="categories"
                      onChange={handleInputChange}
                    />
                  )}
                />
              </Stack>
            )}
          </div>
          <div className="mt-3">
            {menus && (
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Menu</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="menu"
                  onChange={handleInputChange}
                >
                  {menus.content.map((menu) => (
                    <MenuItem value={menu._id}>{menu.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-6 py-2 text-white font-semibold tracking-wider bg-gray-900 rounded mt-5"
          >
            Edit Restaurant
          </button>
        </form>

        <div className="w-2/4">
          <MapManager />
        </div>
      </div>
    </React.Fragment>
  );
};
export default EditRestaurant;
