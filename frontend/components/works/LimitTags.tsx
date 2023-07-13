import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import { TextField, InputLabel, Chip, Popper, Autocomplete } from '@mui/material'
import { useWindowSize } from '@/utils/hooks'
import { limitTagsAnimation } from '@/animations/components/works'
import { filmsInitialState } from '@/assets/contact-initial-states'
import { BREAK_POINT_MB } from '@/assets/break-points'
import s from '@/styles/works/LimitTags.module.css'

type Props = {
    setSelectTags: any
}

const LimitTags: React.FC<Props> = ({ setSelectTags }) => {
    const limitTagsRef = useRef<HTMLDivElement | null>(null)
    const { width } = useWindowSize()

    const handleTagSelection = (value: any): void => {
        setSelectTags(value)
    }

    useEffect(() => {
        const ctx = limitTagsAnimation({
            limitTags: limitTagsRef.current,
            limitTagsRef
        })

        return () => ctx.revert()
    }, [])

    return (
        <div className={s.limit_tags} ref={limitTagsRef}>
            <Autocomplete
                multiple
                limitTags={width < BREAK_POINT_MB ? 2 : 4}
                id='size-small-outlined-multi'
                className={s.autocomplete}
                size='small'
                onChange={(_, value) => handleTagSelection(value)}
                options={filmsInitialState}
                getOptionLabel={option => option.title}
                defaultValue={[filmsInitialState[0], filmsInitialState[1], filmsInitialState[2]]}
                renderTags={(value, getTagProps) => value.map(option => (
                    <Chip key={option.key} label={option.title} {...getTagProps({ index: option.key })} />
                ))}
                renderInput={(params) => (
                    <>
                        {/* フィルター アイコン */}
                        <div className={s.filter_container}>
                            <InputLabel htmlFor='size-small-outlined-multi' className={s.label}>
                                <Image
                                    src='/icons/tune_white.svg'
                                    alt='filters'
                                    width={40}
                                    height={40}
                                    priority={true}
                                />
                            </InputLabel>
                            <TextField
                                {...params}
                                variant='standard'
                            />
                        </div>
                    </>
                )}
                PopperComponent={Popper}
            />
        </div>

    )
}

export default LimitTags