const express = require("express");
const Restaurant = require("../../frameworks/database/mongo/schemas/restaurants.schema");

const addRestaurent = async (req, res) => {
  const { user, name, slug, picture, status, tags, brands, categories } =
    req.body;
  if (!user || !name || !slug) {
    res.status(400).json({ message: "All field are required" });
  }
};

module.exports = addRestaurent;
