class Cuisine {
  constructor({ id, name = null, slug }) {
    this.id = id;
    this.name = name;
    this.slug = slug;
  }
}

module.exports.Cuisine = Cuisine;
