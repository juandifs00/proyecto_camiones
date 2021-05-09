let consultar = () => {
    axios.get('https://pokeapi.co/api/v2/ability/150/').then(response => {
        console.log(response);
        registros = response.data.info;
        console.log(registros);
      })
      .catch(error => {
        console.log(error);
      });
}
consultar();
console.log("Respuesta de la api");