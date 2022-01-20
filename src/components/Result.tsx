import { Giphy } from "../models/giphy";


export interface Prop{
    gif: Giphy;
}

export function Result({gif}: Prop) {
    return (
        <div className="Results">
                <div key={gif.id}>
                    <h3>{gif.title}</h3>
                    <img src={gif.images.original.url} alt="" />
                    <a href={gif.url}>link to giphy</a>
                </div>
        </div>
    )
}