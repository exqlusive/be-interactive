module.exports = {
    purge: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
        },
        fontFamily: {
            'sans': ['Poppins', 'sans-serif']
        },
    },
    variants: {
        extend: {
            backgroundColor: ['odd'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
