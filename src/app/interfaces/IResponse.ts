
export interface IResponse<T> {
    success: boolean;
    message?: string;
    data?: T;
}


// export interface IResponseTeams extends IResponse {
//     data?: ITeam[];
// }

