'use client';

import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import {useEffect} from 'react';

interface Props {
    children: React.ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    className?: string;
}

export default function FadeInOnScroll({
                                           children,
                                           delay = 0,
                                           direction = 'up',
                                           className
                                       }: Props) {
    const controls = useAnimation();
    const [ref, inView] = useInView({triggerOnce: true, threshold: 0.1});

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    // Gestion du décalage initial selon la direction
    let x = 0;
    let y = 0;

    switch (direction) {
        case 'up':
            y = 40;
            break;
        case 'down':
            y = -40;
            break;
        case 'left':
            x = 40;
            break;
        case 'right':
            x = -40;
            break;
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            transition={{duration: 0.6, delay,}}
            variants={{
                visible: {opacity: 1, x: 0, y: 0},
                hidden: {opacity: 0, x, y},
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
