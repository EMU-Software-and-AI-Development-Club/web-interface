import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';
export const cn = (...args) => twMerge(classnames(args));
