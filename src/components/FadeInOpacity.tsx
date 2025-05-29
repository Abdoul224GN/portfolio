'use client';

import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';

interface Props {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    index?:number;
}

export default function FadeInOpacity({
                                           children,
                                           delay = 0,
                                           className,
                                           index
                                       }: Props) {
    const controls = useAnimation();
    const [ref, inView] = useInView({triggerOnce: true, threshold: 0.4});

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            transition={{duration: 0.6, delay}}
            variants={{
                visible: {opacity: 1},
                hidden: {opacity: 0},
            }}
            key={index}
            className={className}
        >
            {children}
        </motion.div>
    );
}
