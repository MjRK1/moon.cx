import React, { useState } from 'react';
import dayjs from 'dayjs';
import Duration from 'dayjs/plugin/duration';
import { ILimitExpiryProps } from 'types/tradeLimit';
import { motion, AnimatePresence } from 'motion/react';
import {
  expireSelectVariants,
  EXPIRY_ITEM_LIST,
  expiryVariants,
} from 'components/Trade/TradeLimit/LimitExpiry/constants';
import cn from 'classnames';
import { CustomExpiryModal } from 'components/Trade/TradeLimit/LimitExpiry/CustomExpiryModal';


export const LimitExpiry = (props: ILimitExpiryProps) => {
  const {
    expiry,
    onChangeExpiry,
  } = props;
  dayjs.extend(Duration);
  const [isExpiryOpen, setExpiryOpen] = useState(false);
  const [isCustomExpiryOpen, setCustomExpiryOpen] = useState(false);

  const handleOpenCustomExpiry = () => {
    setExpiryOpen(false);
    setCustomExpiryOpen(true);
  };

  const handleSelectExpiry = (item) => {
    const newExpiry = {
      title: item.title,
      value: item.value
    };
    onChangeExpiry(newExpiry);
    setExpiryOpen(false);
  };

  return (
    <div className="limit-expiry-wrapper">
      <div className="limit-expiry">
        <div className="limit-expiry__title">
          Expiry
        </div>
        <div
          className="limit-expiry__expiry-select"
          onClick={() => setExpiryOpen(true)}
        >
          <div className="expiry-select__value">
            {expiry.title}
          </div>
          <motion.div
            className="expiry-select__arrow-icon"
            variants={expireSelectVariants}
            initial="hidden"
            animate={isExpiryOpen ? 'visible' : 'hidden'}
          >
            <i className="moon-cx moon-cx-arrow-down" />
          </motion.div>
        </div>
      </div>
      {isExpiryOpen && (
        <>
        <div
          className="dropdown-overlay"
          onClick={() => setExpiryOpen(false)}
        />
          <AnimatePresence>
            <motion.div
              className="limit-expiry-dropdown"
              variants={expiryVariants}
              initial="hidden"
              animate={isExpiryOpen ? 'visible' : 'hidden'}
              exit="hidden"
            >
              <div className="limit-expiry-dropdown__expiry-items">
                {EXPIRY_ITEM_LIST.map(item => (
                  <div
                    key={item.id}
                    className={cn('expiry-items__item', {
                      'expiry-items__item--active': expiry.value === item.expiry.value
                    })}
                    onClick={() => handleSelectExpiry(item.expiry)}
                  >
                    {item.expiry.title}
                  </div>
                ))}
              </div>
              <div
                className="expiry-dropdown__expiry-custom"
                onClick={handleOpenCustomExpiry}
              >
                Custom
              </div>
            </motion.div>
          </AnimatePresence>
        </>
      )}
      <CustomExpiryModal
        isOpen={isCustomExpiryOpen}
        setOpen={setCustomExpiryOpen}
        onChangeExpiry={onChangeExpiry}
      />
    </div>
  );
};
