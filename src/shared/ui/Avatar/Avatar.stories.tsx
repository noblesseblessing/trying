import type {Meta, StoryObj} from '@storybook/react';
import AvatarImg from './AvatarImg.jpg'
import {Avatar} from "shared/ui/Avatar/Avatar";


const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
    args: {
        size: 150,
        src: AvatarImg,
    }
};