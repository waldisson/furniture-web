import { GeneralStylesProps } from "../../shared/general";

export type InputRangeVariationType =  'default';

export interface InputProps  extends GeneralStylesProps{
    variation?: InputRangeVariationType,
    description?: string,
    value?: string,
    placeholder?: string,
    disabled?: boolean,
    error?: boolean,
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
}
