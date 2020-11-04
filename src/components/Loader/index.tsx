import {
  Line,
  Ptext,
  DotsTextContainer,
  LoadingContainer,
  SuitCaseInside,
  SuitCase,
} from './styles';
import React, { FC, useEffect, useRef } from 'react';
import { Animated, StyleProp } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { LoadingProps } from 'interfaces';

const Loader: FC<LoadingProps> = ({
  loadingText,
  customStylesForContainer,
  colors = Colors.white,
}) => {
  const dotsAnim = useRef(new Animated.Value(0)).current; // Initial value for anim
  const dotsAnimB = useRef(new Animated.Value(0)).current; // Initial value for anim
  const dotsAnimC = useRef(new Animated.Value(0)).current; // Initial value for anim

  const config = {
    useNativeDriver: true,
    delay: 100,
    toValue: -10,
    duration: 1000,
  };

  const configB = {
    useNativeDriver: true,
    delay: 500,
    toValue: -10,
    duration: 1000,
  };

  const configC = {
    useNativeDriver: true,
    delay: 700,
    toValue: -10,
    duration: 1000,
  };

  useEffect(() => {
    Animated.loop(Animated.timing(dotsAnim, config)).start(() => dotsAnim);
  }, [dotsAnim]);

  useEffect(() => {
    Animated.loop(Animated.timing(dotsAnimB, configB)).start(() => dotsAnimB);
  }, [dotsAnimB]);

  useEffect(() => {
    Animated.loop(Animated.timing(dotsAnimC, configC)).start(() => dotsAnimC);
  }, [dotsAnimC]);

  const customStyle: StyleProp<object> = {
    width: 40,
    height: 30,
    position: 'absolute',
    right: 30,
    bottom: 60,
  };

  return (
    <LoadingContainer customStylesForContainer={customStylesForContainer}>
      <SuitCase>
        <SuitCaseInside style={customStyle} />
        <SuitCaseInside>
          <Line></Line>
        </SuitCaseInside>
      </SuitCase>
      <DotsTextContainer>
        {loadingText && <Ptext>{loadingText} </Ptext>}
        <Animated.View style={{ display: 'flex', flexDirection: 'row' }}>
          <Animated.Text
            style={{
              transform: [{ translateY: dotsAnim }],
              fontSize: 22,
              color: colors,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
            }}
          >
            .
          </Animated.Text>
          <Animated.Text
            style={{
              transform: [{ translateY: dotsAnimB }],
              fontSize: 22,
              color: colors,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
            }}
          >
            .
          </Animated.Text>
          <Animated.Text
            style={{
              transform: [{ translateY: dotsAnimC }],
              fontSize: 22,
              color: colors,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
            }}
          >
            .
          </Animated.Text>
        </Animated.View>
      </DotsTextContainer>
    </LoadingContainer>
  );
};

export default Loader;
