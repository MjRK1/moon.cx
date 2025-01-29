import React, { useState } from 'react';
import { MotionCurrencyCard } from 'src/components/Trade/CurrencyCard';
import { ICurrency } from 'types/tradeSwap';
import { motion } from 'motion/react';
import { Button } from 'commonComponents/Button';
import { TradeDetails } from 'components/Trade/TradeDetails';
import { TradeConfirmModal } from 'components/Trade/TradeConfirmModal';


export const TradeSwap = () => {
  const [currencyList, setCurrencyList] = useState<ICurrency[]>([
    {
      id: 1,
      name: 'USDT',
      title: 'USD₮',
      amount: 1000,
      image: '/USDT_IMAGE.png',
      equivalent: 1000,
      walletAmount: 1542,
      role: 'send'
    },
    {
      id: 2,
      name: 'TON',
      title: 'TON',
      amount: 1000,
      image: '/TON_IMAGE.png',
      equivalent: 1000,
      walletAmount: 0,
      role: 'receive'
    },
  ]);
  const [isConfirmOpen, setConfirmOpen] = useState<boolean>(false);

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
        <MotionCurrencyCard
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
          mode="swap"
          style={{marginBottom: 15}}
          onChangeCurrencyAmount={handleChangeCurrencyAmount}
        />
        <motion.div
          className="trade-swap__swap-button"
          onClick={handleSwitchCurrencies}
          initial={{ rotate: 0 }}
          animate={{
            rotate: currencyList[0].role === 'send' ? 0 : 180,
            transition: {
              delay: 0.1,
              duration: 0.2
            }
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
        <MotionCurrencyCard
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
          mode="swap"
          onChangeCurrencyAmount={handleChangeCurrencyAmount}
        />
      </div>
      <TradeDetails title="Swap details" />
      <Button
        style={{width: '100%', marginTop: 10}}
        onClick={() => setConfirmOpen(true)}
      >
        Swap
      </Button>
      <TradeConfirmModal
        title="Confirm swap"
        successText="Confirm swap"
        detailsTitle="Swap details"
        isOpen={isConfirmOpen}
        onClose={() => setConfirmOpen(false)}
        onSuccess={() => setConfirmOpen(false)}
        receivedCurrency={currencyList.find(item => item.role === 'receive') || currencyList[0]}
        sendCurrency={currencyList.find(item => item.role === 'send') || currencyList[1]}
      />
    </div>
  );
};
