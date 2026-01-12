import allIcons, { IconType } from './some-module.ts'
import type { Type } from './types.d.ts'

export const hello = (name: IconType): string => {
    return `Hello ${name} ${allIcons.map((icon: IconType) => icon.name as string).join(', ')}`
}
