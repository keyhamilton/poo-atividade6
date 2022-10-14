class Hora {
    private hora: number;
    private minutos: number;
    private segundos: number;

    constructor(hora: number, minutos: number, segundos: number){
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    };

    public get horaAgora(): number {
        return this.hora;
    };

    public get minutosAgora(): number {
        return this.minutos;
    };

    public get segundosAgora(): number {
        return this.segundos;
    };

    public get toString(): string {
        return `${this.hora}:${this.minutos}:${this.segundos}`;
    }
}

let hora: Hora = new Hora(10, 20, 30);

console.log(hora.horaAgora);
console.log(hora.minutosAgora);
console.log(hora.segundosAgora);
console.log(hora.toString);



