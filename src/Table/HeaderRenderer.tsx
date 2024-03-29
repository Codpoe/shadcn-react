import { Header, flexRender } from '@tanstack/react-table';
import { ArrowDownIcon, ArrowUpIcon, ChevronsUpDownIcon } from 'lucide-react';
import { Button } from '..';

export interface HeaderRendererProps<TData, TValue> {
  header: Header<TData, TValue>;
}

export function HeaderRenderer<TData, TValue>(
  props: HeaderRendererProps<TData, TValue>,
) {
  const { header } = props;

  if (header.isPlaceholder) {
    return null;
  }

  let ret = flexRender(header.column.columnDef.header, header.getContext());

  if (header.column.getCanSort()) {
    const isSorted = header.column.getIsSorted();
    let sortIcon = <ChevronsUpDownIcon className="sr-w-3.5 sr-h-3.5 sr-ml-2" />;

    if (isSorted === 'asc') {
      sortIcon = <ArrowUpIcon className="sr-w-3.5 sr-h-3.5 sr-ml-2" />;
    } else if (isSorted === 'desc') {
      sortIcon = <ArrowDownIcon className="sr-w-3.5 sr-h-3.5 sr-ml-2" />;
    }

    ret = (
      <Button
        className="-sr-ml-4"
        variant="ghost"
        onClick={() => {
          if (!isSorted) {
            header.column.toggleSorting(false);
          } else if (isSorted === 'asc') {
            header.column.toggleSorting(true);
          } else {
            header.column.clearSorting();
          }
        }}
      >
        {ret}
        {sortIcon}
      </Button>
    );
  }

  return ret;
}
