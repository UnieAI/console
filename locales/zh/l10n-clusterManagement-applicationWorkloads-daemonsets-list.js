/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

module.exports = {
  // 主標題
  // 列表
  DAEMONSETS: '守護進程集',
  DAEMONSET_EMPTY_DESC: '請建立一個守護進程集。',
  // 列表 > 建立 > 基本資訊
  // 列表 > 建立 > 容器組設定
  // 列表 > 建立 > 容器組設定 > 新增容器 > 更新策略 > 滾動更新設定
  MIN_READY_SECONDS: '容器組就緒最短執行時間（s）',
  MAX_UNAVAILABLE_PODS: '最大不可用容器組數量',
  ROLLING_UPDATE_SETTINGS: '滾動更新設定',
  MAX_UNAVAILABLE_PODS_DESC: '更新過程中允許的不可用容器組副本的最大數量或百分比。',
  MIN_READY_SECONDS_DESC: '容器組副本被視為就緒所需的最短穩定執行時間。',
  MIN_READY_SECONDS_EMPTY: '請設定容器組副本被視為就緒所需的最短穩定執行時間。',
  MAX_UNAVAILABLE_EMPTY: '請設定更新過程中允許的不可用容器組副本的最大數量或百分比。',
  // 列表 > 建立 > 容器組設定 > 新增容器 > 健康檢查 > 存活檢查 > HTTP 請求
  FAILURE_THRESHOLD: '失敗門檻',
  HTTP_REQUEST: 'HTTP 請求',
  INITIAL_DELAY_S: '初始延遲（s）',
  INITIAL_DELAY_TIMEOUT_VALUE: '{delay}s 初始延遲，{timeout}s 超時時間',
  PROBE_TIME: '初始延遲: {delay}s 超時時間:{timeout}s',
  TIMEOUT_PERIOD_S: '超時時間（s）',
  CHECK_INTERVAL_S: '檢查間隔（s）',
  SUCCESS_THRESHOLD: '成功門檻',
  INITIAL_DELAY_DESC: '容器啟動後探針啟動前的延遲時間。',
  TIMEOUT_PERIOD_DESC: '探針超時時間。探針超時後，檢查將被視為失敗。取值必須為整數，最小值為 0。',
  CHECK_INTERVAL_DESC: '執行檢查的時間間隔。取值必須為整數，最小值為 1。',
  SUCCESS_THRESHOLD_DESC:
    '檢查失敗後再次被視為成功所需的最小連續成功次數。最小值為 1。對存活探針和啟動探針，此參數值必須為 1。',
  FAILURE_THRESHOLD_DESC: '檢查成功後再次被視為失敗所需的最小連續失敗次數。最小值為 1。',
  // 列表 > 建立 > 容器組設定 > 新增容器 > 健康檢查 > 存活檢查 > 指令
  PROBE_COMMAND_EMPTY: '請輸入至少一項指令。',
  // 列表 > 建立 > 容器組設定 > 新增容器 > 健康檢查 > 存活檢查 > TCP 埠
  TCP_PORT: 'TCP 埠口',
  // 列表 > 建立 > 存儲設定
  MOUNT_PATH_IN_USE: '掛載路徑已被使用，請輸入其他掛載路徑。',
  GRPC_PORT: 'GRPC 埠口',
};
