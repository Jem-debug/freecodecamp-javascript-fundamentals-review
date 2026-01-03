let inventory = [];

const findProductIndex = (prodName) => {
  const lowerCaseName = prodName.toLowerCase();
  return inventory.findIndex(
    prod => prod.name.toLowerCase() === lowerCaseName
  );
};

const addProduct = (prodObj) => {
  const name = prodObj.name.toLowerCase();
  const quantity = prodObj.quantity;

  const product = inventory.find(
    prod => prod.name.toLowerCase() === name
  );

  if (!product) {
    inventory.push({ name, quantity });
    console.log(`${name} added to inventory`);
    return;
  }

  if (quantity > 0) {
    product.quantity += quantity;
    console.log(`${name} quantity updated`);
  }
};

const removeProduct = (name, qty) => {
  const lowerCaseName = name.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === lowerCaseName) {

      if (inventory[i].quantity < qty) {
        console.log(
          `Not enough ${lowerCaseName} available, remaining pieces: ${inventory[i].quantity}`
        );
        return;
      }

      inventory[i].quantity -= qty;

      if (inventory[i].quantity === 0) {
        inventory.splice(i, 1);
      } else {
        console.log(
          `Remaining ${lowerCaseName} pieces: ${inventory[i].quantity}`
        );
      }
      return;
    }
  }

  console.log(`${lowerCaseName} not found`);
};
