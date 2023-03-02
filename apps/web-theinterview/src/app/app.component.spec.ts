import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLinkWithHref } from '@angular/router';
import { Component, DebugElement } from '@angular/core';

import { of } from 'rxjs';
import { AppComponent } from './app.component';

describe('SecurityQuoteOwnerBaseDirective', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;

  // beforeEach(() => {
  //   TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  // });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [],
      imports: [RouterTestingModule],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(component.hello()).toEqual('hello launchpoint');
  });
});
