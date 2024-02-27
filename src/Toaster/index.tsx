import { ComponentProps } from 'react';
import { SonnerToaster } from '@/ui/sonner';
export { toast } from 'sonner';

export interface ToasterProps extends ComponentProps<typeof SonnerToaster> {}

export { SonnerToaster as Toaster };
