import styles from './../styles/StackIcon.module.scss';
import React, { ReactElement, FC } from 'react';

interface StackIconProps {
    icon: React.ComponentType<{size?: string, color?: string}>
    IconName: string;
}

const StackIcon: FC<StackIconProps> = ({icon: IconComponent, IconName}) => {
    return (
        <div className = {styles.root}>
            <IconComponent size = "3rem" color = "#ffffff"/>
            <p className = {styles.name}>{IconName}</p>
        </div>
    );
}

export default StackIcon;