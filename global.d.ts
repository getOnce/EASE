
interface Global {
    /**
     * 子项目名称
     */
    __PROJECT__: string;
}

declare module "*.json" {
    export const version: string;
}

// 定义全局
declare module NodeJS {
    interface Global {
        /**
         * 子项目名称
         */
        __PROJECT__: string;

        /**
         * ssr渲染开关
         */
        __SSR__: Boolean;

        /**
         * 渲染ejs模板
         */
        __EJS__: Boolean;
    }
}

// 一些不提供types的module

declare module 'velocity-mjd';
declare module 'babel-preset-env';
declare module 'babel-preset-react';
declare module 'babel-plugin-transform-runtime';
declare module 'babel-plugin-syntax-dynamic-import';
declare module 'postcss-import';
declare module 'postcss-pxtorem';
declare module 'postcss-cssnext';
declare module 'postcss-mixins';
declare module 'postcss-flexbugs-fixes';
declare module 'postcssFlexbugsFixes';
declare module 'cssnano';
declare module 'download-git-repo';

declare function escape(str: string): string;
