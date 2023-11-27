//SPDX-License-Identifier:UNLICENSED

pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";

contract UnrealNFT is ERC721URIStorage{
    uint private _tokenIds;
    constructor() ERC721("Unreal","UR"){}

    function mintNFT() public returns(uint256){
        _tokenIds++;
        uint newItemId=_tokenIds;
        _mint(msg.sender,newItemId);
        _setTokenURI(newItemId,"https://blue-reasonable-turkey-110.mypinata.cloud/ipfs/QmWrxSHza5MVKiUtoFRVDrkfka9KjdPc4p1cTrWJbMjpgJ?_gl=1*6vhcz2*_ga*MjYzNTgwMDY5LjE3MDEwNzMxOTI.*_ga_5RMPXG14TE*MTcwMTA4NzcwOC4yLjEuMTcwMTA4NzcxMi41Ni4wLjA");
        console.log("The NFT ID %s has been minted to %s ",newItemId,msg.sender);

        return newItemId;
    }  
}

