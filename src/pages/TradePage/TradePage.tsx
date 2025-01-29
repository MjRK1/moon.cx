import React, { useEffect, useState } from 'react';
import { Tabs } from 'commonComponents/Tabs';
import { Tab } from 'types/commonComponents';
import { TradeSwapSettings } from 'components/Trade/TradeSwap/TradeSwapSettings';
import { TradeSwap } from 'src/components/Trade/TradeSwap';
import { TradeLimit } from 'components/Trade/TradeLimit';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { UrlParams } from 'types/tradePage';


const TRADE_TABS: Tab[] = [
  {
    id: 1,
    name: 'swap',
    title: 'Swap',
    content: (<TradeSwap />),
    additionalTabContent: <TradeSwapSettings />
  },
  {
    id: 2,
    name: 'limit',
    title: 'Limit',
    content: (<TradeLimit />),
    additionalTabContent: (<div className="limit-additional-tab-content">My orders</div>)
  }
];


export const TradePage = () => {
  const [currentTab, setCurrentTab] = useState<Tab>();
  const navigate = useNavigate();
  const [urlParams, setUrlParams] = useState<UrlParams>({
    type: 'swap',
  });

  useEffect(() => {
    setCurrentTab(TRADE_TABS[0]);
    const searchParams = {
      type: urlParams.type,
    };
    navigate({
      pathname: window.location.pathname,
      search: createSearchParams({ ...searchParams }).toString()
    });
  }, []);

  const handleTabChange = (tab: Tab) => {
    setCurrentTab(tab);
    const searchParams = {
      type: tab.name
    };
    setUrlParams({type: tab.name});
    navigate({
      pathname: window.location.pathname,
      search: createSearchParams({ ...searchParams }).toString()
    });
  };

  return (
    <div className="trade-page">
      <div className="trade-page-tabs">
        <Tabs
          tabs={TRADE_TABS}
          onTabChange={handleTabChange}
          currentTab={currentTab as Tab}
        />
      </div>
      <div className="trade-page-tab__content">
        {currentTab?.content}
      </div>
    </div>
  );
};
