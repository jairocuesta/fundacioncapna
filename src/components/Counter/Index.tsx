import { animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type CounterAnimationProps = {
    from: number;
    to: number;
}
export default function CounterAnimation({ from, to }: CounterAnimationProps) {
    function Counter({ from, to }: CounterAnimationProps) {
        const nodeRef = useRef(null);
        const isInView = useInView(nodeRef, { once: true });

        useEffect(() => {
            if(!isInView) return;
            
            const node = nodeRef.current! as HTMLDivElement;

            const controls = animate(from, to, {
                duration: 1.5,
                onUpdate(value) {
                    if(node) {
                        node.textContent = `+${value.toFixed(0)}`;
                    }
                },
            });

            return () => controls.stop();
        }, [from, to, isInView]);

        return <div className={"optima-medium"} ref={nodeRef} />;
    }

    return (
        <Counter from={from} to={to} />
    )
}