const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'd9a436d8',
      s: searchTerm
    }
  });

  console.log(response.data);
};

const input = document.querySelector('input');
input.addEventListener('input', (event) => {
  fetchData(event.target.value);
})