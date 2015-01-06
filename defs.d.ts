/// <reference path="logger.d.ts"/>
/// <reference path="jquery.d.ts"/>
/// <reference path="angular.d.ts"/>
/// <reference path="angular-resource.d.ts"/>
/// <reference path="angular-route.d.ts"/>

/// <reference path="lodash.d.ts"/>
/// <reference path="underscore.string.d.ts"/>

declare module _ {
  interface LoDashStatic {
    str: UnderscoreStringStatic;
    string: UnderscoreStringStatic;
  }
}

/// <reference path="hawtio-core.d.ts"/>
/// <reference path="hawtio-core-navigation.d.ts"/>
