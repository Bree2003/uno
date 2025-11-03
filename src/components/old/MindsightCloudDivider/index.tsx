import { cva } from 'class-variance-authority';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import type { VariantProps } from 'class-variance-authority';

const dividerVariants = cva('w-full', {
  variants: {
    variant: {
      top: '',
      bottom: 'rotate-180',
    },
  },
  defaultVariants: {
    variant: 'top',
  },
});

export interface MindsightCloudDividerProps
  extends React.BaseHTMLAttributes<HTMLBaseElement>,
    VariantProps<typeof dividerVariants> {}

const MindsightCloudDivider = (props: MindsightCloudDividerProps) => {
  const { variant, className } = props;
  return (
    <Image
      src="/clouds.svg"
      alt="clouds"
      width={200}
      height={100}
      className={twMerge(dividerVariants({ variant, className }))}
    />
  );
};

export default MindsightCloudDivider;
