export interface UserModel {
    id: string;
    name: string;
    registry: string;
    email: string;
    role_id: string;
    partner_id: string;
    division_id: string;
    password: string;
    address: string;
    num: string;
    district: string;
    complement: string;
    cep: string;
    phone: string;
    city: string;
    uf: string;
    expiresDate: Date;
    lockedDate?: any;
    createdby: string;
    updatedby?: any;
    created: Date;
    updated: Date;
    expiresIn: Date;
    role_type: string;
    role_class: number;
    partner_name: string;
    partner_address: string;
    partner_fone: string;
    partner_email: string;
    partner_city: string;
    division_name: string;
    division_address: string;
    division_fone: string;
    division_email: string;
    division_city: string;
    division_theme: string;
}