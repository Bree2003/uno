import * as React from 'react';
import type { FieldError } from 'react-hook-form';
import { cn } from '@/utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isInvalid?: boolean;
  labelClasses?: string;
  fieldError?: FieldError;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isInvalid, label, labelClasses, fieldError, ...props }, ref) => {
    return (
      <div className="flex-col gap-1">
        {label && (
          <p
            className={cn('text-xs text-foreground', labelClasses, {
              'text-destructive': isInvalid,
            })}
          >
            {label}
          </p>
        )}
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className,
            { 'border-destructive': isInvalid }
          )}
          ref={ref}
          {...props}
        />
        {isInvalid ? (
          <p
            className={cn('text-xs text-foreground', labelClasses, {
              'text-destructive': isInvalid,
            })}
          >
            {fieldError?.message}
          </p>
        ) : null}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
