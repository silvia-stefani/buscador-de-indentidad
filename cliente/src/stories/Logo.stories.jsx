import React from 'react';
import colors from '../utils/colors';
import {Logo} from '../components/Logo';


export default {
  title: 'design/Logo',
  component: Logo
};

const Template = (args) => <Logo {...args} />;

export const Outline = Template.bind({});
Outline.args = {
  outline: true
};

export const Fill = Template.bind({});
Fill.args = {
  outline: false,
};