export default args => {
    const result = args.configDefaultConfig;
    return result.map(config => {
        config.external.push("react", "react-native", "react-native-macos", "react-native-windows");
        return config;
    });
};
