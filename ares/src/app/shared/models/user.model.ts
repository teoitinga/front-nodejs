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
    phone: string;
    expiresDate: Date;
    lockedDate?: any;
    createdby: string;
    updatedby?: any;
    created: Date;
    updated: Date;
    expiresIn: Date;
}