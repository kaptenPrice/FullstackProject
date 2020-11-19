import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import PokemonService from '../utils/api/service/PokemonService'

export const Homeview = () => {
    const [data, setData] = useState();
    const [search, setSearch] = useState("");

    const fetchDataFromAPI = () => {
        PokemonService.searchForPokemon(search.toLowerCase())
             .then((res) => setData(res.data))
            .catch((err) => console.log(err))

       
    }
    const displayData = () => {
        if (data) {
            return <div>
                <h3>name: {data.name}</h3>
                <h3>id: {data.id}</h3>
                <h3>weight: {data.weight}</h3>
                <h3>height: {data.height}</h3>
                <h3>type: {data.types[0].type.name}</h3>
            </div>
        }
    }

    return (
        <div>
            <span>search for pokes</span>
            <input onChange={(event) => { setSearch(event.target.value) }} />
            <br />
            <button onClick={() => fetchDataFromAPI()}>Make API call </button>
            {displayData()}



        </div>
    )
}

//fråga? metoden searchForPokemon? varför {} runt export?