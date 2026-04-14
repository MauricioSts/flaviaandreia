import { useState } from 'react'

export default function ImageWithLoading({ src, alt, className, containerClassName }) {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <div className={`relative ${containerClassName || ''}`}>
            {/* Loading skeleton */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-surface-secondary animate-pulse rounded-inherit" />
            )}

            {/* Image */}
            <img
                src={src}
                alt={alt}
                className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
                loading="lazy"
                decoding="async"
                onLoad={() => setIsLoaded(true)}
            />
        </div>
    )
}
