import React from 'react';
import { Modal } from 'commonComponents/Modal';
import { IConfirmSwapModalProps } from 'types/tradeSwap';
import { MotionCurrencyCard } from 'components/Trade/CurrencyCard';
import { SwapDetails } from 'components/Trade/TradeSwap/SwapDetails';

export const ConfirmSwapModal = (props: IConfirmSwapModalProps) => {
  const {
    isOpen,
    receivedCurrency,
    sendCurrency,
    onClose,
    onSuccess,
  } = props;
  return (
    <Modal
      isOpen={isOpen}
      title="Confirm swap"
      withCross
      withSuccess
      successText="Confirm swap"
      onClose={onClose}
      onSuccess={onSuccess}
    >
      <div className="confirm-swap-modal__content">
        <MotionCurrencyCard
          currency={sendCurrency}
          mode="confirm"
          style={{
            backgroundColor: 'var(--color-black7)',
            width: 400,
            marginBottom: 10
          }}
        />
        <MotionCurrencyCard
          currency={receivedCurrency}
          mode="confirm"
          style={{
            backgroundColor: 'var(--color-black7)',
            width: 400,
            marginBottom: 25,
          }}
        />
        <SwapDetails defaultOpen={true} />
      </div>
    </Modal>
  );
};
