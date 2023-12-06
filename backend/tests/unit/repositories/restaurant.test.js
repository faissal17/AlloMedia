const Chance = require("chance");
const {
  restaurantRepository,
} = require("../../../src/frameworks/repositories/mongo");
const { Restaurant } = require("../../../src/entities");
const mongoose = require("mongoose");

const chance = new Chance();

describe("Restaurant repository", () => {
  test("new Restaurant should be added and returned", async () => {
    const testRestaurant = new Restaurant({
      name: chance.name(),
      description: chance.sentence(),
      slug: chance.word(),
      picture: chance.url(),
      status: chance.integer({ min: 0, max: 1 }),
      tags: [new mongoose.Types.ObjectId()],
      brands: [new mongoose.Types.ObjectId()],
      categories: [new mongoose.Types.ObjectId()],
      cuisines: [new mongoose.Types.ObjectId()],
      localisation: {
        latitude: chance.latitude(),
        longitude: chance.longitude(),
      },
      menu: new mongoose.Types.ObjectId(),
    });

    const addRestaurant = await restaurantRepository.add(testRestaurant);

    expect(addRestaurant).toBeDefined();
    expect(addRestaurant.id).toBeDefined();
    expect(addRestaurant.name).toBe(testRestaurant.name);
    expect(addRestaurant.description).toBe(testRestaurant.description);
    expect(addRestaurant.slug).toBe(testRestaurant.slug);
    expect(addRestaurant.picture).toBe(testRestaurant.picture);
    expect(addRestaurant.status).toBe(testRestaurant.status);
    expect(addRestaurant.tags).toEqual(testRestaurant.tags);
    expect(addRestaurant.brands).toEqual(testRestaurant.brands);
    expect(addRestaurant.categories).toEqual(testRestaurant.categories);
    expect(addRestaurant.cuisines).toEqual(testRestaurant.cuisines);
    expect(addRestaurant.localisation).toEqual(testRestaurant.localisation);
    expect(addRestaurant.menu).toBe(testRestaurant.menu);

    const returnRestaurant = await restaurantRepository.getById(
      addRestaurant.id
    );
    expect(returnRestaurant).toEqual(addRestaurant);
  });
});
