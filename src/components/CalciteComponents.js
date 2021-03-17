import { useEffect, useRef } from 'react';

/**
 * This wraps adding and removing event listeners when we can't use React's built in
 * handlers (like with all calcite-components events). Sourced (and slightly modified)
 * from https://github.com/donavon/use-event-listener.
 *
 * @param eventName: name of the event
 * @param ref: ref on the HTML element you are adding the event to.
 * @param handler: function to run when event occurs
 */
const useEventListener = (eventName, ref , handler) => {
  const savedHandler = useRef(null);
  
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = ref?.current || window;
    if (!element || !element.addEventListener) {
      return;
    }
    const eventListener = event => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, ref]);

};

export function CalciteRadioButtonGroup({children, onChange, ...rest}){
  const ref = useRef(null);

  function onSelect(e){
    onChange(e.detail);
  }

  useEventListener('calciteRadioButtonGroupChange', ref, onSelect);
  return (
    <calcite-radio-button-group ref={ref} {...rest}>
      {children}
    </calcite-radio-button-group>

  )
}

export function CalciteDropdown({onSelect, children, style, ...rest}){
  const ref = useRef(null);

  function onCalciteDropdownSelect(e){
    const items = ref.current.selectedItems;
    const item = items[0];
    const id = item.id;
    onSelect(id);
  }

  useEventListener('calciteDropdownSelect', ref, onCalciteDropdownSelect);
  return (
    <calcite-dropdown style={style} ref={ref} {...rest}>
      {children}
    </calcite-dropdown>
  )
}