import Image from "next/image";
import * as runtime from "react/jsx-runtime";

const useMDXComponents = (code) => {
    const fn = new Function(code);
    return fn({ ...runtime }).default;
};

const components = {
    Image,
};

export function MDXContent({ code }) {
    const Component = useMDXComponents(code);
    return <Component components={components} />;
}