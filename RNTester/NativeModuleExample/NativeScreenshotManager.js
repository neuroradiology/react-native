/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

import {TurboModuleRegistry, type TurboModule} from 'react-native';

export interface Spec extends TurboModule {
  +getConstants: () => {||};
  takeSnapshot(id: string): Promise<string>;
}

const NativeModule = TurboModuleRegistry.get<Spec>('ScreenshotManager');

export function takeSnapshot(id: string): Promise<string> {
  if (NativeModule != null) {
    return NativeModule.takeSnapshot(id);
  }
  return Promise.reject();
}
