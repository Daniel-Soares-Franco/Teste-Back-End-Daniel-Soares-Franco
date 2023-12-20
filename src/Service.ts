/**
 * Using the provided random number generator function implementation,
 * along with the given seed,
 * you should:
 * - Import random and seed from randomNumberGenerator ok
 * - Use this function value as default: seed(192837465); ok
 * - Instantiate a Map class ok
 * - Iterate 9 times, from 0 to 8 ok
 * - On each iteration save the index as a key on the Map instance and as a value call the random function ok
 * - Iterate through the Map's keys using the "keys" method ok
 * - For each key, print it's associated value on the Map instance. ok
 * - Comment randomNumberGenerator.js code ok
 * - Output:
 *  0.3156106622882362
    0.5513213466665547
    0.3301843000590452
    0.04769233684601204
    0.4450511749319048
    0.8014283726497524
    0.6599671903586568
    0.39207733233979525
    0.9243979984480575
 
  - YOUR CODE:
*/
import { random, seed } from "./randomNumberGenerator";
class Service {
  private static instance: Service;
  private constructor() {}
  public static Instance(): Service {
    if (!Service.instance) {
      Service.instance = new Service();
    }
    return Service.instance;
  }
  public async generateRandomNumbers(number: number) {
    const newNumbers = new Map([]);
    for (let i = 0; i < 9; i++) {
      seed(number + i);
      newNumbers.set(i, random());
    }
    let text: String = "";
    for (const x of newNumbers.keys()) {
      text += `${newNumbers.get(x)} `
    }
    return text;
  }
}

export default Service;
