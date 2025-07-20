import { cn } from '@/utils/Helpers';

export const Section = (props: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
  id?: string;
}) => (
  <div className={cn('px-3 py-16', props.className)} id={props.id}>
    {(props.title || props.subtitle || props.description) && (
      <div className="mx-auto mb-16 max-w-screen-md text-center">
        {props.subtitle && (
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-base font-bold uppercase tracking-wider text-transparent">
            {props.subtitle}
          </div>
        )}

        {props.title && (
          <div className="mt-3 text-3xl font-bold leading-tight text-primary md:text-4xl">
            {props.title}
          </div>
        )}

        {props.description && (
          <div className="mt-4 text-lg leading-relaxed text-muted md:text-xl">
            {props.description}
          </div>
        )}
      </div>
    )}

    <div className="mx-auto max-w-screen-lg">{props.children}</div>
  </div>
);
