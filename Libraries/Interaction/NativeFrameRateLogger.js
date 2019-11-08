/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

import {TurboModuleRegistry, type TurboModule} from 'react-native';

export interface Spec extends TurboModule {
  +setGlobalOptions: (options: {|
    +debug?: ?boolean,
    +reportStackTraces?: ?boolean,
  |}) => void;
  +setContext: (context: string) => void;
  +beginScroll: () => void;
  +endScroll: () => void;
}

export default (TurboModuleRegistry.get<Spec>('FrameRateLogger'): ?Spec);
