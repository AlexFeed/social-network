import React from 'react';
import s from './ErrorComponents.module.scss';
import cn from "classnames";

function ErrorComponent(props) {
    return <div className={s.errorComponent}>
        <div className={cn(s.withOutTriangle, s.error, {[s.errorAnimation]: props.error})}>{props.error}</div>
    </div>;
}

export default ErrorComponent;
