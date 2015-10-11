export const FETCH_EXAMPLE = 'FETCH_EXAMPLE';
export const FETCH_EXAMPLE_ERROR = 'FETCH_EXAMPLE_ERROR';

export function fetchExample(example) {
  return {
    type: FETCH_EXAMPLE,
    example
  };
}
