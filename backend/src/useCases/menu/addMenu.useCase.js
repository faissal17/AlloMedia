const { Menu } = require("../../entities");
const { menuRepository } = require("../../frameworks/repositories/mongo");
module.exports = () => {
  if (!menuRepository) {
    throw new Error("menuRepository should be in dependencies");
  }
  const execute = ({ name, restaurantId, items }) => {
    const menu = new Menu({
      name,
      //   restaurantId,
      //   items,
    });
    return menuRepository.add(menu);
  };

  return {
    execute,
  };
};
