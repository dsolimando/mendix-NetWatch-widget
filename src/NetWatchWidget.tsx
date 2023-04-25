import {createElement, ReactElement, useCallback} from "react";
import {NetWatchProps} from "../typings/NetWatchProps";
import {Netwatch} from "react-native-netwatch";

export function NetWatchWidget({ visible, onClose, enabled }: NetWatchProps<{}>): ReactElement {

    const onCloseHandler = useCallback(() => {
        if (onClose && onClose.canExecute && !onClose.isExecuting) {
            onClose.execute();
        }
    }, [onClose]);

    return (
        <Netwatch
            onPressClose={() => {
                onCloseHandler()
            }}
            useReactotron={false}
            visible={visible?.value}
            enabled={!!enabled?.value}
            interceptIOS={true}
        />
    );
}
