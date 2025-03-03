export const JS_EXTENSIONS = ['.js', '.ts', '.jsx', '.tsx'];

export const INDEX_FILE_NAME = 'index';

export const APP_FILE_NAME = 'App';

export const PAGES_DIR_NAME = 'pages';

export const NESTED_ROUTES_DIR = 'routes';

export const FILE_SYSTEM_ROUTES_FILE_NAME = 'routes.js';

export const LOADER_EXPORT_NAME = 'loader';

export const TEMP_LOADERS_DIR = '__loaders__';

export const ENTRY_POINT_FILE_NAME = 'index.jsx';

export const ENTRY_BOOTSTRAP_FILE_NAME = 'bootstrap.jsx';

export const FILE_SYSTEM_ROUTES_DYNAMIC_REGEXP = /^\[(\S+)\]([*+?]?)$/;

export const FILE_SYSTEM_ROUTES_LAYOUT = '_layout';

export const FILE_SYSTEM_ROUTES_GLOBAL_LAYOUT = '_app';

export const FILE_SYSTEM_ROUTES_INDEX = 'index';

export const FILE_SYSTEM_ROUTES_IGNORED_REGEX =
  /\.(d|test|spec|e2e)\.(js|jsx|ts|tsx)$/;

export const HTML_PARTIALS_FOLDER = 'html';

export const HTML_PARTIALS_EXTENSIONS = ['.htm', '.html', '.ejs'];

export const FILE_SYSTEM_ROUTES_COMPONENTS_DIR = 'internal_components';

export const NESTED_ROUTE = {
  LAYOUT_FILE: 'layout',
  LAYOUT_CONFIG_FILE: 'layout.config',
  LAYOUT_LOADER_FILE: 'layout.loader',
  LAYOUT_DATA_FILE: 'layout.data',
  LAYOUT_CLIENT_LOADER: 'layout.data.client',
  PAGE_FILE: 'page',
  PAGE_CONFIG_FILE: 'page.config',
  PAGE_LOADER_FILE: 'page.loader',
  PAGE_DATA_FILE: 'page.data',
  PAGE_CLIENT_LOADER: 'page.data.client',
  SPLATE_FILE: '$',
  SPLATE_LOADER_FILE: '$.loader',
  SPLATE_DATA_FILE: '$.data',
  SPLATE_CLIENT_DATA: '$.data.client',
  LOADING_FILE: 'loading',
  ERROR_FILE: 'error',
  LOADER_FILE: 'loader',
};

export const APP_CONFIG_NAME = 'config';

export const APP_INIT_EXPORTED = 'init';

export const APP_INIT_IMPORTED = 'appInit';
