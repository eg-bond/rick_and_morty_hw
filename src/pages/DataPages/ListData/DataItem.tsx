import { Link } from 'react-router-dom';
import { AllPossibleDataT } from '@/types';
import s from './listData.module.css';

interface DataItemProps {
  item: AllPossibleDataT;
  isLastNode: boolean;
  lastNodeRef: (node: HTMLDivElement | null) => void;
}

export function DataItem({ item, isLastNode, lastNodeRef }: DataItemProps) {
  return (
    <div className={s.item} ref={isLastNode ? lastNodeRef : undefined}>
      <Link to={`${item.id}`}>{item.name}</Link>
    </div>
  );
}
