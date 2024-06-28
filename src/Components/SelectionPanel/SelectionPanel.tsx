import { FloatingIndicator, UnstyledButton } from '@mantine/core';
import { useState } from 'react';
import s from './styles.module.css';

const data = ['React', 'Vue', 'Angular', 'Svelte'];
// const data = ['По убыванию', 'По возрастанию'];
export function SelectionPanel() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({});
  const [active, setActive] = useState(0);

  const setControlRef = (index: number) => (node: HTMLButtonElement) => {
    controlsRefs[index] = node;
    setControlsRefs(controlsRefs);
  };

  const controls = data.map((item, index) => (
    <UnstyledButton
      key={item}
      className={s.control}
      ref={setControlRef(index)}
      onClick={() => setActive(index)}
      mod={{ active: active === index }}>
      <span className={s.controlLabel}>{item}</span>
    </UnstyledButton>
  ));

  return (
    <div className={s.root} ref={setRootRef}>
      {controls}

      <FloatingIndicator
        target={controlsRefs[active]}
        parent={rootRef}
        className={s.indicator}
      />
    </div>
  );
}
