import type {Meta, StoryObj} from '@storybook/react';

import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {PageError} from "./PageError";


const meta: Meta<typeof PageError> = {
    title: 'widget/PageError',
    component: PageError,
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
type Story = StoryObj<typeof PageError>;

export const Light: Story = {
    args: {},
    decorators:[ThemeDecorator(Theme.LIGHT)]

};

export const Dark: Story = {
    args: {},
    decorators:[ThemeDecorator(Theme.DARK)]
};
