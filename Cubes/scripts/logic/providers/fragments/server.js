export default class ServerProvider {
  constructor(randomOrgStorage, id=86369) {
    this.randomOrgUrl = randomOrgStorage.randomOrgUrl;
    this.methodName = randomOrgStorage.methodName;
    this.apiKey = randomOrgStorage.apiKey;
    this.id = id;
  }

  async getRandomIntegers(min, max, n) {
    let response = await fetch(this.randomOrgUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "jsonrpc": "2.0",
        "method": this.methodName,
        "params": {
          "apiKey": this.apiKey,
          "n": n,
          "min": min,
          "max": max,
          "replacement": true,
          "base": 10
        },
        "id": this.id
      })
    });

    if (!response.ok) {
      throw new Error('ApiKey is expired');
    }

    let jsonString = await response.text();
    let parsed = JSON.parse(jsonString);
    let result = parsed.result;
    return result.random.data;
  }
}