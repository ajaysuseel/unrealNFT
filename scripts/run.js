
async function main(){
    
    const UnrealNFT=await ethers.getContractFactory("UnrealNFT");
    console.log("Deploying Contract...");

    const unreal=await UnrealNFT.deploy();
    const txHash=unreal.deployTransaction.hash;
    const txReceipt=await ethers.provider.waitForTransaction(txHash);

    console.log("Contract deployed to address :",txReceipt.contractAddress);

    console.log("Minting NFT...");
    let txn=await unreal.mintNFT();
    await txn.wait();
    
}


    main()
        .then(()=>process.exit(0))
        .catch((error)=>{
            console.error(error);
            process.exit(1);
        });

