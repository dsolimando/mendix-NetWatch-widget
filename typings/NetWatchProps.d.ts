/**
 * This file was generated from NetWatchWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";

export interface NetWatchProps<Style> {
    name: string;
    style: Style[];
    visible: EditableValue<boolean>;
    enabled: EditableValue<boolean>;
    onClose?: ActionValue;
}

export interface NetWatchPreviewProps {
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
    onClose: {} | null;
}
