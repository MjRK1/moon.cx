import { FormatterType } from 'types/commonComponents';

export const formatValue = (value: string, formatterType: FormatterType): string => {
  const normalizedValue = value.replace(/,/g, '.');

  switch (formatterType) {
    case 'number':
      return normalizedValue.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    case 'percentage':
      return normalizedValue.replace(/[^0-9]/g, '').slice(0, 3);
    case 'text':
    default:
      return value;
  }
};