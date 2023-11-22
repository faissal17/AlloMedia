class Restaurant {
  constructor({ user, name, slug, picture, status, tags, brands, categories }) {
    this.user = user;
    this.name = name;
    this.slug = slug;
    this.picture = picture;
    this.status = status;
    this.tags = tags;
    this.brands = brands;
    this.categories = categories;
  }
}

module.exports.Restaurant = Restaurant;
