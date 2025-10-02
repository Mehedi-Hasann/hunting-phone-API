const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  displayPhones(phones);
};

const displayPhones = (phones) => {
    // step 1
  const phonContainer = document.getElementById('phone-container');

    // clear phone container cards before adding new cards
    phonContainer.textContent = ' ';

  phones.forEach((phone) => {
    console.log(phone);
    //step 2 : create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-gray-100 p-4 shadow-sm`;
    // step 3 : set inner html 
    phoneCard.innerHTML = `
        <figure>
              <img src="${phone.image}" alt="" srcset="">
            </figure>
            <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
    `;
    // step 4 : append child 
    phonContainer.appendChild(phoneCard);
  });
};

//handle search button
const handleSearch = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value ;
    console.log(searchText);
    loadPhone(searchText);
}

// loadPhone();
