// Problem 2
// Task: Implement a datasource connector to abstract away data retrieval and manipulation from the `ViewControllers`.
// Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com).

function get(url, onSuccess, onFailure) {
  var r = new XMLHttpRequest();
  r.open('GET', url, true);
  r.onload = function () {
    if (r.status != 200) return onFailure(r.statusText);
    onSuccess(r.responseText);
  };
  r.send();
}

class Price {
  constructor({ buy, sell, id, pair, timestamp }) {
    this.buy = buy;
    this.sell = sell;
    this.id = id;
    this.pair = pair;
    this.timestamp = timestamp;
  }

  mid = () => {
    return (this.buy + this.sell) / 2;
  };

  quote = () => {
    // pair: ETHSGD
    const currencyIndex = 3;
    return this.pair.slice(currencyIndex);
  };
}

class Datasource {
  /**
   * Returns the Price list of static.ngnrs.io/test/prices
   */
  getPrices() {
    const URL = 'https://static.ngnrs.io/test/prices';
    return new Promise((resolve, reject) => {
      get(
        URL,
        (response) => {
          const {
            data: { prices },
          } = JSON.parse(response);
          const priceList = prices.map((price) => new Price(price));
          resolve(priceList);
        },
        reject
      );
    });
  }
}

// Note: You can run the solution directly into the Chrome browser console

let ds = new Datasource();
ds.getPrices()
  .then((prices) => {
    prices.forEach((price) => {
      console.log(`Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`);
    });
  })
  .catch((error) => {
    console.err(error);
  });
