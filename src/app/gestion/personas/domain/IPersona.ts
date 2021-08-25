export interface ResponsePersona {
    id: number;
    user: string;
    password: string;
    surname: string;
    company_email: string;
    personal_email: string;
    city: string;
    active: boolean;
    create_date: Date;
    imagen_url: string;
    termination_date: Date;
}