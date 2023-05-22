const nftCollections = [
    {
      id: 1,
      collection: 'Collection 1',
      name: 'NFT 1',
      price: '1.99',
      creator: 'Creator 1',
      description: 'NFT 1 description',
      image: 'NFT1.jpg',
      isSold: false
    },
    {
      id: 2,
      collection: 'Collection 1',
      name: 'NFT 2',
      price: '2.99',
      creator: 'Creator 2',
      description: 'NFT 2 description',
      image: 'NFT2.jpg',
      isSold: false
    },
    {
      id: 3,
      collection: 'Collection 1',
      name: 'NFT 3',
      price: '3.99',
      creator: 'Creator 3',
      description: 'NFT 3 description',
      image: 'NFT3.jpg',
      isSold: false
    },
    {
      id: 4,
      collection: 'Collection 1',
      name: 'NFT 4',
      price: '4.99',
      creator: 'Creator 4',
      description: 'NFT 4 description',
      image: 'NFT4.jpg',
      isSold: false
    },
    {
      id: 5,
      collection: 'Collection 2',
      name: 'NFT 5',
      price: '5.99',
      creator: 'Creator 2',
      description: 'NFT 5 description',
      image: 'NFT5.jpg',
      isSold: false
    },
    {
      id: 6,
      collection: 'Collection 2',
      name: 'NFT 6',
      price: '6.99',
      creator: 'Creator 3',
      description: 'NFT 6 description',
      image: 'NFT6.jpg',
      isSold: false
    },
    {
      id: 7,
      collection: 'Collection 2',
      name: 'NFT 7',
      price: '7.99',
      creator: 'Creator 4',
      description: 'NFT 7 description',
      image: 'NFT7.jpg',
      isSold: false
    },
    {
      id: 8,
      collection: 'Collection 2',
      name: 'NFT 8',
      price: '9.99',
      creator: 'Creator 3',
      description: 'NFT 8 description',
      image: 'NFT8.jpg',
      isSold: false
    }
  ];
  
  // Function to toggle between All NFT Collections and My NFT Collections
  function toggleCollections(collectionType) {
    const allCollections = document.getElementById('allCollections');
    const myCollections = document.getElementById('myCollections');
  
    if (collectionType === 'all') {
      allCollections.style.display = 'block';
      myCollections.style.display = 'none';
    } else if (collectionType === 'my') {
      allCollections.style.display = 'none';
      myCollections.style.display = 'block';
    }
  }
  
  // Function to display My NFT Collections
  function displayMyNFTCollections() {
    const myNFTList = document.getElementById('myNFTList');
  
    // Clear the list before adding the collections
    myNFTList.innerHTML = '';
  
    // Loop through the NFT collections and create an item for each
    const myNFTs = nftCollections.filter(nft => nft.isSold);
    myNFTs.forEach(nft => {
      const nftItem = createNFTItem(nft);
      myNFTList.appendChild(nftItem);
    });
  
    // If there are no sold NFTs, show a message
    if (myNFTs.length === 0) {
      const message = document.createElement('p');
      message.textContent = 'You have not bought any NFTs yet.';
      myNFTList.appendChild(message);
    }
  }
  
  // Function to show NFT details
