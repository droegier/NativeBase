import React, { Component } from 'react';
import { View } from 'react-native';

import { connectStyle } from 'native-base-shoutem-theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';
import {ToastContainer as Toast} from './ToastContainer';
import {Text} from './Text';

class Container extends Component {
  render() {
    return (
      <View ref={c => this._root = c} {...this.props}>
        {this.props.children}
        <Toast ref={ (c) => {Toast.toastInstance = c;}} />
      </View>
    );
  }
}

Container.propTypes = {
  ...View.propTypes,
  style: React.PropTypes.object,
};

const StyledContainer = connectStyle('NativeBase.Container', {}, mapPropsToStyleNames)(Container);

export {
  StyledContainer as Container,
};
