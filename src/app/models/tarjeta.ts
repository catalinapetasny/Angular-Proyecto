/* Interfáz de tarjeta -> estructura esperada con su tipo de dato */
export interface Tarjeta {
    id: string; // Restricción de tipo numérico para valores autoincrementales
    img: string; //Números cómo letras -> Ejemplos: 123AB / 123 / ABC
    alt: string;
    titulo: string; 
    descripcion: string;
    anualPublicacion: number;
}