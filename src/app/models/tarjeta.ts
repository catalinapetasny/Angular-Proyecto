/* Interfáz de tarjeta -> estructura esperada con su tipo de dato */
export interface Tarjeta {
    id: string; //Números cómo letras -> Ejemplos: 123AB / 123 / ABC
    img: string;
    alt: string;
    titulo: string; 
    descripcion: string;
    anualPublicacion: number;
}