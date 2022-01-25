const user = {
  name: "Gabriel",
  email: "fake@gmail",

  /*   [Symbol.iterator]() {
    const keys = Object.getOwnPropertyNames(this);

    console.log("keys", keys);

    return {
      i: 0,
      next() {
        if (this.i < keys.length) {
          return { value: this[keys[++this.i]], done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }, */
};

console.log("FOR IN");
for (const prop in user) {
  if (user.hasOwnProperty(prop)) {
    console.log(`user.${prop} = ${user[prop]}`);
  }
}

console.log("FOR OF");
for (let [key, value] of Object.entries(user)) {
  console.log(`user.${key} = ${value}`);
}
