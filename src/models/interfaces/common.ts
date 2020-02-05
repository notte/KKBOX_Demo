export interface IgetTokenRequest {
	grant_type: string;
	client_id: string;
	client_secret: string;
}

export interface IgetTokenReponse {
	access_token: string;
	expires_in: number;
	token_type: string;
}
