pragma solidity ^0.6.4;

contract HelloWorld {
    string myName = "Márcio";

    function getMyName() public view returns(string memory) {
        return myName;
    }

    function changeMyName(string memory newName) public {
        myName = newName;
    }
}