/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { Button, Card, Alert, Form, FormItem, Input, InputPassword } from '@kubed/components';
import { cookie, request } from '@ks-console/shared';
import {
  LoginHeader,
  LoginWrapper,
  WelcomeTitle,
  LoginDivider,
  OauthButton,
  LoginButton,
  BackButton,
  LoginImageWrapper,
} from './styles';

type Server = {
  url: string;
  title: string;
  type: string;
  endSessionURL?: string;
};

function mix(salt: string, str: string) {
  if (str.length > salt.length) {
    salt += str.slice(0, str.length - salt.length);
  }

  const ret = [];
  const prefix = [];
  for (let i = 0, len = salt.length; i < len; i++) {
    const tomix = str.length > i ? str.charCodeAt(i) : 64;
    const sum = salt.charCodeAt(i) + tomix;
    prefix.push(sum % 2 === 0 ? '0' : '1');
    ret.push(String.fromCharCode(Math.floor(sum / 2)));
  }

  return `${window.btoa(prefix.join(''))}@${ret.join('')}`;
}

function encrypt(salt: string, str: string) {
  return mix(salt, window.btoa(str));
}

const Login = () => {
  const oauthServers = get(globals, 'oauthServers', []);

  const [errorMessage, setErrorMessage] = useState('');
  const [waitRedirect, setWaitRedirect] = useState(false);

  const [isLdapLogin, setIsLdapLogin] = useState(false);
  const isRegularLogin = !isLdapLogin;

  const [selectedServer, setSelectedServer] = useState<Server | null>(null);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') ?? '';
  const title = searchParams.get('title');
  const lowerCaseType = type.toLowerCase();
  const selectedServerByQuery = oauthServers.find((server: Server) => server.title === title);
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    if (lowerCaseType.indexOf('ldap') > -1 && selectedServerByQuery) {
      setIsLdapLogin(true);
      setSelectedServer(selectedServerByQuery);
    } else {
      setIsLdapLogin(false);
      setSelectedServer(null);
    }
  }, [lowerCaseType, title]);

  const handleOAuthLogin = (server: Server) => {
    const info = {
      name: server.title,
      type: server.type,
      endSessionURL: server.endSessionURL,
    };
    cookie('oAuthLoginInfo', JSON.stringify(info));
    if (server?.type === 'LDAPIdentityProvider') {
      setIsLdapLogin(true);
      setSelectedServer(server);
    } else {
      window.location.href = server.url;
    }
  };

  const handleLoginPost = (formData: { username: string; password: string }) => {
    cookie('oAuthLoginInfo', '');
    const url = isLdapLogin ? `oauth/login/${selectedServer?.title}` : 'login';
    const { username, password } = formData;
    const data = {
      username,
      encrypt: encrypt('kubesphere', password),
    };

    return request.post(url, data);
  };

  const loginMutation = useMutation(handleLoginPost, {
    onSuccess: (data: any) => {
      if (data.status !== 200) {
        setErrorMessage(data.message);
      }
      if (data.success) {
        setWaitRedirect(true);
        // history.push(data.redirect);
        window.location.href = data.redirect;
      }
    },
  });

  const handleBack = () => {
    setErrorMessage('');
    setIsLdapLogin(false);
    setSelectedServer(null);
    navigate('/login');
  };

  // const kseLogo = globals.config.logo || globals.defaultTheme.logo;
  // const logo = globals.useDefaultTheme ? kseLogo : globals.theme.logo;

  return (
    <LoginWrapper>
      <div
        style={{
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          padding: '20px',
          maxWidth: '80%',
        }}
      >
        <img
          src="/assets/unieai-logo.png"
          style={{
            marginTop: '40px',
            marginBottom: '20px',
            height: '15px',
            marginLeft: '50px',
          }}
        />
        <div
          style={{
            width: '100%',
            height: '100%',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
          }}
        >
          <div style={{ marginBottom: '2rem', marginTop: '5rem' }}>
            <div
              style={{
                fontSize: '1.575rem', // 小字
                fontWeight: 'bold',
                letterSpacing: '0.05em', // 字距
                color: '#111827', // 深色
                // textTransform: "uppercase",
                marginBottom: '0.5rem',
              }}
            >
              UnieAI Web Service
            </div>

            <div
              style={{
                fontSize: '2.875rem', // 顯眼大字
                fontWeight: 'bold', // 粗體
                color: '#111827', // 一致深色
              }}
            >
              {isRegularLogin
                ? t('WELCOME')
                : t('USERNAME_WITH_TITLE', { title: selectedServer?.title })}
            </div>
          </div>
          <LoginDivider />
          {isRegularLogin &&
            oauthServers.map((server: Server) => (
              <OauthButton
                key={server.url}
                data-url={server.url}
                onClick={() => {
                  handleOAuthLogin(server);
                }}
              >
                <span>{t('LOG_IN_WITH_TITLE', { title: server?.title })}</span>
              </OauthButton>
            ))}

          <Form
            className="login-form"
            size="lg"
            style={{ width: '60%', marginBottom: '48px' }}
            onFinish={loginMutation.mutate}
          >
            {/* Email */}
            <FormItem
              label="Email address"
              name="username"
              className="username"
              rules={[
                {
                  required: true,
                  message: t('INPUT_USERNAME_OR_EMAIL_TIP'),
                },
              ]}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  fontSize: '1rem',
                  borderRadius: '0.75rem',
                  border: '1px solid #ccc',
                  outline: 'none',
                  marginBottom: '1rem',
                }}
              />
            </FormItem>

            {/* Password */}
            <FormItem
              label="Password"
              name="password"
              rules={[{ required: true, message: t('PASSWORD_EMPTY_DESC') }]}
            >
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    fontSize: '1rem',
                    borderRadius: '0.75rem',
                    border: '1px solid #ccc',
                    outline: 'none',
                    paddingRight: '4rem',
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '0.8rem',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    fontSize: '0.875rem',
                    color: '#555',
                    cursor: 'pointer',
                    borderLeft: '0.5px',
                  }}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </FormItem>

            {/* Submit 按鈕 */}
            <LoginButton>
              <Button block loading={loginMutation.isLoading || waitRedirect}>
                Submit <span className="arrow">→</span>
              </Button>

              {!isRegularLogin && (
                <BackButton variant="text" block onClick={handleBack}>
                  {t('BACK')}
                </BackButton>
              )}
            </LoginButton>
          </Form>

          {errorMessage && (
            <Alert className="login-alert" type="error" showIcon={false}>
              {t(errorMessage)}
            </Alert>
          )}
        </div>
      </div>
      <LoginImageWrapper>
        <img
          // src="/assets/login-pic.png"
          src="https://i.pinimg.com/originals/f2/e3/54/f2e354644d7d615c5e7efa787daea9e7.gif"
          style={{
            width: 'auto',
            height: '100%',
            borderRadius: '0.575rem',
          }}
        />
      </LoginImageWrapper>
    </LoginWrapper>
  );
};

