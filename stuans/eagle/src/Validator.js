import FunctionSchema from './FunctionSchema.js';
import ObjectSchema from './ObjectSchema.js';
import StringSchema from './StringSchema.js';

export default class Validator {
  string() {
    return new StringSchema();
  }

  object() {
    return new ObjectSchema();
  }

  function() {
    return new FunctionSchema();
  }
}
