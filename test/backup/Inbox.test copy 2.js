const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //it is a constructor function
const web3 = new Web3(ganache.provider()); //it is an instace of Web3


class Car {
    park() {
        return 'stopped';
    }

    drive() {
        return 'vroom';
    }
}

let car;

beforeEach(() => {
     car = new Car();
});

describe ('Car', () => {
    it('can park', ()=> {
        assert.equal(car.park(), 'stopped');
    } )
    it('can drive', () => {
        assert.equal(car.drive(), 'vroom');
    })
});