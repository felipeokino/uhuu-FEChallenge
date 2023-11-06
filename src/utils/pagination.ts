export const generatePaginationList = (startAt: number, size = 1) => {
  const startIndex = 0;
  let paginationSize = 6;

  if (size < paginationSize)
    paginationSize = size === 1 ? size-1 : size;
    
  const steps: Array<number | string> = [];
  steps.length = paginationSize;
        
  const pages =  [ 
    ...steps.fill(0, startIndex, paginationSize)
      .splice(startIndex, paginationSize)
      .map((_, idx) => startAt + idx+1 <= size ? startAt + idx : startAt-=1)
      .sort((a, b) => a - b), ...steps ];
        
  if (size - startAt > paginationSize)
    pages[paginationSize-1] = '...';
  pages[paginationSize] = size;
  return pages.filter(Boolean);
};