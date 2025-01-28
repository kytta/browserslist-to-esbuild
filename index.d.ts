import { type Options } from 'browserslist'

/**
 * Convert Browserslist config to esbuild targets
 *
 * @param browserslistConfig Browserslist queries
 * @param options Browserslist options
 * @returns esbuild `targets` array
 */
export default function browserslistToEsbuild(
  browserslistConfig?: string | readonly string[] | null,
  options?: Options
): string[]
