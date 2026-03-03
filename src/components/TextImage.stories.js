import React from 'react';
import TextImage from './TextImage';

export default {
  title: 'Components/TextImage',
  component: TextImage,
};

const Template = (args) => <TextImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Sample Text',
  image: 'https://via.placeholder.com/150',
};

export const WithDifferentText = Template.bind({});
WithDifferentText.args = {
  text: 'Different Sample Text',
  image: 'https://via.placeholder.com/150',
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  text: 'Text without an image',
};

export const WithLongText = Template.bind({});
WithLongText.args = {
  text: 'This is a long text that demonstrates how the TextImage component handles long pieces of text without breaking.',
  image: 'https://via.placeholder.com/150',
};
