export class tokenModel {
    access_token!: string;
    expires_in!: number;
    refresh_token!: string;
    token_type!: string;
    amr: string[] = [];
    auth_time!: number;
    client_id!: string;
    email_verified!: boolean;
    exp!: number;
    iat!: number;
    idp!: string;
    iss!: string;
    jti!: string;
    name!: string;
    nbf!: number;
    permissions: string[] = [];
    phone_number_verified!: boolean;
    preferred_username!: string;
    role!: string;
    scope: string[] = [];
    sub!: string;
    unique_name!: string;
}