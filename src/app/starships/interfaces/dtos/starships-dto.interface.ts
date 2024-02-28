import { StarshipDTO } from "./starship-dto.interface";

export interface StarshipsDTO {
    count:    number;
    next:     string | null;
    previous: string | null;
    results:  StarshipDTO[];
}

