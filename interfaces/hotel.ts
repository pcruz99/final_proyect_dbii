export interface IHabitacion{
    id: number;
    numero: number;
    cantidad_camas: number;
    cantidad_banos: number;
    piso?: number;
    color?: string;
    television?: boolean;
    aire?: boolean;
    precio: number;
}

