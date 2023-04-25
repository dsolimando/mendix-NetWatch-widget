import { createElement, ReactElement, useCallback, useEffect, useState } from "react";
import { NetWatchProps } from "../typings/NetWatchProps";
import { Netwatch } from "react-native-netwatch";
import { ValueStatus } from "mendix";

export function NetWatchWidget({ visible, onClose, enabled }: NetWatchProps<{}>): ReactElement {
    const onCloseHandler = useCallback(() => {
        if (onClose && onClose.canExecute && !onClose.isExecuting) {
            onClose.execute();
        }
    }, [onClose]);

    const [visibleState, setVisibleState] = useState(false);
    const [enabledState, setEnabledState] = useState(true);

    useEffect(() => {
        if (visible.status === ValueStatus.Available && visible.value !== undefined) {
            setVisibleState(visible.value);
        }
        if (visible.status === ValueStatus.Available && enabled?.value !== undefined) {
            setEnabledState(enabled.value);
        }
    }, [visible.value, enabled.value]);

    return (
        <Netwatch
            onPressClose={() => {
                onCloseHandler();
            }}
            useReactotron={false}
            visible={visibleState}
            enabled={enabledState}
            interceptIOS={true}
        />
    );
}
