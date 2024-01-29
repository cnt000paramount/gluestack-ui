import React, { forwardRef } from 'react';
import { RangeSliderContext } from './Context';
import { mergeRefs } from '@gluestack-ui/utils';
import { useHover } from '@react-native-aria/interactions';

function RangeSliderTrack<StyledRangeSliderTrackProps>(
  StyledRangeSliderTrack: React.ComponentType<StyledRangeSliderTrackProps>
) {
  return forwardRef(({ children, style, ...props }: any, ref?: any) => {
    const _ref = React.useRef(null);
    const { isHovered } = useHover({}, _ref);
    const {
      trackProps,
      onTrackLayout,
      isFocused,
      isFocusVisible,
      isDisabled,
      isPressed,
      isHoveredProp,
      isDisabledProp,
      isFocusedProp,
      isFocusVisibleProp,
      isPressedProp,
    } = React.useContext(RangeSliderContext);
    // const [isPressed, setIsPressed] = React.useState(false);
    console.log(trackProps, 'TTTTTTTT');
    // const { onMouseDown, onPointerDown, onTouchStart, onKeyDown } = trackProps;
    return <div>hello</div>;
    // return (
    //   <StyledRangeSliderTrack
    //     onLayout={onTrackLayout}
    //     ref={mergeRefs([_ref, ref])}
    //     // {...trackProps}
    //     onMouseDown={(e) => {
    //       console.log(e, '<<<<<');
    //       onPointerDown(e);
    //     }}
    //     style={{ ...style }}
    //     {...props}
    //     isDisabled={isDisabled}
    //     tabIndex={-1}
    //     states={{
    //       hover: isHovered || isHoveredProp,
    //       disabled: isDisabled || isDisabledProp,
    //       focus: isFocused || isFocusedProp,
    //       focusVisible: isFocusVisible || isFocusVisibleProp,
    //       active: isPressed || isPressedProp,
    //     }}
    //     disabled={isDisabled}
    //   >
    //     {children}
    //   </StyledRangeSliderTrack>
    // );
  });
}
export default RangeSliderTrack;