export default Login;

{
  /* <WelcomeTitle>
            UWS<br/>
            {isRegularLogin
              ? t('WELCOME')
              : t('USERNAME_WITH_TITLE', { title: selectedServer?.title })}
          </WelcomeTitle> */
}
{
  /* <LoginHeader href="/">
        <img src={logo} />
      </LoginHeader>
       */
}
{
  /* <Card className="login-box" contentClassName="login-card">
          <WelcomeTitle>
            {isRegularLogin
              ? t('WELCOME')
              : t('USERNAME_WITH_TITLE', { title: selectedServer?.title })}
          </WelcomeTitle>
          <LoginDivider />
          {isRegularLogin &&
            oauthServers.map((server: Server) => (
              <OauthButton
                key={server.url}
                data-url={server.url}
                onClick={() => {
                  handleOAuthLogin(server);
                }}
              >
                <span>{t('LOG_IN_WITH_TITLE', { title: server?.title })}</span>
              </OauthButton>
            ))}
          {errorMessage && (
            <Alert className="login-alert" type="error" showIcon={false}>
              {t(errorMessage)}
            </Alert>
          )}
          <Form className="login-form" size="md" onFinish={loginMutation.mutate}>
            <FormItem
              label={
                isRegularLogin
                  ? t('USERNAME_OR_EMAIL')
                  : t('USERNAME_WITH_TITLE', { title: selectedServer?.title })
              }
              name="username"
              className="username"
              rules={[
                {
                  required: true,
                  message: t('INPUT_USERNAME_OR_EMAIL_TIP'),
                },
              ]}
            >
              <Input placeholder="user@example.com" />
            </FormItem>
            <FormItem
              label={t('PASSWORD')}
              name="password"
              rules={[{ required: true, message: t('PASSWORD_EMPTY_DESC') }]}
            >
              <InputPassword placeholder="Password" />
            </FormItem>
            <LoginButton>
              <Button
                color="secondary"
                block
                shadow
                radius="xl"
                loading={loginMutation.isLoading || waitRedirect}
              >
                {t('LOG_IN')}
              </Button>
              {!isRegularLogin && (
                <BackButton variant="text" block onClick={handleBack}>
                  {t('BACK')}
                </BackButton>
              )}
            </LoginButton>
          </Form>
        </Card> */
}
