function filterByBreed(list, searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  return(list.filter((item) => item.breed.toLowerCase().includes(searchTerm)));
}

export { filterByBreed };
