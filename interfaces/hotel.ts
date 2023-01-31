export interface IHabitacion{
    id: number;
    numero: number;
    cantidad_camas: number;
    cantidad_banos: number;
    piso?: number;
    color?: string;
    television?: boolean;
    aire?: boolean;
    descripcion?: string;
    precio: number;
}

export interface IHuesped{
    id: number;
    cedula: string;
    nombre: string;
    apellido: string;
    direccion?: string;
    telefono?: string;
    email?: string;
}

export interface IReserva{
    id: number;
    check_in: string;
    check_out: string;
    hora_llegada: number;
    procedencia: string;
    subtotal: number;
}

export interface IReservaDetallada{
    id: number;
    check_in: string;
    check_out: string;
    hora_llegada: number;
    procedencia: string;
    numero_habi: number;
    piso_habi: number;
    cedula_hues: string;
    nombre_hues: string;
    apellido_hues: string;    
    subtotal: number;
}

