import { createElement, ReactElement, useCallback, useEffect, useState } from "react";
import { Netwatch } from "react-native-netwatch/lib/index";
import { ValueStatus } from "mendix";
import { NetWatchWidgetProps } from "../typings/NetWatchWidgetProps";
import { ErrorBoundary } from "./ErrorBoundary";

export function NetWatchWidget({
    visible,
    onClose,
    enabled,
    loadMockPresetFromClipboard
}: NetWatchWidgetProps<{}>): ReactElement {
    const onCloseHandler = useCallback(() => {
        if (onClose && onClose.canExecute && !onClose.isExecuting) {
            onClose.execute();
        }
    }, [onClose]);

    const [visibleState, setVisibleState] = useState(false);
    const [enabledState, setEnabledState] = useState(true);
    const [loadMockPresetFromClipboardState, setLoadMockPresetFromClipboardState] = useState(false);

    useEffect(() => {
        if (visible.status === ValueStatus.Available && visible.value !== undefined) {
            setVisibleState(visible.value);
        }
        if (visible.status === ValueStatus.Available && enabled?.value !== undefined) {
            setEnabledState(enabled.value);
        }
        if (visible.status === ValueStatus.Available && loadMockPresetFromClipboard?.value !== undefined) {
            setLoadMockPresetFromClipboardState(loadMockPresetFromClipboard.value);
        }
    }, [visible.value, enabled.value, loadMockPresetFromClipboard.value]);

    return (
        /* @ts-ignore */
        <ErrorBoundary>
            <Netwatch
                onPressClose={() => {
                    onCloseHandler();
                }}
                useReactotron={false}
                visible={visibleState}
                enabled={enabledState}
                interceptIOS={true}
                loadMockPresetFromClipboard={loadMockPresetFromClipboardState}
            />
        </ErrorBoundary>
    );
}
