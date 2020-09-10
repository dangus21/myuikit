import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MUTButton, IProps } from '../Components/Button';


export default {
    title: 'Components/Button',
    component: MUTButton,

} as Meta;

const ButtonTemplate: Story<IProps> = (args) => <MUTButton {...args} />

export const primary = ButtonTemplate.bind({});
primary.args = {
    variant: "primary"
};

export const secondary = ButtonTemplate.bind({});
secondary.args = {
    variant: "secondary"
};

export const success = ButtonTemplate.bind({});
success.args = {
    variant: "success"
};

export const error = ButtonTemplate.bind({});
error.args = {
    variant: "error"
};

export const warning = ButtonTemplate.bind({});
warning.args = {
    variant: "warn"
};

export const border = () => (
    <>
        <MUTButton border variant="primary"/>
        <MUTButton border variant="secondary"/>
        <MUTButton border variant="success"/>
        <MUTButton border variant="error"/>
        <MUTButton border variant="warn"/>
        <MUTButton border disabled/>
    </>
)

export const noBorder = () => (
    <>
        <MUTButton variant="primary"/>
        <MUTButton variant="secondary"/>
        <MUTButton variant="success"/>
        <MUTButton variant="error"/>
        <MUTButton variant="warn"/>
        <MUTButton disabled />

    </>
)