import React, { useState, useEffect, FormEvent } from "react";
import { fetchSearch } from "../services/GiphyApiService";
import "./SearchForm.css"
import { Giphy } from "../models/giphy";
import { idText } from "typescript";

interface Props {
    onSubmit: (gif: string) => void;
}

export function SearchForm({ onSubmit }: Props) {
    const [search, setSearch] = useState("");

    function onFormSubmit(e: FormEvent) {
        e.preventDefault();
        onSubmit(search);
    }



return (
    <div className="SearchForm" onSubmit={onFormSubmit}>
        <h2>Search for a GIF</h2>
        
        <form action="" className="inputForm">
            <input
                type="text"
                name="search"
                id="search"
                placeholder="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}/>
                <button type="submit"><i className="fa fa-search"></i></button>
            
            
        </form>
    </div>
)
}
