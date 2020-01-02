import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel' 

const config = {
    input: 'src/components/SampleButton',
    external: ['react', 'prop-types', 'styled-components', 'polished'],
    output: {
        format: 'umd',
        name: 'samplebutton',
        globals: {
            react: "React",
            propTypes: "prop-types",
            styledComponents: "styled-components",
            polished: "polished"

        }
    },
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        uglify()
    ]
}
export default config