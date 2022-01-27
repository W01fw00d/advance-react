// TODO: add the upper depth object key to the flattened object, like "userName"

const multipleDepthsObject = {
  user: {
    name: "Pedro",
    email: "pedro.fake@gmail.com",
    age: "50",
  },
  active: true,
  address: {
    /* street: {
      name: "Street",
      number: "11",
    }, */
    PC: "000000",
  },
  // itemsBought: ["TV", "Box", "Sofa"], // TODO: flatten arrays like "itemsBought1: "TV"
};

const flatten = (objectToFlatten, previousKey) => {
  const keys = Object.keys(objectToFlatten);
  console.log({ keys });

  const result = keys.reduce((total, currentKey) => {
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const combinedCurrentKey = previousKey
      ? previousKey + capitalizeFirstLetter(currentKey)
      : currentKey;

    console.log({ total, combinedCurrentKey });

    const currentValue = objectToFlatten[currentKey];
    console.log({ currentValue });

    if (typeof currentValue === "object") {
      return { ...total, ...flatten(currentValue, currentKey) };
    } else {
      total[combinedCurrentKey] = currentValue;
      return total;
    }
  }, {});

  return result;
};

console.log("FINAL RESULT:", flatten(multipleDepthsObject));

// Current:
/* FINAL RESULT: {
  name: 'Pedro',
  email: 'pedro.fake@gmail.com',
  age: '50',
  active: true
} */
