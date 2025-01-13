import React, { useState } from 'react';
import { ICustomExpiryModalProps } from 'types/tradeLimit';
import { Modal } from 'commonComponents/Modal';
import { InputNumber } from 'commonComponents/Input/inputNumber';


export const CustomExpiryModal = (props: ICustomExpiryModalProps) => {
  const {
    isOpen,
    setOpen,
    onChangeExpiry,
  } = props;
  const [hours, setHours] = useState<number>(0);
  const [isHoursFocused, setHoursFocused] = useState<boolean>(false);
  const [minutes, setMinutes] = useState<number>(0);
  const [isMinutesFocused, setMinutesFocused] = useState<boolean>(false);

  const renderNumberInput = (type: string) => {
    if (type === 'hours') {
      if (!isHoursFocused && hours === 0) {
        return (
          <div
            className="custom-expiry-input__unfocused-input"
            onClick={() => {
              setHoursFocused(true);
            }}
          >
            0 <span>Hours</span>
          </div>
        );
      }
      return (
        <InputNumber
          autoFocus
          onBlur={() => setHoursFocused(false)}
          value={hours}
          onChange={(value) => {
            setHours(value as number);
          }}
          controls={false}
          className="custom-expiry-input__focused-inputs"
        />
      );
    }
    if (!isMinutesFocused && minutes === 0) {
      return (
        <div
          className="custom-expiry-input__unfocused-input"
          onClick={() => {
            setMinutesFocused(true);
          }}
        >
          0 <span>Minutes</span>
        </div>
      );
    }
    return (
      <InputNumber
        autoFocus
        value={minutes}
        min={0}
        max={59}
        onChange={(value) => {
          setMinutes(value as number);
        }}
        onBlur={() => setMinutesFocused(false)}
        controls={false}
        className="custom-expiry-input__focused-inputs"
      />
    );
  };

  const handleSuccess = () => {
    if (hours || minutes) {
      let newExpiryTitle = '';
      if (hours > 0) {
        newExpiryTitle += `${hours}h `;
      }
      if (minutes > 0) {
        newExpiryTitle += `${minutes}min`;
      }
      const newExpiry = {
        title: newExpiryTitle,
        value: {
          days: null,
          hours: hours ? hours : null,
          minutes: minutes ? minutes : null,
        }
      };
      onChangeExpiry(newExpiry);
    } else {
      onChangeExpiry({
        title: 'Never',
        value: null
      });
    }
    setOpen(false);
    setHours(0);
    setMinutes(0);
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Custom Expiry Period"
      withCross={true}
      withSuccess={true}
      successText="Set period"
      onClose={() => setOpen(false)}
      onSuccess={() => handleSuccess()}
    >
      <div className="custom-expiry-period">
        <div className="custom-expiry-period__hours-input">
          {renderNumberInput('hours')}
        </div>
        <div className="custom-expiry-period__minutes-input">
          {renderNumberInput('minutes')}
        </div>
      </div>
    </Modal>
  );
};
