const { Order } = require("../../../src/entities");
const Chance = require("chance");
const chance = new Chance();
const { v4: uuidv4 } = require("uuid");

const {
  order: { addOrderUseCase,getAllOrderUseCase },
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
  };

  const dependencies = { ordersRepository: mockOrderRepo };

  describe("add order use case", () => {
    test("new order should be added", async () => {
      const fakeId = uuidv4();
      const mockOrderData = {
        id: fakeId,
        subTotal: chance.integer({ min: 50, max: 200 }), // Adjust min and max values as needed
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
});
