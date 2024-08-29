import { fileURLToPath } from 'url';
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'upath';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uiDir = path.resolve(__dirname, '../src/ui');

const radixIconToLucideIcon: Record<string, string> = {
  DotsHorizontalIcon: 'MoreHorizontalIcon',
  MagnifyingGlassIcon: 'SearchIcon',
  DotFilledIcon: 'CircleIcon',
  Cross2Icon: 'XIcon',
  DashIcon: 'MinusIcon',
  DragHandleDots2Icon: 'GripVerticalIcon',
  CaretSortIcon: 'ChevronsUpDownIcon',
};

const iconReplaceRegExp = new RegExp(
  Object.keys(radixIconToLucideIcon).join('|'),
  'g',
);

readdirSync(uiDir).forEach(file => {
  if (!/\.tsx?$/.test(file)) {
    return;
  }

  const fullFile = path.resolve(uiDir, file);

  const code = readFileSync(fullFile, 'utf-8')
    .replace(/"src\//g, '"../')
    .replace(/"@radix-ui\/react-icons"/g, '"lucide-react"')
    .replace(iconReplaceRegExp, m => radixIconToLucideIcon[m] || m);

  writeFileSync(fullFile, code, 'utf-8');
});
