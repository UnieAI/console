/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

import { createGlobalStyle } from 'styled-components';

import markdownStyles from './markdown';
import terminalStyles from './terminal';
import lightboxStyles from './lightbox';
import { notifyStyles } from './notify';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    background-color: #eff4f9;
    color: #242e42;
    line-height: 1.67;
    height: 100%;
  }

  #root{
    height: 100%;
  }

  a {
    color: #242e42;

    &:hover {
      color: #4e5cf1;
    }
  }

  ul, li {
    margin: 0;
    padding: 0;
  }

  ::selection {
    background-color:rgb(83, 39, 241);
    color: #fff;
  }

  ::placeholder {
    font-weight: 400;
  }

  strong {
    font-weight: 500;
  }

  .kubed-icon__coloured {
    color: #4e5cf1;
    fill: #a6adf5;
  }

  .mt12 {
    margin-top: 12px;
  }

  .mr12 {
    margin-right: 12px;
  }

  .mb12 {
    margin-bottom: 12px;
  }

  .ml12 {
    margin-left: 12px;
  }

  .p-20 {
    padding: 20px;
  }

  .page-loading {
    display: inline-block;
    position: fixed;
    top: 50%;
    left: 50%;
    //transform: translate(-50%,-50%);
    margin-top: -16px;
    margin-left: -16px;
    z-index: 1000
  }

  .form-item {
    .input-wrapper,
    .kubed-select {
      width: 100%;
      max-width: 455px;
    }
  }

  .password-tip-dropdown {
    width: 350px;
    padding: 0 16px 16px;

    .tip-title {
      font-weight: 500;
    }
  }

  .banner-desc {
    .kubed-icon {
      margin-left: 12px;
      margin-right: 4px;
      vertical-align: text-top;
    }

    a {
      font-weight: 600;
      color: #3385b0;
    }
  }

  .table-button {
    min-width: 96px;
  }

  .modal-pd {
    .kubed-modal-body {
      padding: 20px;
    }
  }

  .kubed-select-item-option.kubed-select-item-option-disabled {
    cursor: not-allowed;
  }

  ${markdownStyles};
  ${terminalStyles};
  ${lightboxStyles};
  ${notifyStyles};

  table tr {
    &:hover .favorite-action {
      visibility: visible;
    }

    .favorite-action {
      visibility: hidden;
    }

    .favorite-active-action {
      visibility: visible;
    }
  }
  .kube-table {
    td.table-cell {
      word-break: break-word;

      .field-label {
        max-width: 350px;
      }
     }
  }

  .kube-table-wrapper {
    padding: 0 12px 12px;
    table.kube-table {
      width: 100%;
    }
    table.kube-table--max-context {
      width: max-content;
    }
    td.table-cell {
      .field-content {
        word-break: break-word;
      }
      .field-label {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
        white-space: unset;
      }
    }
  }
  input[type="checkbox"] {
    /* 重置瀏覽器預設樣式 */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    /* 基礎樣式 */
    width: 20px;
    height: 20px;
    border: 2px solid #4e5cf1; /* 繼承專案主色 */
    background-color: white;
    cursor: pointer;
    transition: all 0.2s ease;
    /* 控制位置和形狀 */
    display: inline-block;
    vertical-align: middle;
    position: relative;
  }
    input[type="checkbox"]:checked {
    /* 勾選時的背景色 */
    background-color: rgb(83, 39, 241) !important; /* 指定顏色 */
    border-color: rgb(83, 39, 241) !important;
  }
    input[type="checkbox"]:checked::before {
  background-color: rgb(83, 39, 241) !important; /* 指定顏色 */
  content: attr(data-checked-content) !important; /* 如果需要改符號內容 */
}

/* 如果需要移除原有偽元素的其他樣式 */
input[type="checkbox"]:checked::before {
  background-image: none !important; /* 移除可能的背景圖片 */
  border: none !important; /* 移除邊框 */
}
`;

export default GlobalStyles;
