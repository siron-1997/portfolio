import React from 'react'
import { createTheme } from '@mui/material/styles'
import { BREAK_POINT_MB, BREAK_POINT_TB, BREAK_POINT_LG, BREAK_POINT_XL, BREAK_POINT_XXL } from '@/assets/break-points'
import { colors } from '@/assets/colors'

declare module '@mui/material/styles' {
    interface TypographyVariants {
        logo: React.CSSProperties
        p: React.CSSProperties
        tag: React.CSSProperties
        label: React.CSSProperties
        label_name: React.CSSProperties
        navigation: React.CSSProperties & {
            '&::after'?: React.CSSProperties
            '&:hover::after'?: React.CSSProperties
        }
        model_navigation: React.CSSProperties & {
            '&:hover'?: React.CSSProperties
        }
        card_title: React.CSSProperties
        card_paragraph: React.CSSProperties & {
            '&:hover'?: React.CSSProperties
        }
    }
    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        logo: React.CSSProperties
        p: React.CSSProperties
        tag: React.CSSProperties
        label: React.CSSProperties
        label_name: React.CSSProperties
        navigation: React.CSSProperties & {
            '&::after'?: React.CSSProperties
            '&:hover::after'?: React.CSSProperties
        }
        model_navigation: React.CSSProperties & {
            '&:hover'?: React.CSSProperties
        }
        card_title: React.CSSProperties
        card_paragraph: React.CSSProperties & {
            '&:hover'?: React.CSSProperties
        }
    }
}
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        logo: true
        p: true
        tag: true
        label: true
        label_name: true
        navigation: true
        model_navigation: true
        card_title: true
        card_paragraph: true
    }
}

