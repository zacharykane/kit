const contentFamily =
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

const headingFamily = 'Georgia, serif';

export const transitionDuration = 500;

export const contentTextStyles = {
    fontFamily: contentFamily,
    fontSize: 20,
    color: '#222',
};

export const headerTextStyles = {
    fontFamily: headingFamily,
    fontSize: 60,
    color: '#444444',
};

export const defaultTransitionStyle = {
    transition: `opacity ${transitionDuration}ms ease-in, transform ${transitionDuration}ms ease-in`,
};

export const transitionStyles = {
    entering: { opacity: 0, transform: 'scale(0.9)' },
    entered: { opacity: 1, transform: 'scale(1)' },
    exiting: { opacity: 0, transform: 'scale(1.1)' },
};
