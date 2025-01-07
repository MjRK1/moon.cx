import React from 'react';
import { ConfigProvider, InputNumber as InputNumberAntd } from 'antd';
import { IInputNumber } from 'types/commonComponents';


export const InputNumber = (props: IInputNumber) => {
  const {
    style = {width: '100%'},
  } = props;
  return (
    <ConfigProvider
      theme={
        {
          components: {
            InputNumber: {
              activeShadow: 'none',
              activeBorderColor: 'var(--color-black2)'
            }
          },
          token: {
            colorPrimary: 'var(--color-black4)',
            colorErrorHover: '#FF7474',
            colorPrimaryHover: 'var(--color-black2)',
            colorText: 'var(--color-white)',
            colorTextQuaternary: 'var(--color-white)',
            fontSize: 16,
            fontFamily: 'Montserrat, sans-serif',
            colorBgContainer: 'var(--color-black3)',
            controlHeight: 36,
            colorBgElevated: 'var(--color-black2)',
            colorBorder: 'var(--color-black2)',
            colorBorderSecondary: 'var(--color-black2)',
            colorIcon: 'var(--color-white)',
          }
        }
      }
    >
      {/*@ts-ignore*/}
      <InputNumberAntd
        {...props}
        style={{...style, fontSize: 16}}
      />
    </ConfigProvider>
  );
};
