
// export const getDogImage = (query) => {
//     const dogImageURL = "https://dog.ceo/api/breed/hound/images/"
//     return fetch(`https://dog.ceo/api/breed/hound/images/
//     ${query}`);
//   };
  
export const breedDropdown = async () => {
    const fetchBreed = await(fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(data => data.json()));
    
    return fetchBreed
}



