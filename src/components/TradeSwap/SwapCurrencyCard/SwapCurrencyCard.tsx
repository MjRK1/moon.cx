import React, { ForwardedRef } from 'react';
import { InputNumber } from 'commonComponents/Input/inputNumber';
import { ICurrencyCardProps } from 'types/tradeSwap';
import cn from 'classnames';
import { motion } from 'motion/react';


// eslint-disable-next-line react/display-name
const SwapCurrencyCard = React.forwardRef(
  (props: ICurrencyCardProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      currency,
      style,
      onChangeCurrencyAmount
    } = props;

    const renderCurrencyAmount = () => {
      if (currency?.role === 'send') {
        return (
          <InputNumber
            isOutlined={false}
            value={currency?.amount}
            controls={false}
            style={{
              width: '70%',
              backgroundColor: 'var(--color-black6)',
              fontSize: 'var(--font-size6)',
            }}
            onChange={(value) => onChangeCurrencyAmount(currency, value as number)}
          />
        );
      }
        return currency?.amount;
    };

    return (
      <motion.div
        className="swap-currency-card"
        style={{...style}}
        ref={ref}
      >
        <div className="swap-currency-card-header">
          <div className="swap-currency-card-header__label">
            You {currency.role}
          </div>
          <div
            className={cn('swap-currency-card-header__wallet-currency-quantity', {
              'swap-currency-card-header__wallet-currency-quantity--receive': currency.role === 'receive'
            })}
          >
            <div className="wallet-currency-quantity__icon">
              <i className="moon-cx moon-cx-currency-quantity" />
            </div>
            <div className="wallet-currency-quantity__value">
              {currency.walletAmount}
            </div>
          </div>
        </div>
        <div className="swap-currency-card-selection">
          <div className="swap-currency-card-selection__currency-selection">
            <div className="currency-selection__currency-image">
              <img src={currency.image} alt="usdt" />
            </div>
            <div className="currency-selection__currency-title">
              {currency.currencyTitle}
            </div>
            <div className="currency-selection__arrow-icon">
              <i className="moon-cx moon-cx-arrow-down" />
            </div>
          </div>
          <div className="swap-currency-card-selection__currency-amount">
            {renderCurrencyAmount()}
          </div>
        </div>
        <div className="swap-currency-card-amount-equivalent">
          ${currency.equivalent}
        </div>
      </motion.div>
    );
});

export const MotionSwapCurrencyCard = motion.create(SwapCurrencyCard);
