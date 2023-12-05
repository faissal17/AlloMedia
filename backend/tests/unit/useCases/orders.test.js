const { Order } = require("../../../src/entities");
const Chance = require("chance");
const chance = new Chance();
const { v4: uuidv4 } = require("uuid");

const {
  order: { addOrderUseCase, getAllOrderUseCase },
} = require("../../../src/useCases");

jest.mock(".././../../src/frameworks/repositories");

describe("Order use cases", () => {
  const mockOrderRepo = {
    addOrder: jest.fn(async (order) => ({
      subTotal: chance.subTotal(),
      discount: chance.discount(),
      tax: chance.tax(),
      total: chance.total(),
      firstName: chance.firstName(),
      lastName: chance.lastName(),
      email: chance.email(),
      phone: chance.phone(),
      lineOne: chance.lineOne(),
      lineTwo: chance.lineTwo(),
      city: chance.city(),
      zipCode: chance.zipCode(),
      status: {
        comment: "DONE",
      },
      id: uuidv4(),
    })),
    getAll: jest.fn(async (order) => ({
      subTotal: chance.subTotal(),
      discount: chance.discount(),
      tax: chance.tax(),
      total: chance.total(),
      firstName: chance.firstName(),
      lastName: chance.lastName(),
      email: chance.email(),
      phone: chance.phone(),
      lineOne: chance.lineOne(),
      lineTwo: chance.lineTwo(),
      city: chance.city(),
      zipCode: chance.zipCode(),
      status: {
        comment: "DONE",
      },
    })),
  };

  const dependencies = { ordersRepository: mockOrderRepo };

  describe("add order use case", () => {
    test("new order should be added", async () => {
      const fakeId = uuidv4();
      const mockOrderData = {
        id: fakeId,
        subTotal: chance.integer({ min: 50, max: 200 }),
        discount: chance.integer(),
        tax: chance.integer(),
        total: chance.integer(),
        firstName: chance.first(),
        lastName: chance.last(),
        email: chance.email(),
        phone: chance.phone(),
        lineOne: chance.address(),
        lineTwo: chance.address(),
        city: chance.city(),
        zipCode: chance.zip(),
        status: {
          comment: "DONE",
        },
      };

      mockOrderRepo.addOrder.mockResolvedValue(mockOrderData);

      const useCaseInstance = addOrderUseCase(dependencies);
      const saveOrder = await useCaseInstance.execute(mockOrderData);

      expect(saveOrder.id).toBeDefined();
      expect(saveOrder.subTotal).toEqual(mockOrderData.subTotal);
      expect(saveOrder.discount).toEqual(mockOrderData.discount);
      expect(saveOrder.tax).toEqual(mockOrderData.tax);
      expect(saveOrder.total).toEqual(mockOrderData.total);
      expect(saveOrder.firstName).toEqual(mockOrderData.firstName);
      expect(saveOrder.lastName).toEqual(mockOrderData.lastName);
      expect(saveOrder.email).toEqual(mockOrderData.email);
      expect(saveOrder.phone).toEqual(mockOrderData.phone);
      expect(saveOrder.lineOne).toEqual(mockOrderData.lineOne);
      expect(saveOrder.lineTwo).toEqual(mockOrderData.lineTwo);
      expect(saveOrder.city).toEqual(mockOrderData.city);
      expect(saveOrder.zipCode).toEqual(mockOrderData.zipCode);
      expect(saveOrder.status).toEqual({
        comment: "DONE",
      });
    }, 20000);
  });

  // test get All orders from database

  test("get all orders", async () => {
    const fakeId = uuidv4();
    const mockOrderData = {
      id: fakeId,
      subTotal: chance.integer({ min: 50, max: 200 }),
      discount: chance.integer(),
      tax: chance.integer(),
      total: chance.integer(),
      firstName: chance.first(),
      lastName: chance.last(),
      email: chance.email(),
      phone: chance.phone(),
      lineOne: chance.address(),
      lineTwo: chance.address(),
      city: chance.city(),
      zipCode: chance.zip(),
      status: {
        comment: "DONE",
      },
    };

    mockOrderRepo.addOrder.mockResolvedValue(mockOrderData);

    const useCaseInstance = getAllOrderUseCase(dependencies);
    const getOrder = await useCaseInstance.execute(mockOrderData);

    expect(getOrder.id).toBeDefined();
    expect(getOrder.subTotal).toEqual(mockOrderData.subTotal);
    expect(getOrder.discount).toEqual(mockOrderData.discount);
    expect(getOrder.tax).toEqual(mockOrderData.tax);
    expect(getOrder.total).toEqual(mockOrderData.total);
    expect(getOrder.firstName).toEqual(mockOrderData.firstName);
    expect(getOrder.lastName).toEqual(mockOrderData.lastName);
    expect(getOrder.email).toEqual(mockOrderData.email);
    expect(getOrder.phone).toEqual(mockOrderData.phone);
    expect(getOrder.lineOne).toEqual(mockOrderData.lineOne);
    expect(getOrder.lineTwo).toEqual(mockOrderData.lineTwo);
    expect(getOrder.city).toEqual(mockOrderData.city);
    expect(getOrder.zipCode).toEqual(mockOrderData.zipCode);
    expect(getOrder.status).toEqual({
      comment: "DONE",
    });
  }, 20000);
});
