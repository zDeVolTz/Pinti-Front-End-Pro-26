function parseJSON(jsonString) {
  try {
      const parsedObject = JSON.parse(jsonString);

      if (typeof parsedObject.age !== 'number') {
          throw new Error(`Unexpected string in JSON at position ${jsonString.indexOf("age")}`);
      }

      return parsedObject;

  } catch (error) {
      return { error:`Invalid JSON: ${error.message}`};
  }
}

const jsonString1 = '{"name": "John", "age": 30, "city": "New York"}';
const jsonString2 = '{"name": "Alice", "age": "twenty-five", "city": "London"}';
console.log(parseJSON(jsonString1));
console.log(parseJSON(jsonString2));
