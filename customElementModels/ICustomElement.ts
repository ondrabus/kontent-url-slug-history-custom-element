import { IContext } from "./IContext";
import { IElement } from "./IElement";

export interface ICustomElement {
    init(callback: {(element: IElement, context: IContext): void}): void
    observeElementChanges(elementCodenames: string[], callback: {(changedElementCodenames: string[])}): void,
    getElementValue(elementCodename: string, callback: {(value: object)}): void
    setHeight(height: number): void
    setValue(value: string | null)
}
