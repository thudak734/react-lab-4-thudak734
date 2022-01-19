import { Giphy } from "../models/giphy";
import { Result } from "./Result";

export interface Props{
    gifs: Giphy[];
}

export function ResultsList({gifs}: Props){
  
    return(
         <div className="ResultsList">
        {gifs.map((gif, i) =>(
        <Result key={i} gif={gif}/>
        ))}
        </div>
    );
}