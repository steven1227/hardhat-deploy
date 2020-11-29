async function main() {
    console.log("Getting artifacts")
    const PriceConsumerFactory = await ethers.getContractFactory("PriceConsumer")
    
    console.log("Deploying")
    const priceConsumer = await PriceConsumerFactory.deploy()

    console.log("priceConsumer deployed to: ", priceConsumer.address)
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });