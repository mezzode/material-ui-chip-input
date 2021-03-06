import * as React from 'react';
import { FormHelperTextProps } from '@material-ui/core/FormHelperText';
import { InputProps } from '@material-ui/core/Input';
import { InputLabelProps } from '@material-ui/core/InputLabel';

export interface ChipRendererArgs {
  value: string;
  text: string;
  chip: any;
  isFocused: boolean;
  isDisabled: boolean;
  handleClick: React.EventHandler<any>;
  handleDelete: React.EventHandler<any>;
  className: string;
}

export type ChipRenderer = (
  args: ChipRendererArgs,
  key: any
) => React.ReactNode;

export interface Props {
  allowDuplicates?: boolean;
  blurBehavior?: 'clear' | 'add' | 'ignore';
  classes: Record<string, string>;
  chipRenderer?: ChipRenderer;
  clearInputValueOnChange?: boolean;
  dataSource?: any[];
  dataSourceConfig?: {
    text: string;
    value: string;
  };
  defaultValue?: any[];
  disabled?: boolean;
  disableUnderline?: boolean;
  FormHelperTextProps?: FormHelperTextProps;
  fullWidth?: boolean;
  fullWidthInput?: boolean;
  helperText?: React.ReactNode;
  InputLabelProps?: InputLabelProps;
  InputProps?: InputProps;
  inputRef?: (ref: React.Ref<HTMLInputElement>) => any;
  label?: React.ReactNode;
  margin?: 'none' | 'dense' | 'normal';
  newChipKeyCodes?: number[];
  onAdd?: (chip: any) => any;
  onBeforeAdd?: (chip: any) => boolean;
  onChange?: (chips: any[]) => any;
  onDelete?: (chip:any, index: number) => any;
  onUpdateInput?: React.EventHandler<any>;
  placeholder?: string;
  value?: any[];
  error?: boolean;
  variant?: 'outlined' | 'standard' | 'filled';
}

declare const ChipInput: React.ComponentType<Props>;
export default ChipInput;
