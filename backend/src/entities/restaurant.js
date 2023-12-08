class Restaurant {
  constructor({
    user,
    name,
    slug,
    picture,
    status,
    tags,
    brands,
    categories,
    localisation,
    menu,
  }) {
    this.user = user;
    this.name = name;
    this.slug = slug;
    this.picture = picture;
    this.status = status;
    this.tags = tags;
    this.brands = brands;
    this.categories = categories;
    this.localisation = localisation;
    this.menu = menu;
  }
}

module.exports.Restaurant = Restaurant;
