import React, { useEffect, useState } from 'react';
import { MotionCurrencyCard } from 'src/components/Trade/CurrencyCard';
import { ICurrency } from 'types/tradeSwap';
import { motion } from 'motion/react';
import { MarketCard } from 'components/Trade/TradeLimit/MarketCard';
import { Expiry, IOrderParameters } from 'types/tradeLimit';
import { LimitLock } from 'components/Trade/TradeLimit/LimitLock';
import { LimitExpiry } from 'components/Trade/TradeLimit/LimitExpiry';


export const TradeLimit = () => {
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
  const [orderParameters, setOrderParameters] = useState<IOrderParameters>({
    receivedCurrency: null,
    sendCurrency: null,
    rate: null,
    equivalent: null,
    locked: true,
    expiry: {
      title: 'Never',
      value: null
    }
  });

  useEffect(() => {
    const receivedCurrency = {
      name: currencyList.find(item => item.role === 'receive')?.name as string,
      title: currencyList.find(item => item.role === 'receive')?.title as string
    };
    const sendCurrency = {
      name: currencyList.find(item => item.role === 'send')?.name as string,
      title: currencyList.find(item => item.role === 'send')?.title as string
    };
    const newOrderParameters = {
      receivedCurrency: receivedCurrency,
      sendCurrency: sendCurrency,
      rate: 0.1836234,
      expiry: {
        title: 'Never',
        value: null
      },
      equivalent: '1.00',
      locked: true,
    };
    setOrderParameters({...newOrderParameters});
  }, []);

  const handleSwitchCurrencies = () => {
    const newCurrencyList: ICurrency[] = currencyList.map(item => {
      if (item.role === 'send') return {...item, role: 'receive'};
      return {...item, role: 'send'};
    });
    const newReceivedCurrency = {
      name: newCurrencyList.find(item => item.role === 'receive')?.name as string,
      title: newCurrencyList.find(item => item.role === 'receive')?.title as string
    };
    const newSendCurrency = {
      name: newCurrencyList.find(item => item.role === 'send')?.name as string,
      title: newCurrencyList.find(item => item.role === 'send')?.title as string
    };
    const newOrderParameters = {
      ...orderParameters,
      receivedCurrency: newReceivedCurrency,
      sendCurrency: newSendCurrency,
    };
    setCurrencyList([...newCurrencyList]);
    setOrderParameters({...newOrderParameters});
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

  const handleSwitchLock = () => {
    const newOrderParameters = {...orderParameters, locked: !orderParameters.locked};
    setOrderParameters(newOrderParameters);
  };

  const handleChangeExpiry = (expiry: Expiry) => {
    const newOrderParameters = {...orderParameters, expiry: expiry};
    setOrderParameters(newOrderParameters);
  };

  return (
    <div className="trade-limit">
      <div className="trade-limit__currency-cards">
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
          style={{marginBottom: 15}}
          onChangeCurrencyAmount={handleChangeCurrencyAmount}
        />
        <motion.div
          className="trade-limit__limit-button"
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
          onChangeCurrencyAmount={handleChangeCurrencyAmount}
        />
      </div>
      <div className="trade-limit-order-parameters">
        <MarketCard orderParameters={orderParameters} />
        <div className="trade-limit-order-parameters__expiry-settings">
          <LimitLock locked={orderParameters?.locked} onSwitchLock={handleSwitchLock} />
          <LimitExpiry expiry={orderParameters?.expiry} onChangeExpiry={handleChangeExpiry} />
        </div>
      </div>
    </div>
  );
};
