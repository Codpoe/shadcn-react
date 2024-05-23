import { ComponentPropsWithoutRef, useMemo } from 'react';
import {
  useReactTable,
  ColumnDef,
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  SortingState,
  RowSelectionState,
  RowSelectionOptions,
  Row,
} from '@tanstack/react-table';
import { CircleIcon } from 'lucide-react';
import {
  TableBody,
  TableCell,
  // TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Table as UiTable,
} from '../ui/table';
import { Checkbox, Pagination } from '..';
import { cn } from '../utils';
import { Spin } from '../Spin';
import { useControl } from '../hooks/use-control';
import { HeaderRenderer } from './HeaderRenderer';

const ROW_SELECTION_COLUMN_ID = '__sr_row_selection__';

interface PaginationState {
  total?: number;
  page: number;
  pageSize: number;
}

export type { ColumnDef };
export { createColumnHelper };

export interface TableProps<TData, TValue = unknown>
  extends ComponentPropsWithoutRef<typeof UiTable> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  loading?: boolean;
  bordered?: boolean;
  defaultPagination?: Partial<PaginationState>;
  pagination?: PaginationState | false;
  autoPagination?: boolean;
  defaultSorting?: SortingState;
  sorting?: SortingState;
  autoSorting?: boolean;
  enableRowSelection?: RowSelectionOptions<TData>['enableRowSelection'];
  /**
   * @default 'multiple'
   */
  rowSelectionMode?: 'single' | 'multiple';
  defaultRowSelection?: RowSelectionState;
  rowSelection?: RowSelectionState;
  empty?: React.ReactNode;
  onPaginationChange?: (pagination: PaginationState) => any;
  onSortingChange?: (sorting: SortingState) => any;
  onRowSelectionChange?: (rowSelection: RowSelectionState) => any;
  onRowClick?: (
    ev: React.MouseEvent<HTMLTableRowElement>,
    row: Row<TData>,
  ) => any;
}

export function Table<TData, TValue>(props: TableProps<TData, TValue>) {
  const {
    columns: propColumns,
    data,
    loading,
    bordered,
    defaultPagination,
    pagination: propPagination,
    autoPagination,
    defaultSorting,
    sorting: propSorting,
    autoSorting,
    enableRowSelection,
    rowSelectionMode = 'multiple',
    defaultRowSelection,
    rowSelection: propRowSelection,
    empty,
    className,
    style,
    onPaginationChange,
    onSortingChange,
    onRowSelectionChange,
    onRowClick,
  } = props;

  // pagination
  const showPagination = propPagination !== false;

  const [pagination, setPagination] = useControl<PaginationState>(
    {
      page: 1,
      pageSize: 10,
      total: autoPagination ? data.length : defaultPagination?.total,
      ...defaultPagination,
    },
    showPagination ? propPagination : undefined,
    onPaginationChange,
  );

  const total = autoPagination ? data.length : pagination.total;

  // sorting
  const [sorting, setSorting] = useControl<SortingState>(
    defaultSorting || [],
    propSorting,
    onSortingChange,
  );

  // row selection
  const [rowSelection, setRowSelection] = useControl<RowSelectionState>(
    defaultRowSelection ?? {},
    propRowSelection,
    onRowSelectionChange,
  );

  // columns
  const columns = useMemo(() => {
    const ret = propColumns.map(column => ({
      enableSorting: false,
      ...column,
    }));

    if (!enableRowSelection) {
      return ret;
    }

    if (rowSelectionMode === 'single') {
      ret.unshift({
        id: ROW_SELECTION_COLUMN_ID,
        cell: ({ row }) => (
          <button
            className="sr-aspect-square sr-flex sr-justify-center sr-items-center sr-h-4 sr-w-4 sr-rounded-full sr-border sr-border-primary sr-text-primary sr-shadow focus:sr-outline-none focus-visible:sr-ring-1 focus-visible:sr-ring-ring disabled:sr-cursor-not-allowed disabled:sr-opacity-50"
            disabled={!row.getCanSelect()}
            aria-label="Select row"
            onClick={() => row.toggleSelected(true)}
          >
            {row.getIsSelected() && (
              <CircleIcon className="sr-h-2.5 sr-w-2.5 sr-fill-current" />
            )}
          </button>
        ),
        enableSorting: false,
        enableHiding: false,
      });
    } else if (rowSelectionMode === 'multiple') {
      ret.unshift({
        id: ROW_SELECTION_COLUMN_ID,
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && 'indeterminate')
            }
            aria-label="Select all"
            onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            aria-label="Select row"
            onCheckedChange={value => row.toggleSelected(!!value)}
          />
        ),
        enableSorting: false,
        enableHiding: false,
      });
    }

    return ret;
  }, [propColumns, enableRowSelection, rowSelectionMode]);

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    rowCount: total,
    manualPagination: !autoPagination,
    manualSorting: !autoSorting,
    enableRowSelection,
    enableMultiRowSelection: rowSelectionMode === 'multiple',
    state: {
      pagination: {
        pageIndex: pagination.page - 1,
        pageSize: pagination.pageSize,
      },
      sorting,
      rowSelection,
    },
    onPaginationChange: value => {
      const newValue =
        typeof value === 'function'
          ? value({
              pageIndex: pagination.page - 1,
              pageSize: pagination.pageSize,
            })
          : value;
      setPagination(prev => ({
        ...prev,
        page: newValue.pageIndex + 1,
        pageSize: newValue.pageSize,
      }));
    },
    onSortingChange: setSorting,
    onRowSelectionChange: setRowSelection,
  });

  return (
    <div className={className} style={style}>
      <Spin
        className={cn(bordered && 'sr-rounded-md sr-border')}
        loading={loading}
      >
        <UiTable>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id}>
                      <HeaderRenderer header={header} />
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  onClick={ev => onRowClick?.(ev, row)}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {empty ?? 'No results.'}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </UiTable>
      </Spin>
      {showPagination && (
        <div className="sr-flex sr-items-center sr-mt-4">
          {showPagination && (
            <Pagination
              className="!sr-w-auto sr-ml-auto sr-mr-0"
              total={total}
              page={pagination.page}
              pageSize={pagination.pageSize}
              onChange={page => {
                setPagination(prev => ({ ...prev, page }));
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
