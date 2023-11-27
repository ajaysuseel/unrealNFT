const hre=require("hardhat");

async function main(){
    console.log("Deploying Contract...");
    const elon=await hre.ethers.deployContract("ElonNFT");
    console.log("Contract deployed to address :",elon.target);

    main()
        .then(()=>process.exit(0))
        .catch((error)=>{
            console.error(error);
            process.exit(1);
        });
}
