import {block} from 'million/react'

const Input = ({ ...props }) => (
    <input
        {...props}
        className={`${props.className || ""
            } w-full px-3 py-2 text-gray-400 outline-none border border-gray-800 shadow-sm rounded-lg duration-150`}
    />
);

export default Input;