import React from 'react';
import '../../css/index.css'
import {Input} from '../components/Input/Input'

export default {
  title: 'components/Input',
  component: Input,
  argTypes: {
    example: "This is an Input",
    data: {
      options: ['name', 'mail', 'phone', 'dni', 'other']
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  example: "This is an Input"
};