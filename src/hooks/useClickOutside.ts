import { useEffect, RefObject, MouseEvent, TouchEvent } from 'react';

interface ClickOutsideProps {
    ref: RefObject<HTMLElement>;
    fn: () => void;
}

export default function useClickOutside({ ref, fn }: ClickOutsideProps) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: MouseEvent | TouchEvent) {
            // Use 'touches' property for TouchEvent
            const target = 'touches' in event ? (event as TouchEvent)?.touches[0]?.target : (event as MouseEvent).target;

            if (ref.current && !ref.current.contains(target as Node)) {
                fn();
            }
        }

        // Explicitly define the event types for addEventListener
        document.addEventListener("touchend", handleClickOutside as unknown as EventListener);
        document.addEventListener("mousedown", handleClickOutside as unknown as EventListener);

        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside as unknown as EventListener);
            document.removeEventListener("touchend", handleClickOutside as unknown as EventListener);
        };
    }, [ref, fn]);
}