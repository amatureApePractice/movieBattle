const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'd9a436d8',
      s: searchTerm
    }
  });

  return response.data.Search;
};

const input = document.querySelector('input');

const onInput = event => {
  const movies = fetchData(event.target.value);
  console.log(movies);
};

input.addEventListener('input', debounce(onInput, 500));