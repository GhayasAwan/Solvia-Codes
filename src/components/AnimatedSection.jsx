import { motion } from 'framer-motion';

export default function AnimatedSection({ children, className = '', delay = 0, ...props }) {
  return (
    <section className={className} {...props}>
      {children}
    </section>
  );
}
