import { createElement, ReactElement, useCallback, useEffect, useState } from "react";
import { Netwatch } from "react-native-netwatch/lib/index";
import { ValueStatus } from "mendix";
import { NetWatchWidgetProps } from "../typings/NetWatchWidgetProps";
import { View } from "react-native";

export function NetWatchWidget({
    visible,
    onClose,
    enabled,
    loadMockPresetFromClipboard,
    mockPresetsFromJSONString,
    loadMockPresetFromInputParameters
}: NetWatchWidgetProps<{}>): ReactElement {
    const onCloseHandler = useCallback(() => {
        if (onClose && onClose.canExecute && !onClose.isExecuting) {
            onClose.execute();
        }
    }, [onClose]);

    const [visibleState, setVisibleState] = useState(false);
    const [enabledState, setEnabledState] = useState(true);
    const [loadMockPresetFromClipboardState, setLoadMockPresetFromClipboardState] = useState(false);
    const [mockPresetsState, setMockPresetsState] = useState([]);
    const [loadMockPresetFromInputParametersState, setLoadMockPresetFromInputParametersState] = useState(false);

    useEffect(() => {
        if (visible.status === ValueStatus.Available && visible.value !== undefined) {
            setVisibleState(visible.value);
        }
    }, [visible.status, visible.value]);

    useEffect(() => {
        if (enabled.status === ValueStatus.Available && enabled?.value !== undefined) {
            setEnabledState(enabled.value);
        }
    }, [enabled.status, enabled.value]);

    useEffect(() => {
        if (
            mockPresetsFromJSONString?.status === ValueStatus.Available &&
            mockPresetsFromJSONString?.value !== undefined
        ) {
            setMockPresetsState(JSON.parse(mockPresetsFromJSONString.value));
        }
    }, [mockPresetsFromJSONString?.status, mockPresetsFromJSONString?.value]);

    useEffect(() => {
        if (
            loadMockPresetFromInputParameters?.status === ValueStatus.Available &&
            loadMockPresetFromInputParameters?.value !== undefined
        ) {
            setLoadMockPresetFromInputParametersState(loadMockPresetFromInputParameters.value);
        }
    }, [loadMockPresetFromInputParameters?.status, loadMockPresetFromInputParameters?.value]);

    useEffect(() => {
        if (
            loadMockPresetFromClipboard.status === ValueStatus.Available &&
            loadMockPresetFromClipboard?.value !== undefined
        ) {
            setLoadMockPresetFromClipboardState(loadMockPresetFromClipboard.value);
        }
    }, [loadMockPresetFromClipboard.status, loadMockPresetFromClipboard.value]);

    return (
        /* @ts-ignore */
        <View style={{ height: 0, width: 0 }}>
            <Netwatch
                onPressClose={() => {
                    onCloseHandler();
                }}
                useReactotron={false}
                visible={visibleState}
                enabled={enabledState}
                interceptIOS={true}
                loadMockPresetFromClipboard={loadMockPresetFromClipboardState}
                mockPresets={mockPresetsState}
                loadMockPresetFromInputParameters={loadMockPresetFromInputParametersState}
            />
        </View>
    );
}
