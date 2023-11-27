const {ethers}=require("hardhat");

async function main(){
    
    const deployNFTContract=await ethers.deployContract("UnrealNFT");
    const unreal=await deployNFTContract.waitForDeployment();

    console.log("Unreal contract address is :",await unreal.getAddress());

    console.log("Minting NFT...");
    let txn=await unreal.mintNFT();
    await txn.wait();
    console.log("NFT minted successfully!!!");
}


    main()
        .then(()=>process.exit(0))
        .catch((error)=>{
            console.error(error);
            process.exit(1);
        });

