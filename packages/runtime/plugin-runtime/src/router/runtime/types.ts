import type {
  RouteProps,
  RouteObject,
  Params,
} from '@modern-js/utils/runtime/router';
import { PageRoute, NestedRoute } from '@modern-js/types';
import type { RequestContext } from '@modern-js/utils/runtime-node';

declare global {
  interface Window {
    _SERVER_DATA?: {
      router: {
        baseUrl: string;
        params: Record<string, string>;
      };
    };
  }
}

export type SingleRouteConfig = RouteProps & {
  redirect?: string;
  routes?: SingleRouteConfig[];
  key?: string;

  /**
   * layout component
   */
  layout?: React.ComponentType;

  /**
   * component would be rendered when route macthed.
   */
  component?: React.ComponentType;
};

export type RouterConfig = {
  mode?: 'react-router-5';
  routesConfig: {
    globalApp?: React.ComponentType<any>;
    routes: (NestedRoute | PageRoute)[];
  };
  /**
   * You should not use it
   */
  oldVersion?: boolean;
  serverBase?: string[];
  supportHtml5History?: boolean;
  basename?: string;
  createRoutes?: () => RouteObject[];
};

export type Routes = RouterConfig['routesConfig']['routes'];

export interface RouteManifest {
  routeAssets: RouteAssets;
}

export interface RouteAssets {
  [routeId: string]: {
    chunkIds?: (string | number)[];
    assets?: string[];
  };
}

// fork from react-router
// due to the context is any in react-router.
interface DataFunctionArgs<D = any> {
  request: Request;
  params: Params;
  context?: D;
}

export type LoaderFunctionArgs = DataFunctionArgs<RequestContext>;

declare type DataFunctionValue = Response | NonNullable<unknown> | null;

export type LoaderFunction = (
  args: LoaderFunctionArgs,
) => Promise<DataFunctionValue> | DataFunctionValue;
