function type_check_v1(variable, type) {
  switch (typeof variable) {
    case "string":
    case "number":
    case "boolean":
    case "function":
    case "symbol":
    case "undefined":
      return typeof variable === type;
    case "object":
      switch (type) {
        case "null":
          return variable === null;
        case "array":
          return Array.isArray(variable);
        case "object":
          return variable !== null && !Array.isArray(variable);
        default:
          return false;
      }
  }
}

// conf === {type: "number", value: "test", enum: ["test", 3]}
function type_check_v2(variable, conf) {
  for (let key in conf) {
    switch (key) {
      case "type":
        if (!type_check_v1(variable, conf.type)) return false;
        break;
      case "value":
        if (JSON.stringify(variable) !== JSON.stringify(conf.value))
          return false;
        break;
      case "enum":
        let found = false;
        for (let subVal of conf.enum) {
          if (type_check_v2(variable, { value: subVal })) {
            found = true;
            break;
          }
        }
        if (!found) return false;
        break;
    }
  }

  return true;
}
