/// <reference path="angular-route.d.ts"/>
declare module HawtioMainNav {

    var pluginName: string;

    interface IActions {
        ADD: string;
        REMOVE: string;
        CHANGED: string;
    }
    var Actions: IActions;
    interface Registry {
        builder(): NavItemBuilder;
        add(item: NavItem, ...items: NavItem[]): any;
        remove(search: (item: NavItem) => boolean): NavItem[];
        iterate(iterator: (item: NavItem) => void): any;
        on(action: string, key: string, fn: (item: any) => void): void;
        selected(): NavItem;
    }

    interface BuilderFactory {
        create(): NavItemBuilder;
        join(...paths:string[]):string;
        configureRouting($routeProvider: ng.route.IRouteProvider, tab: NavItem): any;
    }

    interface NavItem {
        id: string;
        page?: () => string;
        reload?: boolean;
        context?: boolean;
        title?: () => string;
        href?: () => string;
        click?: ($event: any) => void;
        isValid?: () => boolean;
        show?: () => boolean;
        isSelected?: () => boolean;
        template?: () => string;
        tabs?: NavItem[];
    }

    interface NavItemBuilder {
        id(id: string): NavItemBuilder;
        reload(reload: boolean): NavItemBuilder;
        page(page: () => string): NavItemBuilder;
        title(title: () => string): NavItemBuilder;
        context(context: boolean): NavItemBuilder;
        href(href: () => string): NavItemBuilder;
        click(click: ($event: any) => void): NavItemBuilder;
        isValid(isValid: () => boolean): NavItemBuilder;
        isSelected(isSelected: () => boolean): NavItemBuilder;
        template(template: () => string): NavItemBuilder;
        tabs(item: NavItem, ...items: NavItem[]): NavItemBuilder;
        subPath(title: string, path: string, page?: string, reload?: boolean, isValid?: () => boolean): NavItemBuilder;
        build(): NavItem;
    }

    interface ICreateRegistry {
        (): Registry;
    }

    var createRegistry: ICreateRegistry;
    interface ICreateBuilder {
        (): NavItemBuilder;
    }

    var createBuilder: ICreateBuilder;

}

declare module HawtioPerspective {

  interface Selector {
    content?: string;
    id?: string;
    href?: string;
    title?: string;
    onCondition?: () => boolean;
  }

  interface TabMap {
    includes: Array<Selector>;
    excludes: Array<Selector>;
  }

  interface PerspectiveLabel {
    id: string;
    label: string;
    icon: any;
  }

  interface Perspective {
    label: string;
    icon: any;
    lastPage: string;
    isValid: () => boolean;
    tabs: TabMap;

  }

  interface Registry {
    add(id:string, perspective:Perspective):void;
    remove(id:string):Perspective;
    setCurrent(id:string):void;
    getCurrent():Perspective;
    getLabels():PerspectiveLabel[]
  }

}
