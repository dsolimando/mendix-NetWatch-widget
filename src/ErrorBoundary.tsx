import { Component, createElement, ErrorInfo } from "react";
import { View } from "react-native";

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<{ children: any }, ErrorBoundaryState> {
    constructor(props: { children: any }) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            hasError: true,
            error: error,
            errorInfo: errorInfo
        });
        console.error("Caught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // @ts-ignore
            return <View>Something went wrong.</View>;
        }
        return this.props.children;
    }
}
