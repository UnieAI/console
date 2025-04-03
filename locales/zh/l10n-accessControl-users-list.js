/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

module.exports = {
  // Banner
  USER_DESC: '管理使用者及其角色。',
  USER_PL: '使用者',
  // List
  NOT_LOGIN_YET: '尚未登入',
  USER_EMPTY_DESC: '請建立一個使用者。',
  USER_ACTIVE: '已啟用',
  USER_AUTHLIMITEXCEEDED: '登入限制',
  USER_PENDING: '待審核',
  USER_DISABLED: '已停用',
  LAST_LOGIN: '最近登入',
  // List > Create
  USERNAME_DESC:
    '使用者名稱只能包含小寫英文字母、數字、連字符（-）及句點（.），必須以小寫英文字母或數字開頭及結尾，長度最多 32 個字元。',
  PASSWORD_DESC:
    '密碼必須包含至少一個數字、小寫英文字母、大寫英文字母及一個特殊符號（~!@#$%^&*()-_=+\\|[{}];:\'",<.>/? 或空格），長度為 8 到 64 個字元。',
  PASSWORD_INVALID_DESC:
    '密碼無效。密碼必須包含數字、大寫英文字母及小寫英文字母，長度為 8 至 64 個字元。',
  PLATFORM_ROLE_DESC: '設定使用者在 UWS 平臺的角色。',
  USER_SETTING_EMAIL_DESC: '電子郵件位址可用於登入 UWS Web 管理主控臺。',
  USERNAME_EXISTS: '使用者名稱已存在，請輸入其他名稱。',
  USERNAME_EMPTY_DESC: '請輸入使用者名稱。',
  PLATFORM_ROLE: '平臺角色',
  CREATE_USER: '建立使用者',
  EMAIL: '電子郵件',
  EMAIL_EXISTS: '電子郵件位址已存在，請輸入其他地址。',
  USERNAME_INVALID: '使用者名稱無效。{message}',
  USERNAME: '使用者名稱',
  PASSWORD: '密碼',
  // List > Edit
  EDIT_USER: '編輯使用者',
  // List > Delete
  USER_LOW: '使用者',
  DELETING_CURRENT_USER_NOT_ALLOWED: '無法刪除目前使用者。',
  // ListLayout -> NavTitle
  USER_AND_ROLE: '使用者與角色',
};
