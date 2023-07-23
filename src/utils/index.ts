const MAX_PARENT_COUNT = 5;

export function findParentElement(
  el: HTMLElement,
  match: (parent: HTMLElement) => boolean
) {
  let parent = el.parentElement;
  let count = 1;

  while (parent) {
    if (match(parent)) {
      return parent;
    }

    if (count <= MAX_PARENT_COUNT) {
      parent = parent.parentElement;
      count++;
    } else {
      break;
    }
  }

  return null;
}
