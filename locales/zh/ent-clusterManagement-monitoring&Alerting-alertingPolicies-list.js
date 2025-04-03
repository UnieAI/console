/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

module.exports = {
  // 列表
  POLICY_STATUS: '策略狀態',
  RULE_STATUS: '規則狀態',
  TIME_SPENT: '耗時',
  RECENT_DETECT_TIME: '最近檢查時間',
  EDIT_RULES: '編輯規則',
  DISABLE_ALERTING_POLICY: '停用警示策略',
  ENABLE_ALERTING_POLICY: '啟用警示策略',
  DISABLE_ALERTING_POLICY_TIP:
    '停用警示策略後，系統將停止為受監控資源生成警示訊息。執行此操作前請謹慎確認。',
  RESET: '重設',
  RESET_ALERTING_POLICY_DESC: '您確定要重設警示策略嗎？',
  RESET_MULTIPLE_ALERTING_POLICIES_DESC: '您確定要重設警示策略 {name} 嗎？',
  RESET_SUCCESSFUL: '重設成功。',
  // 列表 > 新增 > 基本資訊
  CHECK_INTERVAL: '檢查間隔',
  ALERTING_POLICY_CHECK_INTERVAL_DESC: '設定指標檢查的時間間隔。',
  // 列表 > 新增 > 規則設置 > 規則列表
  Rule: '規則',
  ADD_ALERTING_RULE: '新增警示規則',
  ADD_ALERTING_RULE_DESC: '為警示策略新增警示規則。',
  DURATION_REQUIRED: '請設定持續時間。',
  OPERATOR_REQUIRED: '請設定運算子。',
  LASTING_MINUTES: '{minutes, plural, =1 {1 分鐘} other {# 分鐘}}',
  CUSTOM_RULE_NAME_DESC: '規則名稱可包含任意字符，最長 63 個字符。',
  // 列表 > 新增 > 規則設置 > 規則模板
  CONDITION: '條件',
  MESSAGE_SUMMARY: '摘要',
  MESSAGE_SUMMARY_DESC: '摘要可包含任意字符，最長 63 個字符。',
  MESSAGE_DETAILS: '詳細內容',
  MESSAGE_DETAILS_DESC: '訊息詳細內容可包含任何字符，最大長度為 63 個字符。',
};
