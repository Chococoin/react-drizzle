pragma solidity ^0.5.0;

contract Bank {
    address public bank;
    address[] Holder; 
    uint256 public tokenSupply;
    mapping (address => uint) public holderBalance;

    constructor(uint256 _tokenSupply) public payable {
        bank = msg.sender;
        makeDeposit(_tokenSupply, msg.sender);
    }

    function makeDeposit(uint _deposit, address _sender) public payable returns(bool){
        tokenSupply += _deposit;
        holderBalance[_sender] = _deposit;
        return true;
    }
    
    function getBalance() public view returns(uint) {
        return holderBalance[msg.sender];
    }
}