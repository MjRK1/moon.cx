import React from 'react';
import { Modal } from 'commonComponents/Modal';
import { IConfirmSwapModalProps } from 'types/tradeSwap';
import { MotionCurrencyCard } from 'components/Trade/CurrencyCard';
import { TradeDetails } from 'components/Trade/TradeDetails';

export const TradeConfirmModal = (props: IConfirmSwapModalProps) => {
  const {
    title,
    successText,
    detailsTitle,
    isOpen,
    receivedCurrency,
    sendCurrency,
    onClose,
    onSuccess,
  } = props;
  return (
    <Modal
      isOpen={isOpen}
      title={title}
      withCross
      withSuccess
      successText={successText}
      onClose={onClose}
      onSuccess={onSuccess}
    >
      <div className="trade-confirm-modal__content">
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
        <TradeDetails defaultOpen={true} title={detailsTitle} />
      </div>
    </Modal>
  );
};
