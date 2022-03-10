export interface PacientsContextData {
    pacients: any;
    loadPacients: () => void;
    loadStates: () => void;
    loadCities: (siglaUF: string) => void;
    deletePacient: (id: string) => void;
    editPacient: (id: string, params: any) => void;
    createPacient: (params: any) => void;
    states: StatesProps[];
    cities: StatesProps[];
}

export interface StatesProps {
    id: number;
    sigla: string;
    nome: string;
}

export interface CitiesProps {
    id: string;
    nome: string;
}
