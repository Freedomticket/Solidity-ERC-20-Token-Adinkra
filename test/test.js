// SPDX-License-Identifier: MIT
const { BN } = require('@openzeppelin/test-helpers');
const { equal } = require('assert-plus');
const { expect } = require('chai');
const { assert } = require('internal-slot');
const Adinkra = artifacts.require('Adinkra');
 
contract("Adinkra", (accounts) => {
    it("adinkra", async () => {
  

    const name = 'Adinkra';
    const symbol = 'ADKR';
    const decimals = new BN('18');
    const TOTAL_SUPPLY = new BN('21000000000000000000000000');
 
    beforeEach(async function () {
        this.token = await Token.deployed();
        return assert.isTrue(true);
    });
 
       describe('Adinkra', "ADKR", function() {
        it('has the correct name', async function () {
          const name = await this.token.name();
         assert.equal(name);
        });

        




        
    //   it('has the correct symbol', function () {

     //   });

      //  it('it has the correct decimals', function () {

      //  });
      });

     });


  });