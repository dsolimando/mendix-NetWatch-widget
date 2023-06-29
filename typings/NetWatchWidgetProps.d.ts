/**
 * This file was generated from NetWatchWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";

export interface NetWatchWidgetProps<Style> {
    name: string;
    style: Style[];
    visible: EditableValue<boolean>;
    enabled: EditableValue<boolean>;
    loadMockPresetFromClipboard: EditableValue<boolean>;
    loadMockPresetFromInputParameters: EditableValue<boolean>;
    mockPresetsFromJSONString?: EditableValue<string>;
    onClose?: ActionValue;
}

export interface NetWatchWidgetPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    visible: string;
    enabled: string;
    loadMockPresetFromClipboard: string;
    loadMockPresetFromInputParameters: string;
    mockPresetsFromJSONString: string;
    onClose: {} | null;
}
