//Libros en sección "Products"
export interface Destacados {
    id: number; //ID <- Tipo number para que pueda ser auto incremental
    img?: string; //? -> Indica que no es una propiedad estrictamente obligatoria 
    alt?: string;
    precio: number;
    tituloLibro: string;
    autor?: string;
}

//Albumes en sección "Products"
export interface Musica {
    id: number;
    img?: string;
    alt?:string;
    precio: number;
    tituloDisco: string;
    artista?: string;
}