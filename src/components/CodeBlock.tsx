'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CodeBlock as CodeBlockType } from '@/sanity/types';

interface CodeBlockProps {
  value: CodeBlockType;
}

export default function CodeBlock({ value }: CodeBlockProps) {
  const { language, code, filename } = value;

  // Colores para diferentes lenguajes
  const getLanguageColor = (lang?: string) => {
    switch (lang?.toLowerCase()) {
      case 'javascript':
      case 'js':
        return 'text-yellow-400';
      case 'typescript':
      case 'ts':
        return 'text-blue-400';
      case 'python':
        return 'text-green-400';
      case 'html':
        return 'text-orange-400';
      case 'css':
        return 'text-blue-300';
      case 'json':
        return 'text-purple-400';
      case 'bash':
      case 'shell':
        return 'text-gray-400';
      default:
        return 'text-zinc-400';
    }
  };

  // Mapear nombres de lenguajes para react-syntax-highlighter
  const getLanguageName = (lang?: string) => {
    if (!lang) return 'text';
    
    const langMap: { [key: string]: string } = {
      'js': 'javascript',
      'ts': 'typescript',
      'py': 'python',
      'sh': 'bash',
      'shell': 'bash',
    };
    
    return langMap[lang.toLowerCase()] || lang.toLowerCase();
  };

  // Tema personalizado basado en los colores que estábamos usando
  const customStyle = {
    ...oneDark,
    'pre[class*="language-"]': {
      ...oneDark['pre[class*="language-"]'],
      background: 'transparent',
      margin: 0,
      padding: 0,
    },
    'code[class*="language-"]': {
      ...oneDark['code[class*="language-"]'],
      background: 'transparent',
      fontSize: '0.875rem',
      lineHeight: '1.5',
    },
  };

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-zinc-700 bg-zinc-900">
      {/* Header con filename y lenguaje */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-800 border-b border-zinc-700">
        <div className="flex items-center gap-3">
          {/* Dots de ventana */}
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          
          {filename && (
            <span className="text-sm text-zinc-300 font-mono">
              {filename}
            </span>
          )}
        </div>
        
        {language && (
          <span className={`text-xs font-medium px-2 py-1 rounded ${getLanguageColor(language)} bg-zinc-700`}>
            {language.toUpperCase()}
          </span>
        )}
      </div>

      {/* Código */}
      <div className="relative">
        <div className="overflow-x-auto">
          <SyntaxHighlighter
            language={getLanguageName(language)}
            style={customStyle}
            customStyle={{
              background: 'transparent',
              padding: '1rem',
              margin: 0,
              fontSize: '0.875rem',
              lineHeight: '1.5',
            }}
            wrapLongLines={true}
            showLineNumbers={false}
          >
            {code}
          </SyntaxHighlighter>
        </div>
        
        {/* Botón de copiar */}
        <button
          onClick={() => navigator.clipboard.writeText(code)}
          className="absolute top-3 right-3 p-2 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700 rounded transition-colors"
          aria-label="Copy code"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
