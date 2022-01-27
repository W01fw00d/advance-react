// TODO: add the upper depth object key to the flattened object, like "userName"

const multipleDepthsObject = {
  user: {
    name: "Pedro",
    email: "pedro.fake@gmail.com",
    age: "50",
  },
  /* address: {
    street: {
      name: "Street",
      number: "11",
    },
    PC: "000000",
  }, */
  active: true,
  // itemsBought: ["TV", "Box", "Sofa"], // TODO: flatten arrays like "itemsBought1: "TV"
};

const flatten = (objectToFlatten) => {
  const keys = Object.keys(objectToFlatten);
  console.log({ keys });

  const result = keys.reduce((total, currentKey) => {
    console.log({ total, currentKey });

    const currentValue = objectToFlatten[currentKey];
    console.log({ currentValue });

    if (typeof currentValue === "object") {
      return { ...total, ...flatten(currentValue) };
    } else {
      total[currentKey] = currentValue;
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
