export default class ErrorRepository {
  constructor() {
    this.errorBase = new Map();
    this.errorBase.set(
      this,
      [111,
        'Error #1'],
    );
  }

  translate(code) {
    if (this.errorBase.get(this)[0] === code) {
      return this.errorBase.get(this)[1];
    }
    throw new Error('Unknown error');
  }
}
