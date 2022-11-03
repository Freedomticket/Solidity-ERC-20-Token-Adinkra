// SPDX-License-Identifier: MIT
pragma solidity >=0.4.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Adinkra is ERC20, Pausable, Ownable {
    constructor() ERC20("Adinkra", "ADKR") {
         _mint(msg.sender, 10000000000000000000 * 10 ** decimals());
    }

}
   

    
  

