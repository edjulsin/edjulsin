'use client'

import { useEffect } from 'react'

const Intersector = ({ selectors, options, children }: Readonly<{
    selectors: string[],
    children?: React.ReactNode,
    options?: IntersectionObserverInit
}>) => {

    useEffect(() => {
        const elements = selectors.flatMap(v => {
            return [ ...document.querySelectorAll(v) ] as HTMLElement[]
        })

        const middle = (v: DOMRect) => (v.y + v.height) * .5

        const onIntersect = (entries: IntersectionObserverEntry[]) =>
            entries.forEach(({ target, isIntersecting, boundingClientRect, rootBounds }) => {
                const el = target as HTMLElement
                const intersecting = isIntersecting ? 'true' : 'false'
                const intersected = el.dataset.intersected === 'true' ? 'true' : intersecting
                const position = !rootBounds
                    ? 0
                    : Math.sign(
                        middle(boundingClientRect) - middle(rootBounds)
                    )

                el.dataset.intersected = intersected
                el.dataset.intersecting = intersecting
                el.dataset.position = position + ''
            })

        const observer = new IntersectionObserver(onIntersect, options)

        elements.forEach(el => {
            el.dataset.intersected = 'false'
            el.dataset.intersecting = 'false'
            el.dataset.position = '0'
        })

        elements.forEach(el =>
            observer.observe(el)
        )

        return () => { observer.disconnect() }

    }, [ selectors ])

    return children ?? null
}

export default Intersector