import React, {useState, useEffect} from "react";
import axios from "axios";
import { GiphyResponse } from "../models/giphy";
import { Giphy } from "../models/giphy";
import { Result } from "./Result";
import { ResultsList } from "./ResultsList";
import { SearchForm } from "./SearchForm";
import { fetchTrendingGiphy } from "../services/GiphyApiService";
import { fetchSearch } from "../services/GiphyApiService";

export function Main(){
    const [gifs, setGifs] = useState<Giphy[]>([]);
    const [search, setSearch] = useState<string>("");
   



useEffect(() => {
    if(search === ""){
          fetchTrendingGiphy().then((data) => setGifs(data));
    }else{
        fetchSearch(search).then((data) => setGifs(data));
      }

    }, [search]);
    
    function handleFormSubmit(gif:string) {
        setSearch(gif)
    }

    return(
        <div>
            <SearchForm onSubmit={handleFormSubmit} />
            <ResultsList gifs={gifs} />
        </div>
    )
}
