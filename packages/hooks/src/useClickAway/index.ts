import { useLast } from 'encodeHooks';
import useEffectWithTarget from '../useEffectWithTarget';
import { BasicTarget, getTargetElement } from '../utils/domTarget';
import { getDocumentOrShadowRoot } from '../utils/getDocumentOrShadowRoot';

type DocumentEventKey = keyof DocumentEventMap;

export default function useClickAway(
  onClickAway: () => void,
  target: BasicTarget<any> | BasicTarget<any>[],
  eventName: DocumentEventKey | DocumentEventKey[]
) {
  const onClickAwayRef = useLast(onClickAway);
  const eventNames = Array.isArray(eventName) ? eventName : [eventName];

  useEffectWithTarget(
    () => {
      const handler = (event) => {
        const targets = Array.isArray(target) ? target : [target];
        const eles = targets.map(getTargetElement);
        if (
          eles.some((targetElement) => {
            // 没有targetElement 说明就不在
            return !targetElement || targetElement.contains(event.target);
          })
        ) {
          return;
        }
        onClickAwayRef.current?.();
      };

      const root = getDocumentOrShadowRoot(target);
      eventNames.forEach((eventname) =>
        root.addEventListener(eventname, handler)
      );
      return () => {
        eventNames.forEach((eventname) =>
          root.removeEventListener(eventname, handler)
        );
      };
    },
    eventNames,
    target
  );
}
