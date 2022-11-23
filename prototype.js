try {
  String.prototype.ucfirst = function () {
    return this[0].toUpperCase() + this.slice(1);
  };
  console.log("ucfirst".ucfirst());

  const john = {
    name: "john",
    lastname: "Doe",
    getLastname: function () {
      return this.lastname;
    },
    getName: function () {
      return this.name.ucfirst();
    },
  };
  const jane = {
    name: "jane",
    lastname: "Doe",
    getLastname: function () {
      return this.lastname;
    },
    getName: function () {
      return this.name.ucfirst();
    },
  };

  console.log(john.name, john.getName());

  function Person(name, lastname = "Doe") {
    this.name = name;
    this.lastname = lastname;
    const splittedName = name.split("");
    this.getName = function () {
      return this.name;
    };
    this.getNameFromSplitted = function () {
      return splittedName.join("");
    };
    this.getLastname = function () {
      return this.lastname;
    };
  }

  const johnObj = new Person("john");
  const janeObj = new Person("jane", "tarzan");

  console.log(
    johnObj.getName(),
    johnObj.getLastname(),
    johnObj.getNameFromSplitted(),
    janeObj.getName(),
    janeObj.getLastname(),
    janeObj.getNameFromSplitted()
  );

  try {
    function camelCase(chaine) {
      console.log(test);
    }

    camelCase();
  } catch (error) {
    console.error(error.name);
    throw new Error("coucou");
  }
} catch (error) {
  console.error("Tu ne sais pas coder : " + error.message);
}
