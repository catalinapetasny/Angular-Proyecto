/* Interfáz de tarjeta -> estructura esperada con su tipo de dato */

//Libros destacados en el Home;
export interface Destacados {
    id: number; //ID <- Tipo number para que pueda ser auto incremental
    img?: string; //? -> Indica que no es una propiedad estrictamente obligatoria 
    alt?: string; //Números cómo letras -> Ejemplos: 123AB / 123 / ABC
    precio: number;
    tituloLibro: string;
    autor?: string;
}

//Albumes destacados en el Home;
export interface Musica {
    id: number;
    img?: string;
    alt?: string;
    precio: number;
    tituloDisco: string;
    artista?: string;
}
