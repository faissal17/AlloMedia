class Cuisine {
  constructor({ id, name = null }) {
    this.id = id;
    this.name = name;
  }
}

module.exports.Cuisine = Cuisine;
