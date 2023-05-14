const errorBase = new Map();
export default class ErrorRepository {
  constructor() {
    errorBase.set(this, 
      [111,
        'Error #1']
    );
  }

  translate(code) {
    if (errorBase.get(this)[0] === code) {
      return errorBase.get(this)[1];
    }
    throw new Error('Unknown error');
  }
}
