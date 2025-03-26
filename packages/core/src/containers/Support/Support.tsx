/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

import React from 'react';

import { Community, UWSEnterprise, Footer } from './components';
import { Root, Wrapper } from './Support.styles';

export function Support() {
  return (
    <Root>
      <Wrapper>
        <Community />
        <UWSEnterprise />
        <Footer />
      </Wrapper>
    </Root>
  );
}
