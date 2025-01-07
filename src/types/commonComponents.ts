import { TargetAndTransition, VariantLabels } from 'motion/react';
import React, { CSSProperties, ReactNode } from 'react';
import { InputNumberProps } from 'antd';

export interface IButton {
  id?: string,
  disabled?: boolean,
  name?: string,
  size?: string,
  theme?: string,
  stretched?: boolean,
  form?: string,
  children?: ReactNode | string,
  style?: CSSProperties,
  className?: string,
  loading?: boolean | undefined,
  onClick?: React.MouseEventHandler,
  animated?: VariantLabels | TargetAndTransition
}

export type FormatterType = 'number' | 'percentage' | 'text';

export interface IInputText {
  style: CSSProperties,
  value: string | number,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  suffix: ReactNode,
  placeholder?: string
}
export interface IInputNumber extends InputNumberProps {
  style?: CSSProperties,
  value?: number | null,
  isOutlined?: boolean
  onChange: (value: number | string | null) => void,
  placeholder?: string
}

export interface ITextarea {
  autosize?: boolean,
  className?: string | string[],
  style?: CSSProperties,
}

export interface ISelectOption {
  title: string,
  description: string,
  tooltip?: string,
  hidden: boolean,
  value: string | number | null,
  className: string,
  disabled: boolean
}

export type SelectOptionType = {
  value: string | number | undefined,
  label: string | undefined
}

export interface ISelect {
  options?: SelectOptionType[],
  onSelect?: <ValueType, OptionType>(value: ValueType, option: OptionType[] | OptionType) => void,
  onChange?: <ValueType, OptionType>(value: ValueType, option: OptionType[] | OptionType ) => void,
  value: string | number | Record<string, string | number>,
  isOutlined?: boolean,
  style?: CSSProperties,
  optionRender?: (item?: ISelectOption) => string | unknown,
  designStyle?: {
    fontFamily?: string,
    fontSize?: number,
    colorText?: string
  }
  withoutSuffixIcon?: boolean
}

export interface ISwitch {
  isOn: boolean,
  onClick: () => void,
  size?: 's' | 'm' | 'l',
  style?: CSSProperties,
}

export interface IModal {
  isOpen: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  title: string,
  withCross: boolean,
  withSuccess: boolean,
  successText?: string,
  width?: number,
  onClose: () => void,
  onSuccess: () => void,
  children: ReactNode
}

export type Tab = {
  id: string | number,
  content: ReactNode,
  title: string,
  name: string,
  additionalTabContent?: ReactNode,
}

export interface ITabs {
  tabs: Tab[],
  onTabChange: (tab: Tab) => void,
  currentTab: Tab,
}
