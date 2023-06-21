import Image from 'next/image'
import { TextField, InputLabel, Chip, Popper, styled, Autocomplete } from '@mui/material'
import { filmsInitialState } from '@/assets/initial-states'
import { colors } from '@/assets/colors'
import s from '@/styles/works/LimitTags.module.css'

const StyledAutocomplete = styled(Autocomplete)(() => ({
    '& .MuiAutocomplete-inputRoot[class*="MuiInput-root"]': {
        gap: '3px',
        borderRadius: '5px 5px 0 0',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        padding: '5px 0 5px 5px'
    },
    '& .MuiAutocomplete-inputRoot[class*="MuiInput-root"]:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.15)'
    }
}))

const StyledPopper = styled(Popper)(() => ({
    '& .MuiAutocomplete-listbox': {
        color: colors.text.dark,
        backgroundColor: colors.bgColor.dark.sub,
    },
    '& .MuiAutocomplete-listbox li:hover': {
        backgroundColor: colors.main.default
    }
}))

export default function LimitTags({ setSelectTags }) {
    const handleTagSelection = value => {setSelectTags(() => value)}

    return (
        <div className={s.limit_tags}>
            <StyledAutocomplete
                multiple
                limitTags={4}
                id='size-small-outlined-multi'
                className={s.autocomplete}
                size='small'
                onChange={(_, value) => handleTagSelection(value)}
                options={filmsInitialState}
                getOptionLabel={option => option.title}
                defaultValue={[filmsInitialState[0], filmsInitialState[1]]}
                renderTags={(value, getTagProps) => 
                    value.map((option, i) => (
                        <Chip
                            key={i}
                            variant='tag'
                            label={option.title}
                            {...getTagProps({ i })}
                        />
                    ))
                }
                renderInput={(params) => (
                    <>
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
                PopperComponent={StyledPopper}
            />
        </div>

    )
}