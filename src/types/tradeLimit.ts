import React from 'react';

export type Currency = {
  title: string,
  name: string,
}

export type ExpiryValue = {
  days: number | null | undefined,
  hours: number | null | undefined,
  minutes: number | null | undefined
}
export type Expiry = {
  title: string,
  value: ExpiryValue | null
}
export interface IOrderParameters {
  receivedCurrency: Currency | null,
  sendCurrency: Currency | null,
  rate: number | null,
  equivalent: string | null,
  locked: boolean,
  expiry: Expiry,
}

export interface IMarketCardProps {
  orderParameters: IOrderParameters,
}

export interface ILimitLockProps {
  locked: boolean,
  onSwitchLock: () => void,
}

export interface ILimitExpiryProps {
  expiry: Expiry,
  onChangeExpiry: (expiry: Expiry) => void,
}

export interface ICustomExpiryModalProps {
  isOpen: boolean,
  setOpen: React.Dispatch<boolean>
  onChangeExpiry: (expiry: Expiry) => void,
}
