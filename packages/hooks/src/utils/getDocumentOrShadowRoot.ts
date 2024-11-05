import { BasicTarget, getTargetElement } from './domTarget';
function checkIsAllInShadow(targets: BasicTarget<any>[]): boolean {
  return targets.every((item) => {
    const target = getTargetElement(item);
    if (!target) return false;
    if (target.getRootNode() instanceof ShadowRoot) return true;
    return false;
  });
}

function getShadowRoot(node) {
  if (!node) return document;
  return node.getRootNode();
}

export function getDocumentOrShadowRoot(
  target: BasicTarget<any> | BasicTarget<any>[]
): Document | Node {
  if (!target || !document.getRootNode) return document;
  const targets = Array.isArray(target) ? target : [target];
  if (checkIsAllInShadow(targets)) {
    return getShadowRoot(getTargetElement(targets[0]));
  }
  return document;
}
