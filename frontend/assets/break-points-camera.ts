import { Vector3 } from 'three'

type LocationPath = {
    readonly start: Vector3
    readonly end: Vector3
}
type CameraPositions = {
    readonly xs: LocationPath
    readonly sm: {
        readonly wrap: LocationPath
        readonly side: LocationPath
    }
    readonly tb: LocationPath
    readonly lg: LocationPath
    readonly xl: LocationPath
    readonly xxl: LocationPath
}

export const cameraPositions: CameraPositions = {
    xs: {
        start: new Vector3(- 3, 5.2, 31),
        end: new Vector3(- 3.61, - 0.22, 4.2)
    },
    sm: {
        wrap: {
            start: new Vector3(- 3, 1.2, 22),
            end: new Vector3(- 3.61, - 2.89, 4.2)
        },
        side: {
            start: new Vector3(- 3, 2.2, 22),
            end: new Vector3(- 3.61, - 0.9, 4.1)
        }
    },
    tb: {
        start: new Vector3(- 2.7, 2.4, 20),
        end: new Vector3(- 3.6, - 1.04, 4.18)
    },
    lg: {
        start: new Vector3(- 2.7, 3.0, 20),
        end: new Vector3(- 3.61, - 0.05, 4.12)
    },
    xl: {
        start: new Vector3(- 2.5, 2.4, 19),
        end: new Vector3(- 3.62, - 0.25, 4.12)
    },
    xxl: {
        start: new Vector3(- 2.5, 2.4, 19),
        end: new Vector3(- 3.6, - 0.52, 4.12)
    }
}