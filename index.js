const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'd9a436d8',
      s: 'avengers'
    }
  });

  console.log(response.data);
}

fetchData();