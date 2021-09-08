import * as util from "../../util/indexNode.js";

function makeBasket() {
  const basket = new Map<number, number>();
  function isFull() {
    return basket.size > 2;
  }
  function addFruit(n: number) {
    if (basket.has(n)) {
      basket.set(n, (basket.get(n) as number) + 1);
    } else {
      basket.set(n, 1);
    }
  }
  function removeFruit(n: number) {
    const num = (basket.get(n) as number) - 1;
    basket.set(n, num);
    if (num === 0) {
      basket.delete(n);
    }
  }

  return {
    addFruit,
    removeFruit,
    isFull,
  };
}

function totalFruit(fruits: number[]): number {
  let start = 0,
    ret = Number.NEGATIVE_INFINITY;
  const basket = makeBasket();
  for (let end = 0; end < fruits.length; end++) {
    basket.addFruit(fruits[end]);
    while (basket.isFull()) {
      ret = Math.max(ret, end - start);
      basket.removeFruit(fruits[start]);
      start += 1;
    }
  }
  ret = Math.max(ret, fruits.length - start);
  return ret;
}

util.test(totalFruit, 3, [1, 2, 1]);
util.test(totalFruit, 3, [0, 1, 2, 2]);
util.test(totalFruit, 4, [1, 2, 3, 2, 2]);
util.test(totalFruit, 5, [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]);
