/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

module.exports = {
  // 羣集列表
  BATCH_MANAGE: '批次管理',

  // 羣集列表 > 批次管理 > 編輯標籤
  CLUSTER_REPEATED_TAGS_DESC: '標籤的鍵必須在每個叢集上唯一。',
  CLUSTER_MAX_TAGS_DESC: '每個叢集最多可以設定 5 個標籤。',
  EMPTY_TAG_LABEL_DESC: '請輸入標籤的鍵。',
  EMPTY_TAG_VALUE_DESC: '請輸入標籤的值。',
  HAS_ADD_TAGS: '已新增標籤',

  // 羣集列表 > 新增叢集
  CLUSTER_TYPE_DESC: '選擇一種類型來標識叢集的用途。',

  // 羣集列表 > 刪除叢集
  DELETE_CLUSTER_SWIPE_DESC: '我瞭解並此操作的風險。',
  REMOVE_CLUSTER_TIP_C:
    '請參閱 UWS 官方文件清除叢集中的配置資訊，以避免當前叢集加入其他多叢集系統時出現資源衝突。',

  // 羣集標籤
  CLUSTER_TAGS: '叢集標籤',
  NO_CLUSTER_TAGS: '未發現叢集標籤',
  NO_CLUSTER_TAGS_DESC: '請建立叢集標籤。',
  CLUSTER_TAG_ADD_HELP: '如果現有標籤不符合需求，您可以建立新標籤。',

  // 羣集標籤 > 建立
  TAG_PL: '標籤',
  CREATE_TAGS: '建立標籤',
  CREATE_TAGS_DESC: '不同標籤的鍵可以相同。',
  ENT_CLUSTER_TAG_DESC: '鍵和值不可為空，且長度最長 63 個字元。',
  CLUSTER_TAG_EMPTY_DESC: '請新增一個標籤。',

  // 羣集標籤 > 刪除
  DELETE_MULTIPLE_TAGS: '批量刪除標籤',
  DELETE_TAG: '刪除標籤',
  DELETE_CLUSTER_TAG_DESC: '標籤刪除後將從所有叢集上移除。',
  DELETE_CLUSTER_TAG_CONFIRM_DESC:
    '請輸入標籤的鍵與值 <strong>{resource}</strong> 以確認您瞭解並此操作的風險。',
  DELETE_CLUSTER_TAGS_CONFIRM_DESC:
    '請輸入標籤的鍵與值 <strong>{resource}</strong> 以確認您瞭解並此操作的風險。',

  // 羣集標籤 > 編輯
  EDIT_TAG: '編輯標籤',

  // 羣集標籤 > 綁定叢集
  ADD_TO_CLUSTERS: '新增至叢集',
  ADD_TAG_TO_CLUSTERS: '將標籤新增至叢集',
  ADD_TAG_DESC: '標籤的鍵必須在每個叢集上唯一。新標籤不會覆寫已存在的標籤。',
  ADD_TAG_SUCCESSFUL: '標籤新增成功。',

  // 羣集標籤 > 解除綁定叢集
  REMOVE_FROM_CLUSTERS: '從叢集移除',
  REMOVE_TAG_FROM_CLUSTERS: '從叢集移除標籤',
  REMOVE_TAG: '移除標籤',
  REMOVE_TAG_DESC: '您確定要從叢集移除此標籤嗎？',
  REMOVE_TAG_SUCCESSFUL: '標籤移除成功。',

  // 羣集標籤 > 解除綁定叢集
  NO_CLUSTER_FOUND: '未發現叢集',
};
