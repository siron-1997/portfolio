const disableScroll = (isLoading: boolean): (() => void) => {
    const html: HTMLElement = document.getElementsByTagName('html')[0],
          body: HTMLElement = document.body

    if (isLoading) {
        html.style.overflow = 'hidden'
        body.style.overflow = 'hidden'
        window.scrollTo(0, 0)
    } else {
        html.style.overflow = 'auto'
        body.style.overflow = 'auto'
    }

    return () => {
        html.style.overflow = 'auto'
        body.style.overflow = 'auto'
    }
}

export default disableScroll