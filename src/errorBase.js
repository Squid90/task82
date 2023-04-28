const errorBase = new Map();
export default class ErrorRepository {
  constructor(code, description) {
    this.code = code;
    this.description = description;

    errorBase.set(this, {
      code,
      description,
    });
  }

  translate(code) {
    if (errorBase.get(this).code === code) {
      return errorBase.get(this).description;
    }
    throw new Error('Unknown error');
  }
}
