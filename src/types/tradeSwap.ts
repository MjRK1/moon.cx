import { CSSProperties } from 'react';

export interface ICurrency {
  id: number,
  currencyValue: string,
  currencyTitle: string,
  image: string,
  amount: number,
  walletAmount: number,
  equivalent: number,
  role: 'send' | 'receive'
}

export interface ICurrencyCardProps {
  currency: ICurrency,
  onChangeCurrencyAmount: (currency: ICurrency, value: number) => void,
  style?: CSSProperties,
}
