import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from '../components/Header/Header';

export default {
  title: 'Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = () => {
  <MemoryRouter><Header/></MemoryRouter>
}