import React from 'react';
import { IMarketCardProps } from 'types/tradeLimit';
import { InputNumber } from 'commonComponents/Input/inputNumber';
import { motion } from 'motion/react';


export const MarketCard = (props: IMarketCardProps) => {
  const {
    orderParameters,
    onRateChange,
  } = props;

  const handeMultiplyRate = (percent: number) => {
    onRateChange(orderParameters?.rate as number * (1 + (percent / 100)));
  };

  return (
    <div className="market-card">
      <div className="market-card-header">
        <div className="market-card-header__title">
          Market
        </div>
        <div className="market-card-header__swapped-currency">
          Swap <span style={{fontWeight: 800}}>{orderParameters?.sendCurrency?.title}</span> at rate
        </div>
      </div>
      <div className="market-card-body">
        <div className="market-card-body__received-currency">
          {orderParameters?.receivedCurrency?.title}
        </div>
        <div className="market-card-body__rate">
          <InputNumber
            isOutlined={false}
            value={orderParameters?.rate}
            controls={false}
            precision={6}
            style={{
              width: '100%',
              backgroundColor: 'var(--color-black6)',
              fontWeight: 600,
              fontSize: 'var(--font-size20)',
            }}
            onChange={(value) => onRateChange(value as number)}
          />
        </div>
      </div>
      <div className="market-card-footer">
        <div className="market-card-footer__rate-controls">
          <motion.div
            className="rate-controls__percent-btn"
            whileTap={{scale: 0.95}}
            onClick={() => handeMultiplyRate(1)}
          >
            +1%
          </motion.div>
          <motion.div
            className="rate-controls__percent-btn"
            whileTap={{scale: 0.95}}
            onClick={() => handeMultiplyRate(5)}
          >
            +5%
          </motion.div>
        </div>
        <div className="market-card-footer__equivalent">
          ${String(orderParameters?.equivalent)}
        </div>
      </div>

    </div>
  );
};