export const theme = createTheme(({
    breakpoints: {
        values: { xs: 0, sm: BREAK_POINT_MB, md: BREAK_POINT_TB, lg: BREAK_POINT_LG, xl: BREAK_POINT_XL }
    },
    palette: {
        mode: 'dark',
        primary: {
            main: colors.main.default,
            dark: colors.main.hover
        },
        error: {
            main: colors.error.default,
            dark: colors.error.hover
        }
    },
    typography: {
        fontFamily: ['Noto Sans JP', 'Roboto Slab', 'serif', 'sans-serif'].join(','),
        logo: {
            fontSize: 30,
            lineHeight: 1,
            color: colors.text.dark,
            opacity: 0.9,
            [`@media screen and (min-width: ${BREAK_POINT_MB}px)`]: {
                fontSize: 35
            },
            [`@media screen and (min-width: ${BREAK_POINT_TB}px)`]: {
                fontSize: 38
            }
        },
        h1: {
            fontSize: 35,
            fontWeight: 700,
            lineHeight: 1.5,
            color: colors.text.dark,
            opacity: 0.9,
            marginBottom: 20,
            [`@media screen and (min-width: ${BREAK_POINT_MB}px)`]: {
                fontSize: 45,
                marginBottom: 25
            },
            [`@media screen and (min-width: ${BREAK_POINT_TB}px)`]: {
                fontSize: 50
            },
            [`@media screen and (min-width: ${BREAK_POINT_LG}px)`]: {
                fontSize: 55,
                marginBottom: 30
            }
        },
        h2: {
            fontSize: 25,
            fontWeight: 700,
            lineHeight: 1.5,
            color: colors.text.dark,
            opacity: 0.9,
            marginBottom: 10,
            [`@media screen and (min-width: ${BREAK_POINT_MB}px)`]: {
                fontSize: 35,
                marginBottom: 15
            },
            [`@media screen and (min-width: ${BREAK_POINT_TB}px)`]: {
                fontSize: 40
            },
            [`@media screen and (min-width: ${BREAK_POINT_LG}px)`]: {
                fontSize: 45
            }
        },
        h3: {
            fontSize: 20,
            fontWeight: 700,
            lineHeight: 1.5,
            color: colors.text.dark,
            opacity: 0.9,
            marginBottom: 15,
            [`@media screen and (min-width: ${BREAK_POINT_MB}px)`]: {
                fontSize: 25
            },
            [`@media screen and (min-width: ${BREAK_POINT_TB}px)`]: {
                fontSize: 30,
                marginBottom: 20
            },
            [`@media screen and (min-width: ${BREAK_POINT_LG}px)`]: {
                fontSize: 35
            }
        },
        h4: {
            fontSize: 20,
            fontWeight: 600,
            lineHeight: 1.5,
            color: colors.text.dark,
            opacity: 0.9,
            marginBottom: 15,
            [`@media screen and (min-width: ${BREAK_POINT_MB}px)`]: {
                fontSize: 22
            },
            [`@media screen and (min-width: ${BREAK_POINT_TB}px)`]: {
                fontSize: 24
            },
            [`@media screen and (min-width: ${BREAK_POINT_LG}px)`]: {
                fontSize: 26,
                marginBottom: 20
            }
        },
        h5: {
            fontSize: 18,
            fontWeight: 600,
            lineHeight: 1.5,
            color: colors.text.dark,
            opacity: 0.9,
            marginBottom: 5,
            [`@media screen and (min-width: ${BREAK_POINT_MB}px)`]: {
                fontSize: 20
            },
            [`@media screen and (min-width: ${BREAK_POINT_TB}px)`]: {
                fontSize: 22
            },
            [`@media screen and (min-width: ${BREAK_POINT_LG}px)`]: {
                fontSize: 24,
                marginBottom: 10
            }
        },
        h6: {
            fontSize: 20,
            fontWeight: 700,
            lineHeight: 1.5,
            color: colors.text.dark,
            opacity: 0.9,
            marginBottom: 15,
            [`@media screen and (min-width: ${BREAK_POINT_LG}px)`]: {
                fontSize: 22,
                marginBottom: 20
            }
        },
        p: {
            fontWeight: 400,
            opacity: 0.75,
            lineHeight: 1.5,
            color: colors.text.dark,
        },
        tag: {
            fontSize: 15,
            fontWeight: 600,
            lineHeight: 1.2,
            backgroundColor: colors.main.default,
            borderRadius: 6,
            padding: '5px 10px'
        },
        label: {
            color: colors.text.dark,
            fontSize: 13,
            fontWeight: 500,
            lineHeight: 1,
            backgroundColor: colors.error.default,
            borderRadius: 5,
            padding: '4px 6px'
        },
        label_name: {
            color: colors.text.dark
        },
        navigation: {
            position: 'relative',
            '&::after': {
                position: 'absolute',
                left: 0,
                bottom: - 6,
                content: '""',
                width: '100%',
                height: 1.5,
                background: colors.navigation,
                transform: 'scale(0, 1)',
                transformOrigin: 'center top',
                transition: 'transform 0.3s'
            },
            '&:hover::after': {
                transform: 'scale(1, 1)'
            }
        },
        model_navigation: {
            color: colors.text.dark,
            fontSize: 15,
            lineHeight: 1.2,
            letterSpacing: 1,
            borderRadius: 8,
            border: `1px solid ${colors.text.dark}`,
            cursor: 'pointer',
            padding: '1px 5px',
            '&:hover': {
                color: colors.text.dark
            }
        },
        card_title: { // WorkCard タイトル
            fontWeight: 600
        },
        card_paragraph: { // WorkCard 段落
            textDecoration: 'none',
            transition: 'all 0.3s',
            '&:hover': {
                textDecoration: 'underline',
                textDecorationThickness: 1,
                textUnderlineOffset: 5
            }
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    color: colors.text.dark,
                    backgroundColor: colors.main.default,
                    '&:hover': {
                        backgroundColor: colors.main.hover
                    }
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    color: colors.text.dark,
                    backgroundColor: colors.main.default,
                    fontSize: 15,
                    fontWeight: 600,
                    border: `1px solid ${colors.main.hover}`,
                    '& .MuiChip-deleteIcon': {
                        color: colors.text.dark
                    },
                    '&:hover': {
                        color: colors.text.dark,
                        backgroundColor: colors.main.hover,
                        '& .MuiChip-deleteIcon': {
                            color: colors.text.dark
                        }
                    }
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    '& .MuiAutocomplete-inputRoot': {
                        gap: '3px',
                        borderRadius: '5px 5px 0 0',
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        padding: '5px 0 5px 5px',
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.15)'
                        }
                    },
                    '& .MuiAutocomplete-listbox': {
                        color: colors.text.dark,
                        backgroundColor: colors.bgColor.dark.sub,
                    },
                    '& .MuiAutocomplete-listbox li': {
                        '&:hover': {
                            backgroundColor: colors.main.default
                        }
                    }
                }
            }
        },
        // MuiPopper: {
        //     root: {
        //         root: {
        //             '& .MuiAutocomplete-listbox': {
        //                 color: colors.text.dark,
        //                 backgroundColor: colors.bgColor.dark.sub,
        //             },
        //             '& .MuiAutocomplete-listbox li': {
        //                 '&:hover': {
        //                     backgroundColor: colors.main.default
        //                 }
        //             }
        //         }
        //     }
        // }
    }
}))