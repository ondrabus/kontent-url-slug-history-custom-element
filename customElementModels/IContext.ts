import { IItem } from "./IItem";
import { IVariant } from "./IVariant";

export interface IContext {
    projectId: string,
    item: IItem,
    variant: IVariant,
}