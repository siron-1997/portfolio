type CustomProps = {
    element: HTMLElement
    start?: 'top bottom' | string
    end?: 'bottom top' | string
    delay?: number
    markers?: boolean
    id?: string
}

const getScrollTriggerOption = ({ element, start, end, delay, markers, id }: CustomProps) => ({
    delay: delay,
    scrollTrigger: {
        trigger: element,
        markers: markers,
        start: start,
        end: end,
        id: id
    }
})

export default getScrollTriggerOption