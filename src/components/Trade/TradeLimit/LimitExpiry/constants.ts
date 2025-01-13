export const EXPIRY_ITEM_LIST = [
  {
    id: 1,
    expiry: {
      title: 'Never',
      value: null
    },
  },
  {
    id: 2,
    expiry: {
      title: '1 hour',
      value: {
        hours: 1
      }
    },
  },
  {
    id: 3,
    expiry: {
      title: '1 day',
      value: {
        days: 1,
      }
    },
  },
  {
    id: 4,
    expiry: {
      title: '3 days',
      value: {
        days: 3
      }
    },
  },
  {
    id: 5,
    expiry: {
      title: '7 days',
      value: {
        days: 7
      }
    },
  },
  {
    id: 6,
    expiry: {
      title: '30 days',
      value: {
        days: 30
      }
    },
  }
];


export const expiryVariants = {
  visible: {
    opacity: 1,
    // height: 'auto',
    transition: {
      type: 'tween',
      duration: 0.2
    }
  },
  hidden: {
    opacity: 0,
    // height: 0,
    transition: {
      type: 'tween',
      duration: 0.2
    }
  },
};

export const expireSelectVariants = {
  visible: {
    rotate: 180,
    transition: {
      duration: 0.1
    }
  },
  hidden: {
    rotate: 0,
    transition: {
      duration: 0.1
    }
  },
};
