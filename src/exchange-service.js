export default class ExchangeService {
  static async getExchangeRate() {
    return fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`
    )
      .then(function (response) {
        if (!response.ok) {
          // ExchangeRate API returns 404 if wrong call
          // but for some reason response.statusText is not falsy
          // if evalulated as it is with empty text e.g. if (response.statusText)
          if (response.statusText === '') {
            throw Error(response.status);
          }
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return Error(error);
      });
  }
  static async getSupportedCurrencies() {
    // purposefully trying different style than above
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/codes`
      );
      if (!response.ok) {
        if (response.statusText === '') {
          throw Error(response.status);
        }
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return Error(error);
    }
  }
}
