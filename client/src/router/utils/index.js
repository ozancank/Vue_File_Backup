export const checkMobile = (to, from, next) => {
    if (window.innerWidth <= 900) {
        next();
    } else {
        next('/');
    }
};
