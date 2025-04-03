/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

module.exports = {
  // 主標題
  WORKSPACE_PL: '企業空間',
  WORKSPACE_DESC:
    '企業空間是用於組織您的專案與 DevOps 專案、管理資源存取權限，並在團隊內共享資源的邏輯單元，可作為團隊工作的獨立工作空間。',
  // 列表
  CLUSTER_PL: '叢集',
  ALL_CLUSTERS: '所有叢集',
  // 列表 > 建立 > 基本資訊
  CREATE_WORKSPACE: '建立企業空間',
  WORKSPACE_NAME_EMPTY_DESC: '請輸入企業空間名稱。',
  WORKSPACE_CREATE_DESC: '設定企業空間的基本資訊。',
  ADMINISTRATOR: '管理者',
  WORKSPACE_NAME_EXISTS_DESC: '企業空間名稱已存在。',
  INVALID_WORKSPACE_NAME: '企業空間名稱無效。',
  // 列表 > 建立 >叢集設定
  SELECT_CLUSTERS_DESC: '選擇企業空間需要使用的叢集。',
  NO_CLUSTER_AVAILABLE: '無可用叢集',
  NO_CLUSTER_AVAILABLE_DESC:
    '未發現可用的叢集。請在企業空間建立後，聯絡平臺管理員或叢集管理員將一個叢集授權給該企業空間。',
  WORKSPACE_NO_CLUSTER_TIP: '請聯絡平臺管理員或叢集管理員將一個叢集授權給企業空間。',
  AVAILABLE_CLUSTERS: '可用叢集',
  CLUSTER_SETTINGS: '叢集設定',
  SELECT_HOST_CLUSTER_WARNING:
    '目前系統為多叢集系統，請盡量避免在主叢集上建立資源。主叢集負載過高將導致多叢集系統穩定性下降。',
  // 列表 > 刪除
  DELETE_WORKSPACE: '刪除企業空間',
  WORKSPACE_LOW: '企業空間',
};
