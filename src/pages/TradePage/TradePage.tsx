import React, { useState } from 'react';
import { Tabs } from 'commonComponents/Tabs';
import { Tab } from 'types/commonComponents';
import { TradeSwapSettings } from 'components/TradeSwap/TradeSwapSettings';


const TRADE_TABS: Tab[] = [
  {
    id: 1,
    name: 'swap',
    title: 'Swap',
    content: (<div>swap</div>),
    additionalTabContent: <TradeSwapSettings />
  },
  {
    id: 2,
    name: 'limit',
    title: 'Limit',
    content: (<div>limit</div>)
  }
];


export const TradePage = () => {
  const [currentTab, setCurrentTab] = useState<Tab>(TRADE_TABS[0]);

  const handleTabChange = (tab: Tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="trade-page">
      <div className="trade-page-tabs">
        <Tabs
          tabs={TRADE_TABS}
          onTabChange={handleTabChange}
          currentTab={currentTab}
        />
      </div>
    </div>
  );
};
