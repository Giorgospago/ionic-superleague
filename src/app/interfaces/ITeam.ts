import { IModel } from "./IModel"

export interface ITeam extends IModel {
    name: string;
    logo: string;
    points: number;
    deleted: boolean;
}

