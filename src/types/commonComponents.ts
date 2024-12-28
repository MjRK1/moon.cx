import { TargetAndTransition, VariantLabels } from 'framer-motion';
import { CSSProperties } from 'react';

export interface IButton {
  id?: string,
  disabled?: boolean,
  name?: string,
  size?: string,
  theme?: string,
  stretched?: boolean,
  form?: string,
  children?: JSX.Element | string,
  style?: CSSProperties,
  className?: string,
  loading?: boolean | undefined,
  onClick?: React.MouseEventHandler,
  animated?: VariantLabels | TargetAndTransition
}

export type FormatterType = 'number' | 'percentage' | 'text';

export interface IInput {
  value: number | string,
  placeholder?: string,
  disabled?: boolean,
  style?: CSSProperties,
  onChange: (value: string | number | undefined) => void,
  className?: string,
  formatter: FormatterType;
}

