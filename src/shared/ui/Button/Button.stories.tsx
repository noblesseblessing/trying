import type {Meta, StoryObj} from '@storybook/react';

import {Button, ButtonTheme} from './Button';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";


const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text'
    },
    decorators:[ThemeDecorator(Theme.LIGHT)]

};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR
    },
    decorators:[ThemeDecorator(Theme.LIGHT)]
};

export const Outlined: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE
    },
    decorators:[ThemeDecorator(Theme.LIGHT)]
};
export const OutlinedDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE
    },
    decorators:[ThemeDecorator(Theme.DARK)]
};

export const Disabled: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        disabled:true,
    },
    decorators:[ThemeDecorator(Theme.LIGHT)]
};