import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { codeSnippet } from '../constant/code-snippet';





const AutoHighlightEditor = ({ typingSpeed = 50 }) => {
    const [displayedCode, setDisplayedCode] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < codeSnippet.length) {
            const timeout = setTimeout(() => {
                setDisplayedCode((prev) => prev + codeSnippet[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, typingSpeed);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, codeSnippet, typingSpeed]);

    return (
        <div className="overflow-hidden w-full max-w-2xl mx-auto rounded-xl border border-slate-800 bg-[#1d1f21] shadow-2xl font-mono" style={{ height: '30rem' }}>
            <div className="flex items-center justify-between px-4 py-2 bg-slate-800/50 border-b border-slate-700">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">PYTHON</span>
            </div>

            <div id="editor" className="h-full pb-4 relative overflow-y-scroll">

                <SyntaxHighlighter
                    wrapLines={true}
                    wrapLongLines={true}
                    lineProps={{
                        style: {
                            wordBreak: 'break-all', whiteSpace: 'pre-wrap', display: 'block',
                            textIndent: '-2em',
                            paddingLeft: '2em'
                        }
                    }}

                    language="python"
                    style={vscDarkPlus}
                    customStyle={{
                        margin: 0,
                        padding: '0.5rem',
                        fontSize: '1rem',
                        lineHeight: '1',
                        backgroundColor: 'transparent',
                        overflowY: 'hidden',

                    }}
                >
                    {displayedCode}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default AutoHighlightEditor;