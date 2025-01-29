import React from 'react';
import { motion } from 'motion/react';
import cn from 'classnames';
import { ILimitLockProps } from 'types/tradeLimit';


export const LimitLock = (props: ILimitLockProps) => {
  const {
    locked,
    onSwitchLock
  } = props;


  return (
    <motion.div
      className={cn('expiry-settings__lock-btn', {
        "expiry-settings__lock-btn--unlocked": !locked
      })}
      onClick={() => onSwitchLock()}
      whileTap={{ scale: 0.95 }}
    >
      <div className="lock-btn__icon">
        <i className={`moon-cx moon-cx-${locked ? 'closed' : 'opened'}-lock`} />
      </div>
      <div className="lock-btn__title">
        {locked ? 'Lock' : 'Unlock'}
      </div>
    </motion.div>
  );
};
