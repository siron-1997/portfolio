export default function disableScroll(isLoading) {
    const html = document.getElementsByTagName('html')[0]

    if (isLoading) {
        html.style.overflow = 'hidden'
        document.body.style.overflow = 'hidden'
        window.scrollTo(0, 0)
    } else {
        html.style.overflow = 'auto'
        document.body.style.overflow = 'auto'
    }

    return () => {
        html.style.overflow = 'auto'
        document.body.style.overflow = 'auto'
    }
}