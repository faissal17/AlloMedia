const usersRepository = require("../../../src/frameworks/repositories/mongo");

const { User } = require("../../../src/entities");

const {
  getUserByEmailUseCase,
  addUserUseCase,
} = require("../../../src/useCases/users");

jest.mock("../../../src/frameworks/repositories/mongo", () => ({
  usersRepository: {
    getByEmail: jest.fn(async (user) => ({
      email: "rachid@gmail.com",
      password: "Rachid__@",
    })),

    add: jest.fn(async (user) => ({
      first_name: "test",
      last_name: "test",
      username: "test",
      email: "test@gmail.com",
      password: "Test__@",
      mobile: "0000000000",
    })),
  },
}));

jest.mock("bcryptjs", () => ({
  compare: jest.fn(async (password, hashedPassword) => {
    return true;
  }),

  hash: jest.fn(async (password) => {
    return "Rachid__@";
  }),

  genSalt: jest.fn(async (salt) => {
    return 10;
  }),
}));

jest.mock("../../../src/config/jsonWebToken", () => ({
  sign: jest.fn(async (payload) => {}),
  verify: jest.fn(async (token) => {}),
}));

describe("User useCases", () => {
  test("login user with correct password", async () => {
    const testUser = new User({
      email: "rachid@gmail.com",
      password: "Rachid__@",
    });

    const useCaseInstance = getUserByEmailUseCase();
    const getUser = await useCaseInstance.execute(testUser);

    const { password, _id, first_name, last_name, role } = getUser;

    expect(getUser).toEqual({
      getUser: {
        email: "rachid@gmail.com",
        password: "Rachid__@",
      },
      token: undefined,
    });
  });
  test("register user", async () => {
    const user = new User({
      first_name: "test",
      last_name: "test",
      username: "test",
      email: "test@gmail.com",
      password: "Test__@",
      mobile: "0000000000",
    });

    const useCaseInstance = addUserUseCase();
    const addUser = await useCaseInstance.execute(user);

    expect(addUser).toEqual({
      first_name: "test",
      last_name: "test",
      username: "test",
      email: "test@gmail.com",
      password: "Test__@",
      mobile: "0000000000",
    });
  });
});
