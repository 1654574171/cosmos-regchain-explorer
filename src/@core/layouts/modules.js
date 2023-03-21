export default () => ([
  {
    scope: 'normal',
    title: 'dashboard.dashboard',
    route: 'dashboard',
  },
  {
    scope: 'normal',
    title: 'dashboard.blocks',
    route: 'blocks',
  },
  {
    scope: 'normal',
    title: 'dashboard.staking',
    route: 'staking',
  },
  {
    scope: 'normal',
    title: 'dashboard.governance',
    route: 'governance',
    exclude: 'emoney',
  },
  {
    scope: 'normal',
    title: 'dashboard.uptime',
    route: 'uptime',
  },
  {
    scope: 'normal',
    title: 'dashboard.parameters',
    route: 'parameters',
  },
  {
    scope: 'normal',
    title: 'dashboard.statesync',
    route: 'statesync',
  },
  {
    scope: 'normal',
    title: 'dashboard.consensus',
    route: 'consensus',
  },
  {
    scope: 'cos-mos',
    title: 'dashboard.gravity',
    route: 'gravity',
  },
  {
    scope: 'osmosis',
    title: 'dashboard.trade',
    route: 'osmosis-trade',
  },
  {
    scope: 'regchain',
    title: 'dashboard.regulatory',
    route: 'regulatory',
    children: [
      {
        title: 'rules',
        route: 'rules',
      },
      {
        title: 'bindings',
        route: 'bindings',
      },
      {
        title: 'registers',
        route: 'registers',
      },
      {
        title: 'relations',
        route: 'relations',
      },
      {
        title: 'system proposal',
        route: 'system-proposal',
      },
    ],
  },
])
