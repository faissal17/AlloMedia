const { menuRepository } = require("../../frameworks/repositories/mongo");

const slugify = require("slugify");
module.exports = () => {
  //   const { menuRepository } = dependencies;
  if (!menuRepository) {
    throw new Error("The menu repository should be exist in dependancies");
  }
  const execute = (menu) => {
    if (menu.updates.name) {
      menu.updates.slug = slugify(menu.updates.name);
    }
    return menuRepository.update(menu);
  };
  return { execute };
};
