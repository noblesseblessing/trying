import type {Meta, StoryObj} from '@storybook/react';

import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Text, TextTheme} from "shared/ui/Text/Text";


const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description'
    },
    decorators:[ThemeDecorator(Theme.LIGHT)]
};
export const OnlyTitle: Story = {
    args: {
        title: 'Title lorem ipsun',
    },
    decorators:[ThemeDecorator(Theme.LIGHT)]
};
export const OnlyText: Story = {
    args: {
        text: 'Description'
    },
    decorators:[ThemeDecorator(Theme.LIGHT)]
};

export const PrimaryDARK: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description'
    },
    decorators:[ThemeDecorator(Theme.DARK)]
};

export const OnlyTitleDARK: Story = {
    args: {
        title: 'Title lorem ipsun',
    },
    decorators:[ThemeDecorator(Theme.DARK)]
};
export const OnlyTextDARK: Story = {
    args: {
        text: 'Description'
    },
    decorators:[ThemeDecorator(Theme.DARK)]
};
export const Error: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description',
        theme:TextTheme.ERROR,
    },
    decorators:[ThemeDecorator(Theme.LIGHT)]
};