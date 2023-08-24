import { TextProps, Text } from 'react-native'
import React from 'react'


interface IRTText extends TextProps {
    // regular- 400, medium- 500, semibold- 600
    weight?: "regular" | "medium" | "semiBold"
}
const RTText: React.FC<IRTText> = ({ weight = "regular", ...rest }) => {
    return (
        <Text
            style={[{ color: "black" }, rest.style]}>
            {rest.children}
        </Text>
    )
}

export default RTText