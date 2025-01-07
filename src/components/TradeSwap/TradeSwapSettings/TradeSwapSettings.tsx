import React, { useState } from 'react';
import { Modal } from 'commonComponents/Modal';
import { InputNumber } from 'commonComponents/Input/inputNumber';
import { Switch } from 'commonComponents/Switch';
import cn from 'classnames';


const PERCENTAGE_BUTTONS = [
  {
    id: 1,
    value: 1,
    title: '1%'
  },
  {
    id: 2,
    value: 5,
    title: '5%'
  },
  {
    id: 3,
    value: 10,
    title: '10%'
  },
];


export const TradeSwapSettings = () => {
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [isExpertModeOn, setExpertModeOn] = useState(false);
  const [currentPercentage, setCurrentPercentage] = useState(PERCENTAGE_BUTTONS[0]);
  const [customPercentage, setCustomPercentage] = useState<number | null>(null);

  const handleChangeCustomPercentage = (value: number | string | null) => {
    if (value) {
      setCustomPercentage(+value);
      setCurrentPercentage({
        id: 4,
        value: +value,
        title: `${value}%`
      });
    } else {
      setCustomPercentage(null);
      setCurrentPercentage(PERCENTAGE_BUTTONS[0]);
    }
  };
  const customPercentageParser = (value: string | undefined) => {
    // Убираем знак процента и оставляем только числа
    return value?.replace(/[^0-9.,]/g, "").replace(",", ".") || "";
  };

  return (
    <div className="trade-swap-settings">
      <div
        className="trade-swap-settings__button"
        onClick={() => setSettingsOpen(true)}
      >
        <i className="moon-cx moon-cx-settings" />
      </div>
      <Modal
        isOpen={isSettingsOpen}
        setOpen={setSettingsOpen}
        title="Advanced Settings"
        withCross
        withSuccess
        successText="Save"
        onClose={() => setSettingsOpen(false)}
        onSuccess={() => setSettingsOpen(false)}
      >
        <div className="trade-swap-settings-content">
          <div className="trade-swap-settings-content__trade-swap-slippage">
            <div className="trade-swap-slippage__title">
              Slippage
            </div>
            <div className="trade-swap-slippage__description">
              Your transaction will revert if the price changes unfavorably by more than this percentage.
            </div>
            <div className="trade-swap-slippage__slippage-percentage-buttons">
              {PERCENTAGE_BUTTONS.map((item) => (
                <div
                  key={item.id}
                  className={cn('slippage-percentage-button', {
                    'slippage-percentage-button--active': currentPercentage.id === item.id
                  })}
                  onClick={() => setCurrentPercentage(item)}
                >
                  {item?.title}
                </div>
              ))}
            </div>
            <div className="trade-swap-slippage__slippage-percentage-input">
              <InputNumber
                min={0}
                max={100}
                style={{width: '100%', padding: 7}}
                value={customPercentage}
                onChange={handleChangeCustomPercentage}
                placeholder="Custom %"
                controls={false}
                parser={customPercentageParser}
              />
            </div>
          </div>
          <div className="trade-swap-settings-content__trade-swap-expert-mode">
            <div className="trade-swap-expert-mode__expert-mode-header">
              <div className="expert-mode-header__title">
                Expert mode
              </div>
              <div className="expert-mode-header__switch">
                <Switch
                  isOn={isExpertModeOn}
                  onClick={() => setExpertModeOn(!isExpertModeOn)}
                  size='s'
                />
              </div>
            </div>
            <div className="trade-swap-expert-mode__description">
              You will able to confirm swaps with high difference between expected
              and actual value of coins. It may cause bad rates and loss of funds.
              <div style={{marginTop: 10}}>Use at your own risk.</div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
