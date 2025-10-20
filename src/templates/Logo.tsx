import Image from 'next/image';
import { AppConfig } from '@/utils/AppConfig';

export const Logo = (props: { isTextHidden?: boolean }) => (
  <div className="flex items-center text-xl font-semibold">
    <Image
      src="/modly-icon.png"
      alt="Modly logo"
      width={32}
      height={32}
      className="mr-1"
      priority
    />
    {!props.isTextHidden && (
      <div className="flex items-center">
        <Image
          src="/modlyme-bg.png"
          alt={AppConfig.name}
          width={96}
          height={24}
          className="hidden sm:inline-block"
          priority
        />
        <span className="sm:hidden">{AppConfig.name}</span>
      </div>
    )}
  </div>
);
