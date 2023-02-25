import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'My title ',
  text: 'my text',
};
export const Error = Template.bind({});
Error.args = {
  title: 'My title ',
  text: 'my text',
  theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'My title ',
};
export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'my text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'My title ',
  text: 'my text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'My title ',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'my text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
