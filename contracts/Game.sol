//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.3;

contract Game {
  constructor() public payable {}

  event Winner(address winner);

  function win() public {
    emit Winner(msg.sender);
    msg.sender.transfer(address(this).balance);
  }
}
