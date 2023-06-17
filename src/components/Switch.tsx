/* eslint-disable @typescript-eslint/no-unused-vars */
import { cva, VariantProps } from 'class-variance-authority';
import { Dispatch, FC, KeyboardEventHandler, SetStateAction } from 'react';

const switchStyles = cva([], {
  variants: {
    duration: {
      400: 'duration-[400ms]',
      700: 'duration-[700ms]',
      750: 'duration-[750ms]',
      1000: 'duration-[1000ms]',
      1200: 'duration-[1200ms',
    },
  },
});
interface SwitchStylesProps extends VariantProps<typeof switchStyles> {}
interface Props extends SwitchStylesProps {
  enabled: boolean;
  onSwitch: () => void;
  bgLight?: string;
  bgDark?: string;
  fillLight?: string;
  fillDark?: string;
  width?: string;
  height?: string;
}
const Switch: FC<Props> = ({
  enabled,
  width = 'w-12',
  height = 'h-6',
  onSwitch,
  bgLight = 'bg-surface-50',
  bgDark = 'bg-surface-900',
  fillLight = 'fill-surface-50',
  fillDark = 'fill-surface-900',
  duration = 750,
}) => {
  const svgPath = {
    sun: 'M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z',
    moon: 'M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z',
  };
  const transitionDuration = switchStyles({ duration });
  // States
  const thumbPosition = enabled ? '' : 'translate-x-full';
  const thumbBg = enabled ? bgLight : bgDark;
  const trackBg = enabled ? bgDark : bgLight;
  const iconFill = enabled ? fillDark : fillLight;

  // Classes
  const cTransition = `transition-all ${transitionDuration}`;
  const cTrack = 'cursor-pointer';
  const cThumb = `aspect-square scale-[0.8] flex justify-center items-center`;

  const trackClasses = `${width} ${height}  ${cTransition} ${cTrack} ${trackBg} ring-[1px] rounded-2xl`;
  const thumbClasses = ` ${cTransition} ${cThumb} ${height}  ${thumbBg} ${thumbPosition} rounded-2xl`;
  const iconClasses = 'w-[70%] aspect-square';

  // A11 Input Handlers
  const handleKeyEvent = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (['Enter', 'Space'].includes(event.code)) {
      event.preventDefault();
      event.currentTarget?.click();
    }
  };

  return (
    <div
      aria-label="Switch"
      tabIndex={0}
      aria-checked={enabled}
      title={`Switch ${enabled ? 'Dark' : 'Light'} Mode`}
      onKeyDown={handleKeyEvent}
      onClick={onSwitch}
      role="switch"
      className={`switch-track ${trackClasses}`}
    >
      <div className={`switch-thumb ${thumbClasses}`}>
        <svg
          className={`switch-icon ${iconClasses} ${iconFill}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d={enabled ? svgPath.sun : svgPath.moon} />
        </svg>
      </div>
    </div>
  );
};

export default Switch;
