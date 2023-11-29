import React, { useState } from "react";
import MapManager from "../../components/Maps/mapManager.jsx";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useCreateRestaurantMutation } from "../../redux/service/restaurant/restaurantApi.js";
import { useGetCategoryQuery } from "../../redux/service/categories/categoryApi.js";
import { useGetAllTagsQuery } from "../../redux/service/tags/tagApi.js";
import { useGetAllBrandsQuery } from "../../redux/service/brands/brandApi.js";

const AddRestaurant = () => {
  const mapState = useSelector((state) => state.map);
  const [createRestaurant, { isLoading, isError, isSuccess }] =
    useCreateRestaurantMutation();

  const {
    data: categories,
    error: errorCategories,
    isLoading: loadingCategories,
  } = useGetCategoryQuery();

  const {
    data: tags,
    error: errorTags,
    isLoading: loadingTags,
  } = useGetAllTagsQuery();

  const {
    data: brands,
    error: errorBrands,
    isLoading: loadingBrands,
  } = useGetAllBrandsQuery();

  const top100Films = [{ title: "The Shawshank Redemption", year: 1994 }];

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "",
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
    await createRestaurant(formData);
  };

  return (
    <React.Fragment>
      <div className="w-full flex justify-between mt-6">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl m-4 p-10 bg-white rounded shadow-2xl flex-1"
        >
          <p className="text-blue-800 font-bold flex items-center justify-center">
            Add New Restaurant
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
                  options={brands.content}
                  getOptionLabel={(option) => option.name}
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
          <button
            type="submit"
            className="w-full px-6 py-2 text-white font-semibold tracking-wider bg-gray-900 rounded mt-5"
          >
            Add Restaurant
          </button>
        </form>

        <div className="w-2/4">
          <MapManager />
        </div>
      </div>
    </React.Fragment>
  );
};
export default AddRestaurant;