// Function to show NFT details
function showNFTDetails(nftId, title, price, creator, description) {
    var modal = document.getElementById("nftModal");
    var modalTitle = document.getElementById("modalTitle");
    var modalImage = document.getElementById("modalImage");
    var modalPrice = document.getElementById("modalPrice");
    var modalCreator = document.getElementById("modalCreator");
    var modalDescription = document.getElementById("modalDescription");
    var buyButton = document.getElementById("buyButton");
  
    modalTitle.textContent = title;
    modalImage.src = "NFT" + nftId + ".jpg";
    modalPrice.textContent = "Price: " + price + " ETH";
    modalCreator.textContent = "Created by: " + creator;
    modalDescription.textContent = description;
  
  
    // Check if the NFT is already bought and update the Buy button accordingly
    const isBought = nftCollections.find(nft => nft.id === nftId && nft.collection === collection);
    if (isBought) {
      buyButton.textContent = 'Sold';
      buyButton.disabled = true;
    } else {
      buyButton.textContent = 'Buy NFT';
      buyButton.disabled = false;
      buyButton.addEventListener('click', function() {
        buyNFT(nftId, collection);
      });
    }
  
    modal.style.display = "block";
  }
  
  // Function to buy an NFT
  // Function to buy an NFT

  function buyNFT() {
    var modal = document.getElementById("nftModal");
    var modalTitle = document.getElementById("modalTitle");
    var modalImage = document.getElementById("modalImage");
    var modalPrice = document.getElementById("modalPrice");
  
    // Get the NFT details
    var nftId = parseInt(modal.getAttribute("data-nft-id"));
    var title = modalTitle.textContent.trim();
    var image = modalImage.getAttribute("src");
    var price = modalPrice.textContent.trim().replace("Price: ", "");
  
    // Perform the purchase logic here
    if (price === "Sold") {
      console.log("This NFT has already been sold.");
    } else {
      // Move the NFT to "My NFT Collections" section
      var myCollections = document.getElementById("myCollections");
      var nftItem = createNFTItem(nftId, title, price, "", "", true);
      nftItem.querySelector("img").src = image; // Set the image source
      myCollections.appendChild(nftItem);
  
      // Update the NFT details in "All NFT Collections" section
      var nftItemAll = document.getElementById("nftItem-" + nftId);
      nftItemAll.querySelector(".price").textContent = "Sold";
      nftItemAll.classList.add("sold");
  
      // Disable the buy button
      var buyButton = modal.querySelector("#buyButton");
      buyButton.disabled = true;
      buyButton.textContent = "Sold";
  
      console.log("NFT purchased:", title);
    }
  
    // Close the modal
    modal.style.display = "none";
  
    // Update the displayed collections to "My NFT Collections"
    displayMyNFTCollections();
  }
  
  // Function to hide the NFT details modal
  function hideNFTDetails() {
    const modal = document.getElementById("nftModal");
    modal.style.display = "none";
  }
  
  
  // Function to create an NFT item element
  function createNFTItem(nft) {
    const nftItem = document.createElement('div');
    nftItem.className = 'nft-item';
  
    const nftImage = document.createElement('img');
    nftImage.src = nft.image;
    nftImage.alt = nft.name;
    nftItem.appendChild(nftImage);
  
    const nftName = document.createElement('h3');
    nftName.textContent = nft.name;
    nftItem.appendChild(nftName);
  
    const nftPrice = document.createElement('p');
    nftPrice.textContent = `Price: ${nft.price}`;
    nftItem.appendChild(nftPrice);
  
    const buyButton = document.createElement('button');
    buyButton.textContent = 'Buy';
    buyButton.addEventListener('click', () => buyNFT(nft.id));
    nftItem.appendChild(buyButton);
  
    const sellButton = document.createElement('button');
    sellButton.textContent = 'Sell';
    sellButton.addEventListener('click', () => sellNFT(nft.id));
    nftItem.appendChild(sellButton);
  
    return nftItem;
  }
  
  // Function to display All NFT Collections
  function displayAllNFTCollections() {
    const allCollectionsSection = document.getElementById("allCollections");
  
    // Clear the existing content
    allCollectionsSection.innerHTML = "";
  
    // Iterate through each collection
    for (const collection of nftCollections) {
      const collectionDiv = document.createElement("div");
      collectionDiv.className = "collection";
  
      const collectionTitle = document.createElement("h3");
      collectionTitle.textContent = collection.collection;
      collectionDiv.appendChild(collectionTitle);
  
      const nftListDiv = document.createElement("div");
      nftListDiv.className = "nft-list";
  
      // Iterate through each NFT in the collection
      for (const nft of collection.nfts) {
        const nftItemDiv = document.createElement("div");
        nftItemDiv.className = "nft-item";
  
        // Check if the NFT is sold
        if (nft.isSold) {
          nftItemDiv.classList.add("sold");
          const soldText = document.createElement("p");
          soldText.className = "sold-text";
          soldText.textContent = "Sold";
          nftItemDiv.appendChild(soldText);
        } else {
          const buyButton = document.createElement("button");
          buyButton.textContent = "Buy NFT";
          buyButton.addEventListener('click', function() {
            showNFTDetails(nft.id, collection.collection, nft.name, nft.price, nft.creator, nft.description, nft.image);
          });
          nftItemDiv.appendChild(buyButton);
        }
  
        const nftImage = document.createElement("img");
        nftImage.src = nft.image;
        nftItemDiv.appendChild(nftImage);
  
        const nftName = document.createElement("p");
        nftName.textContent = nft.name;
        nftItemDiv.appendChild(nftName);
  
        nftListDiv.appendChild(nftItemDiv);
      }
  
      collectionDiv.appendChild(nftListDiv);
      allCollectionsSection.appendChild(collectionDiv);
    }
  }
  function displayAllNFTCollections() {
  const allCollectionsSection = document.getElementById("allCollections");

  // Clear the existing content
  allCollectionsSection.innerHTML = "";

  // Iterate through each collection
  for (const collection of nftCollections) {
    const collectionDiv = document.createElement("div");
    collectionDiv.className = "collection";

    const collectionTitle = document.createElement("h3");
    collectionTitle.textContent = collection.collection;
    collectionDiv.appendChild(collectionTitle);

    const nftListDiv = document.createElement("div");
    nftListDiv.className = "nft-list";

    // Iterate through each NFT in the collection
    for (const nft of collection.nfts) {
      const nftItemDiv = document.createElement("div");
      nftItemDiv.className = "nft-item";

      // Check if the NFT is sold
      if (nft.isSold) {
        nftItemDiv.classList.add("sold");
        const soldText = document.createElement("p");
        soldText.className = "sold-text";
        soldText.textContent = "Sold";
        nftItemDiv.appendChild(soldText);
      } else {
        const buyButton = document.createElement("button");
        buyButton.textContent = "Buy NFT";
        buyButton.addEventListener('click', function() {
          showNFTDetails(nft.id, collection.collection, nft.name, nft.price, nft.creator, nft.description, nft.image);
        });
        nftItemDiv.appendChild(buyButton);
      }

      const nftImage = document.createElement("img");
      nftImage.src = nft.image;
      nftItemDiv.appendChild(nftImage);

      const nftName = document.createElement("p");
      nftName.textContent = nft.name;
      nftItemDiv.appendChild(nftName);

      nftListDiv.appendChild(nftItemDiv);
    }

    collectionDiv.appendChild(nftListDiv);
    allCollectionsSection.appendChild(collectionDiv);
  }
}
  
  // Function to sell an NFT
  function sellNFT(nftId) {
    const nft = nftCollections.find(nft => nft.id === nftId);
  
    // Perform the necessary logic to sell the NFT
    if (nft.isSold) {
      nft.isSold = false;
      console.log(`Successfully sold NFT ${nftId}`);
    } else {
      console.log(`NFT ${nftId} is not sold`);
    }
  }
  