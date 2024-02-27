import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import {
  Pagination as UiPagination,
  PaginationContent,
  PaginationItem,
  PaginationEllipsis,
} from '@/ui/pagination';
import { Button } from '@/Button';

export interface PaginationProps {
  total?: number;
  page?: number;
  /**
   * @default 1
   */
  defaultPage?: number;
  /**
   * @default 10
   */
  pageSize?: number;
  /**
   * @default 2
   */
  buffer?: number;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (page: number) => any;
}

export function Pagination(props: PaginationProps) {
  const {
    total,
    page,
    defaultPage = 1,
    pageSize = 10,
    buffer = 1,
    onChange,
    ...restProps
  } = props;
  const [pageState, setPageState] = useState(defaultPage);
  const finalPage = page ?? pageState;

  const maxPage = total ? Math.ceil(total / pageSize) : 0;

  const handlePageChange = (p: number) => {
    setPageState(p);
    onChange?.(p);
  };

  const renderItem = (value: number) => {
    const isActive = value === finalPage;

    return (
      <PaginationItem key={value}>
        <Button
          variant={isActive ? 'outline' : 'ghost'}
          size="icon"
          aria-current={isActive ? 'page' : undefined}
          onClick={() => handlePageChange(value)}
        >
          {value}
        </Button>
      </PaginationItem>
    );
  };

  return (
    <UiPagination {...restProps}>
      <PaginationContent>
        <PaginationItem>
          <Button
            variant="ghost"
            size="icon"
            icon={<ChevronLeftIcon />}
            disabled={finalPage <= 1}
            aria-label="Go to previous page"
            onClick={() => handlePageChange(finalPage - 1)}
          />
        </PaginationItem>
        {renderItem(1)}
        {finalPage - buffer - 1 > 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {Array.from({ length: buffer * 2 + 1 }, (_, index) => {
          const value = finalPage + index - buffer;

          if (value <= 1 || value >= maxPage) {
            return null;
          }

          return renderItem(value);
        })}
        {maxPage > 0 && finalPage + buffer + 1 < maxPage && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {maxPage > 0 && renderItem(maxPage)}
        <PaginationItem>
          <Button
            variant="ghost"
            size="icon"
            icon={<ChevronRightIcon />}
            disabled={finalPage >= maxPage}
            aria-label="Go to next page"
            onClick={() => handlePageChange(finalPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </UiPagination>
  );
}
