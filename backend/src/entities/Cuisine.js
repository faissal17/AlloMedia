class Cuisine {
  constructor({ id, name = null, slug, user }) {
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.user = user;
  }
}

module.exports.Cuisine = Cuisine;
