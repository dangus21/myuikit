import React from 'react';
export interface IProps {
    change?: (event: React.ChangeEvent<HTMLInputElement>) => any;
    click?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => any;
    placeholder?: string;
    value?: string;
    inputProps?: any;
    iconProps?: any;
    wrapperProps?: any;
    password?: boolean;
    showText?: boolean;
    radius?: 'square' | 'basic' | 'round';
}
export declare const MUTInput: {
    (props: IProps): JSX.Element;
    defaultProps: {
        placeholder: string;
        radius: string;
        password: boolean;
        showText: boolean;
        wrapperProps: {};
        inputProps: {};
        iconProps: {};
    };
};