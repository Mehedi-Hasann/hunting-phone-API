const loadPhone = async (searchText,isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  displayPhones(phones,isShowAll);
};

const displayPhones = (phones,isShowAll) => {
    console.log(phones);
    // step 1
  const phonContainer = document.getElementById('phone-container');

    // clear phone container cards before adding new cards
    phonContainer.textContent = ' ';

    // display show all button if there are more than 12 phones
    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length > 12 && !isShowAll){
        showAllContainer.classList.remove('hidden');
    }
    else{
        showAllContainer.classList.add('hidden');
    }

    // console.log('is show all : ',isShowAll);
    // display only first 12 phones if not show all
    if(!isShowAll){
        phones = phones.slice(0,12);
    }
    // console.log(phones.length);

  phones.forEach((phone) => {
    // console.log(phone);
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
              <div class="card-actions justify-center">
                <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
              </div>
            </div>
    `;
    // step 4 : append child 
    phonContainer.appendChild(phoneCard);
  });
  // hide loading spinner
  toggleLoadingSpinner(false);
}

//
const handleShowDetails = async(id) =>{
    // console.log(id);

}

//handle search button
const handleSearch = (isShowAll) =>{
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value ;
    console.log(searchText);
    loadPhone(searchText , isShowAll);
}
// handle search recap
// const handleSearch2 = () => {
//     toggleLoadingSpinner(true);
//     const searchField = document.getElementById('search-field2');
//     const searchText = searchField.value;
//     loadPhone(searchText);
// }

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spiner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}

// handle show all
const handleShowAll = () => {
    handleSearch(true);
}

// loadPhone();
