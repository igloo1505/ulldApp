"use client";
import { MathJaxContext } from "better-react-mathjax";
import React, { ReactNode } from "react";

interface MathjaxProviderProps {
    children: ReactNode;
    online: boolean
    className?: string
}

declare global {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface WindowEventMap {
        "mathjax-loaded": CustomEvent;
    }
}

const MathjaxProvider = ({ children, online, className }: MathjaxProviderProps) => {
    return (
        <MathJaxContext
            config={{
                tex: {
                    inlineMath: [["$", "$"]],
                    displayMath: [["$$", "$$"]],
                },
                startup: {
                    ready: () => {
                        /* @ts-ignore */
                        MathJax.startup.defaultReady();
                        /* @ts-ignore */
                        MathJax.startup.promise.then(() => {
                            window.dispatchEvent(new CustomEvent("mathjax-loaded"))
                        });
                    },
                },
            }}
            src={
                online
                    ? "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
                    : "/utils/tex-chtml.js"
            }
            onLoad={() => {
                window.dispatchEvent(new CustomEvent("mathjax-loaded"));
            }}
        >
            {className ? <div className={className}>{children}</div> : children}
        </MathJaxContext>
    );
};

MathjaxProvider.displayName = "MathjaxProvider";

export default MathjaxProvider;
