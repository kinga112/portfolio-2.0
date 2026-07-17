type ColumnRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type RowRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

const colSpanMap: Record<ColumnRange, string> = {
  0: '', 1: 'md:col-span-1', 2: 'md:col-span-2', 3: 'md:col-span-3',
  4: 'md:col-span-4', 5: 'md:col-span-5', 6: 'md:col-span-6', 7: 'md:col-span-7',
  8: 'md:col-span-8', 9: 'md:col-span-9', 10: 'md:col-span-10',
};

const rowSpanMap: Record<RowRange, string> = {
  0: '', 1: 'md:row-span-1', 2: 'md:row-span-2', 3: 'md:row-span-3',
  4: 'md:row-span-4', 5: 'md:row-span-5', 6: 'md:row-span-6', 7: 'md:row-span-7',
  8: 'md:row-span-8', 9: 'md:row-span-9', 10: 'md:row-span-10',
};

const bgColorMap: Record<string, string> = {
  green: 'bg-custom-light-green border-custom-light-green border-4',
  beige: 'bg-custom-beige border-custom-beige border-4',
};

interface GridItemProps {
  row: RowRange;
  column: ColumnRange;
  bgColor?: 'green' | 'beige';
  children?: React.ReactNode;
}
export function GridItem({ row, column, bgColor, children }: GridItemProps) {
  const style = `
    ${colSpanMap[column]}
    ${rowSpanMap[row]}
    ${bgColor ? bgColorMap[bgColor] : ''}
    hover:border-orange-400
    flex flex-col gap-3
    rounded-lg overflow-hidden

  `;

  return (
    <div className={style}>
      {children}
    </div>
  )
}
