import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Collapse } from 'commonComponents/Collapse';


const SWAP_DETAILS_ITEMS = [
  {
    id: 1,
    title: 'Max. slippage',
    value: '2%'
  },
  {
    id: 2,
    title: 'Min. received',
    value: '1.12787 STON'
  },
  {
    id: 3,
    title: 'Blochain fee',
    value: '0.1%'
  }
];

export const SwapDetails = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const renderCollapseHeader = () => {
    return (
      <div className="swap-details-body-header">
        <div className="swap-details-body-header__title">
          Rate
        </div>
        <div className="swap-details-body-header__value">
          1 DUST ≈ <span />
          <div
            style={{
              color: 'var(--color-black0)',
              display: 'flex',
              alignItems: 'center',
              marginLeft: 4
            }}
          >
            0.7545646 TON
            <div
              style={{
                fontSize: 'var(--font-size14)',
                display: 'flex',
                alignItems: 'center',
                marginLeft: 4
              }}
            >
              <i className="moon-cx moon-cx-convert" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="swap-details-wrapper">
      <motion.div
        className="swap-details-header"
        initial={{color: 'var(--color-black0)'}}
        animate={{
          color: isOpen ? 'var(--color-white)' : 'var(--color-black0)',
          transition: {duration: 0.2}
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div className="swap-details-header__title">
          Swap details
        </motion.div>
        <motion.div
          className="swap-details-header__wrap-button"
          initial={{rotate: 0}}
          animate={{rotate: isOpen ? 180 : 0, transition: {duration: 0.2}}}
        >
          <i className='moon-cx moon-cx-arrow-down' />
        </motion.div>
      </motion.div>
      <Collapse
        isOpen={isOpen}
        header={renderCollapseHeader()}
      >
        <div className="swap-details-body-description">
          {SWAP_DETAILS_ITEMS.map(item => (
            <div key={item.id} className="swap-details-body-description__details-item">
              <div className="details-item__title">
                {item.title}
              </div>
              <div className="details-item__value">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  );
};
