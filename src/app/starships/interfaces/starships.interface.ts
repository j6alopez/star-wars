import { Starship } from "./starship.interface";

export interface Starships {
    count:    number;
    next:     string | null;
    previous: string | null;
    results:  Starship[];
}

