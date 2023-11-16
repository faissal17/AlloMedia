const express = require("express");
const Restaurant = require("../../frameworks/database/mongo/schemas/restaurants.schema");

const addRestaurent = async (req, res) => {
  const { name, slug } = req.body;
  if ((!name, !slug)) {
    res.status(404).json({ message: "All field are required" });
  }
};

module.exports = addRestaurent;
