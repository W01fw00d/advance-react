const { resourceLimits } = require("worker_threads");

// TODO: add the upper depth object key to the flattened object, like "userName"

const multipleDepthsObject = {
  user: {
    name: "Pedro",
    email: "pedro.fake@gmail.com",
    age: "50",
  },
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
      return total.concat(flatten(currentValue));
    } else {
      total.push({ [currentKey]: currentValue });
      return total;
    }
  }, []);

  return result;
};

console.log("FINAL RESULT:", flatten(multipleDepthsObject));

// Current:
/* FINAL RESULT: [
    { name: 'Pedro' },
    { email: 'pedro.fake@gmail.com' },
    { age: '50' },
    { active: true }
  ]
 */
