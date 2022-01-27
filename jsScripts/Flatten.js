const multipleDepthsObject = {
  user: {
    name: "Pedro",
    email: "pedro.fake@gmail.com",
    age: "50",
  },
  active: true,
  address: {
    street: {
      name: "Street",
      number: "11",
    },
    PC: "000000",
  },
  // itemsBought: ["TV", "Box", "Sofa"], // TODO: flatten arrays like "itemsBought1: "TV"
};

// Current:
/* FINAL RESULT: {
  userName: 'Pedro',
  userEmail: 'pedro.fake@gmail.com',
  userAge: '50',
  active: true,
  addressStreetName: 'Street',
  addressStreetNumber: '11',
  addressPC: '000000'
} */

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const flatten = (objectToFlatten, previousKeys = []) =>
  Object.keys(objectToFlatten).reduce((total, currentKey) => {
    const currentKeys = [...previousKeys, currentKey];
    const currentValue = objectToFlatten[currentKey];

    if (typeof currentValue === "object") {
      return {
        ...total,
        ...flatten(currentValue, currentKeys),
      };
    } else {
      total[
        currentKeys
          .map((key, index) => {
            if (index !== 0) {
              return capitalizeFirstLetter(key);
            }

            return key;
          })
          .join("")
      ] = currentValue;
      return total;
    }
  }, {});

console.log("FINAL RESULT:", flatten(multipleDepthsObject));
