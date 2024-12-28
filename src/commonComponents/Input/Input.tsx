import React from 'react';
import { IInput } from 'types/commonComponents';
import { formatValue } from 'services/helpers';


export const Input = (props: IInput) => {
  const {
    value,
    onChange,
    placeholder,
    disabled = false,
    style,
    className,
    formatter
  } = props;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formattedValue = formatValue(rawValue, formatter);
    if (formatter === 'percentage') {
      onChange(`${formattedValue}%`);
    } else {
      onChange(formattedValue);
    }
  };

  const displayValue =
    formatter === 'percentage' && typeof value === 'string'
      ? value.replace('%', '')
      : value;

  return (
    <input
      className={`input input-number ${className}`}
      value={displayValue}
      onChange={handleInputChange}
      placeholder={placeholder}
      disabled={disabled}
      style={style}
    />
  )
}