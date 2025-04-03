/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

module.exports = {
  // Banner
  ROUTE_DESC:
    '應用路由提供一種聚合服務的方式，您可以通過一個外部可訪問的 IP 位址將叢集的內部服務暴露給外部。',
  PREREQUESTS_FOR_USE_ROUTE_Q: '使用應用路由的前提條件？',
  PREREQUESTS_FOR_USE_ROUTE_A: '如需使用應用路由，您需要聯繫專案管理員啟用專案網關。',
  ACCESS_TYPES_OF_ROUTE_Q: '應用路由支持哪些的訪問模式？',
  ACCESS_TYPES_OF_ROUTE_A: 'UWS 應用路由支持 NodePort 訪問模式以及 LoadBalancer 訪問模式。',
  ROUTE_PL: '應用路由',
  ROUTE_SETTING_PL: '應用路由工具',
  // List
  GATEWAY_ADDRESS_TCAP: '網關位址',
  ROUTE_EMPTY_DESC: '請創建應用路由。',
  // List > Create > Basic Information
  // List > Create > Routing Rules
  ADD_ROUTING_RULE_DESC: '添加一個路由規則將域名路徑映射至服務。',
  ADD_ROUTING_RULE: '添加路由規則',
  ROUTING_RULE_EMPTY_DESC: '請添加至少一個路由規則。',
  PATH_EMPTY_DESC: '請添加至少一個路徑。',
  AUTO_GENERATE_TCAP: '自動生成',
  DOMAIN_NAME_TCAP: '域名',
  DOMAIN_NAME_EMPTY_DESC: '請輸入一個域名。',
  INVALID_DOMAIN_DESC: '域名格式錯誤。',
  INVALID_PATH_DESC: '路徑不正確。',
  MODE_TCAP: '模式',
  PATH_PL: '路徑',
  PATH_SERVICE_TIP: '服務',
  SET_ROUTING_RULES: '設定路由規則',
  SPECIFY_DOMAIN_TCAP: '指定域名',
  NO_GATEWAY_DESC: '如需使用自動生成模式，請聯繫專案管理員在此專案的高級設定中設定網關訪問模式。',
  PATH: '路徑',
  PROTOCOL: '協議',
  PORT: '端口',
  PORT_VALUE: '端口：{value}',
  CERTIFICATE: '證書',
  // List > Create > Advanced Settings
  // List > Edit Information
  // List > Edit YAML
  // List > Edit Routing Rules
  EDIT_ROUTING_RULES: '編輯路由規則',
  // List > Edit Annotations
  EDIT_ANNOTATIONS: '編輯註解',
  // List > Delete
  ROUTE_LOW: '應用路由',
};
