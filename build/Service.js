"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const randomNumberGenerator_1 = require("./randomNumberGenerator");
class Service {
    constructor() { }
    static Instance() {
        if (!Service.instance) {
            Service.instance = new Service();
        }
        return Service.instance;
    }
    generateRandomNumbers(number) {
        return __awaiter(this, void 0, void 0, function* () {
            const newNumbers = new Map([]);
            for (let i = 0; i < 9; i++) {
                (0, randomNumberGenerator_1.seed)(number + i);
                newNumbers.set(i, (0, randomNumberGenerator_1.random)());
            }
            let text = "";
            for (const x of newNumbers.keys()) {
                text += `${newNumbers.get(x)} `;
            }
            return text;
        });
    }
}
exports.default = Service;
