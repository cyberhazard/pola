import React from 'react';
import styled from 'styled-components';

import vk from './_assets/images/vk.svg';
import twitter from './_assets/images/twitter.svg';
import fb from './_assets/images/fb.svg';
import linkedin from './_assets/images/linkedin.svg';

const Socials = styled.div`
  flex-grow: 1;
`;

const Icon = styled.img``;

export default () => (
  <Socials>
    <Icon src={vk} />
    <Icon src={twitter} />
    <Icon src={fb} />
    <Icon src={linkedin} />
  </Socials>
);
