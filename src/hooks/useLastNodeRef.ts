import { useCallback, useRef } from 'react';

interface useLastNodeRefProps {
  loading: boolean;
  hasMore: boolean;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
}
/**
 * Hook that returns lastNodeRef using IntersectionObserver
 * @param loading - indicates if data is being loaded
 * @param hasMore - indicates if API has more data to load
 * @param setPageNumber - function to set page number in order get more data
 * @returns lastNodeRef - ref to the last node
 */
export const useLastNodeRef = ({
  loading,
  hasMore,
  setPageNumber,
}: useLastNodeRefProps) => {
  const observer = useRef<IntersectionObserver>();
  const lastNodeRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prev => prev + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore]
  );

  return lastNodeRef;
};
