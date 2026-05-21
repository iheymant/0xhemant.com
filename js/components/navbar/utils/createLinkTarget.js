export function createLinkTarget(external) {

  return external
    ? 'target="_blank" rel="noopener noreferrer"'
    : '';

}