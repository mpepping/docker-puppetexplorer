PUPPETDB_SERVERS = [
  ['puppetdb', '/api']
];

NODE_FACTS = [
  'plp_wrapperclass',
  'plp_release',
  'customer',
  'ipaddress',
  'billable'
];

UNRESPONSIVE_HOURS = 24;

DASHBOARD_PANELS = [
  {
    name: 'Unresponsive nodes',
    type: 'danger',
    query: '#node.report_timestamp < @"now - 24 hours"'
  },
  {
    name: 'Billable nodes' 
    type: 'success',
    query: '#node.billable = yes'
  },
  {
    name: 'Nodes in PROD environment'
    type: 'warning',
    query: '#node.catalog_environment = production'
  }
];
