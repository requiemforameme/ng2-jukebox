/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { SongsComponent } from './songs.component';

describe('Component: Songs', () => {
  it('should create an instance', () => {
    let component = new SongsComponent();
    expect(component).toBeTruthy();
  });
});
