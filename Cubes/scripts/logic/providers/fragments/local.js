export default class LocalProvider {
  constructor(timeout) {
    this.timeout = timeout;
  }

  async getRandomIntegers(min, max, n) {
    await new Promise((resolve) => setTimeout(resolve, this.timeout));
    const getRandomInteger = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    let result = [];
    while (n--) {
      result.push(getRandomInteger(min, max));
    }

    return result;
  }
}