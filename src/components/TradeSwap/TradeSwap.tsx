import React, { useState } from 'react';
import { MotionSwapCurrencyCard } from 'components/TradeSwap/SwapCurrencyCard';
import { ICurrency } from 'types/tradeSwap';
import { motion } from 'motion/react';


export const TradeSwap = () => {
  const [currencyList, setCurrencyList] = useState<ICurrency[]>([
    {
      id: 1,
      currencyValue: 'USDT',
      currencyTitle: 'USD₮',
      amount: 1000,
      image: '/USDT_IMAGE.png',
      equivalent: 1000,
      walletAmount: 1542,
      role: 'send'
    },
    {
      id: 2,
      currencyValue: 'TON',
      currencyTitle: 'TON',
      amount: 1000,
      image: '/TON_IMAGE.png',
      equivalent: 1000,
      walletAmount: 0,
      role: 'receive'
    },
  ]);

  const handleSwitchCurrencies = () => {
    const newCurrencyList: ICurrency[] = currencyList.map(item => {
      if (item.role === 'send') return {...item, role: 'receive'};
      return {...item, role: 'send'};
    });
    setCurrencyList([...newCurrencyList]);
  };

  const handleChangeCurrencyAmount = (currency: ICurrency, value: number) => {
    const newCurrency = { ...currency, amount: value };
    const newCurrencyList = currencyList.map(item => {
      if (currency.id === item.id) {
        return newCurrency;
      }
      return { ...item, amount: newCurrency.amount * 0.1836234 };
    });
    setCurrencyList(newCurrencyList);
  };

  return (
    <div className="trade-swap">
      <div className="trade-swap__currency-cards">
        <MotionSwapCurrencyCard
          key="send-currency"
          currency={currencyList[0]}
          initial={{
            y: currencyList[0].role === 'send' ? 0 : 100
          }}
          animate={{
            y: currencyList[0].role === 'send' ? 0 : 135,
            transition: {
              bounce: 0
            }
          }}
          style={{marginBottom: 15}}
          onChangeCurrencyAmount={handleChangeCurrencyAmount}
        />
        <motion.div
          className="trade-swap__swap-button"
          onClick={handleSwitchCurrencies}
          initial={{ rotate: 0 }}
          animate={{
            rotate: currencyList[0].role === 'send' ? 0 : 180,
          }}
          whileHover={{
            // rotate: 180,
            backgroundColor: '#18181E',
            transition: {
              duration: 0.2,
              bounce: 0
            }
          }}
        >
          <i className="moon-cx moon-cx-swap-currency" />
        </motion.div>
        <MotionSwapCurrencyCard
          key="received-currency"
          currency={currencyList[1]}
          initial={{
            y: currencyList[1].role === 'receive' ? 0 : -100
          }}
          animate={{
            y: currencyList[1].role === 'receive' ? 0 : -135,
            transition: {
              bounce: 0
            }
          }}
          onChangeCurrencyAmount={handleChangeCurrencyAmount}
        />
      </div>
    </div>
  );
};
