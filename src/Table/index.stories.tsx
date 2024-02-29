import type { Meta, StoryObj } from '@storybook/react';
import { Table, ColumnDef } from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

interface Invoice {
  invoice: string;
  paymentStatus: string;
  totalAmount: string;
  paymentMethod: string;
}

const columns: ColumnDef<Invoice>[] = [
  {
    accessorKey: 'invoice',
    header: 'Invoice',
  },
  {
    accessorKey: 'paymentStatus',
    header: 'Status',
  },
  {
    accessorKey: 'paymentMethod',
    header: 'Method',
  },
  {
    accessorKey: 'totalAmount',
    header: 'Amount',
  },
];

const sortingColumns: ColumnDef<Invoice>[] = [
  {
    accessorKey: 'invoice',
    header: 'Invoice',
  },
  {
    accessorKey: 'paymentStatus',
    header: 'Status',
  },
  {
    accessorKey: 'paymentMethod',
    header: 'Method',
  },
  {
    accessorKey: 'totalAmount',
    header: 'Amount',
    enableSorting: true,
  },
];

const getData = (length: number): Invoice[] => {
  const paymentStatuses = ['Pending', 'Paid', 'Unpaid'];
  const paymentMethods = ['Credit Card', 'PayPal', 'Bank Transfer'];

  return Array.from({ length }, (_, i) => {
    return {
      invoice: `INV${i + 1}`,
      paymentStatus: paymentStatuses[Math.floor(Math.random() * 3)],
      totalAmount: `$${(Math.random() * 1000).toFixed(2)}`,
      paymentMethod: paymentMethods[Math.floor(Math.random() * 3)],
    };
  });
};

export const Primary: Story = {
  args: {} as any,
  render() {
    return (
      <Table className="sr-w-[634px]" columns={columns} data={getData(7)} />
    );
  },
};

export const Bordered: Story = {
  args: {} as any,
  render() {
    return (
      <Table
        className="sr-w-[634px]"
        columns={columns}
        data={getData(23)}
        bordered
        autoPagination
      />
    );
  },
};

export const NoPagination: Story = {
  args: {} as any,
  render() {
    return (
      <Table
        className="sr-w-[634px]"
        columns={columns}
        data={getData(7)}
        bordered
        pagination={false}
      />
    );
  },
};

export const Sorting: Story = {
  args: {} as any,
  render() {
    return (
      <Table
        className="sr-w-[634px]"
        columns={sortingColumns}
        data={getData(7)}
        bordered
        pagination={false}
        autoSorting
      />
    );
  },
};

export const RowSelection: Story = {
  args: {} as any,
  render() {
    return (
      <Table
        className="sr-w-[634px]"
        columns={columns}
        data={getData(7)}
        bordered
        pagination={false}
        enableRowSelection={row =>
          Number(row.original.totalAmount.slice(1)) > 500
        }
      />
    );
  },
};

export const SingleRowSelection: Story = {
  args: {} as any,
  render() {
    return (
      <Table
        className="sr-w-[634px]"
        columns={columns}
        data={getData(7)}
        bordered
        pagination={false}
        enableRowSelection={row =>
          Number(row.original.totalAmount.slice(1)) > 500
        }
        rowSelectionMode="single"
      />
    );
  },
};
