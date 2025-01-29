import { CSSProperties } from 'react';

export interface ICurrency {
  id: number,
  name: string,
  title: string,
  image: string,
  amount: number,
  walletAmount: number,
  equivalent: number,
  role: 'send' | 'receive'
}

export interface ICurrencyCardProps {
  currency: ICurrency,
  onChangeCurrencyAmount: (currency: ICurrency, value: number) => void,
  mode: 'confirm' | 'swap',
  style?: CSSProperties,
}

export interface ISwapDetailsProps {
  defaultOpen?: boolean,
  title: string,
}

export interface IConfirmSwapModalProps {
  title: string,
  successText: string,
  detailsTitle: string,
  isOpen: boolean,
  onClose: () => void,
  onSuccess: () => void,
  receivedCurrency: ICurrency,
  sendCurrency: ICurrency,
}
