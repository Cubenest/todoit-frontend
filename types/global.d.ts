/** Global definitions for development **/

// for style loader
declare module "*.css" {
    const styles: any;
    export = styles;
}
declare module "*.jpg" {
    const jpg: string;
    export = jpg;
}

declare module "*.png" {
    const png: string;
    export = png;
}

declare module "*.gif" {
    const gif: string;
    export = gif;
}
// Omit type https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-377567046
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;
