/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

import styled from 'styled-components';
import { Button } from '@kubed/components';

// export const LoginWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   background-color: 	#FF0000;

//   height: screen;

//   .login-card {
//     margin: 140px auto 40px;
//     width: 320px;
//     padding: 20px;
//   }

//   .login-alert {
//     margin: 12px 0;
//   }

//   .login-form {
//     label {
//       height: 30px;
//       font-weight: 600;
//       color: ${({ theme }) => theme.palette.accents_7};
//     }
//   }

//   //.mb12 {
//   //  margin-bottom: 12px;
//   //}
//   //
//   //.mt12 {
//   //  margin-top: 12px;
//   //}
// `;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 100vh; // 確保佔滿整個視窗高度
  width: 100vw; // 確保佔滿整個視窗寬度

  .login-card {
    width: 320px;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); // 增加陰影讓卡片更明顯
    background: ${({ theme }) => theme.palette.background}; // 使用主題背景色
    border-radius: 8px; // 圓角讓 UI 更柔和
  }

  .login-alert {
    margin: 12px 0;
  }

  .login-form {
    label {
      height: 30px;
      font-weight: 600;
      color: ${({ theme }) => theme.palette.accents_7};
    }
  }
`;

export const LoginHeader = styled.a`
  // position: absolute;
  // top: 80px;
  // left: 50%;
  // transform: translateX(-50%);
  z-index: 9;

  img {
    width: 280px;
    height: 50px;
  }
`;

export const WelcomeTitle = styled.div`
  font-weight: 600;
  line-height: 20px;
  text-align: center;
`;

export const LoginDivider = styled.div`
  width: 100%;
  height: 0;
  margin-top: 12px;
  margin-bottom: 20px;
  opacity: 0.6;
  border-bottom: 1px solid;
  border-image-source: radial-gradient(circle at 50% 0, #abb4be, #fff 100%);
  border-image-slice: 1;
`;

export const OauthButton = styled.div`
  padding: 6px;
  border-radius: 2px;
  background-color: #eff4f9;
  color: #36435c;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-top: 8px;

  &:hover {
    background-color: #d8dee5;
  }

  & + .login-form {
    padding-top: 15px;
  }
`;

export const LoginButton = styled.div`
  margin-top: 24px;
`;

export const BackButton = styled(Button)`
  margin-top: 18px;

  &:hover {
    background-color: transparent;
  }

  span {
    line-height: 20px;
    font-weight: 600;
  }
`;
