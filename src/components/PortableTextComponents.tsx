import { PortableTextComponents } from 'next-sanity';
import CodeBlock from './CodeBlock';
import Callout from './Callout';
import ImageBlock from './ImageBlock';

export const portableTextComponents: PortableTextComponents = {
  types: {
    // Mapear el tipo 'codeBlock' de Sanity al componente CodeBlock
    codeBlock: ({ value }) => <CodeBlock value={value} />,
    
    // Mapear el tipo 'callout' de Sanity al componente Callout
    callout: ({ value }) => <Callout value={value} />,
    
    // Mapear el tipo 'image' de Sanity al componente ImageBlock
    image: ({ value }) => <ImageBlock value={value} />,
  },
  
  marks: {
    // Enlaces personalizados
    link: ({ children, value }) => {
      const rel = !value.href || value.href.startsWith('/') ? undefined : 'noreferrer noopener';
      const target = !value.href || value.href.startsWith('/') ? undefined : '_blank';
      
      return (
        <a
          href={value.href}
          rel={rel}
          target={target}
          className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/50 underline-offset-2 transition-colors"
        >
          {children}
        </a>
      );
    },
    
    // Código inline personalizado
    code: ({ children }) => (
      <code className="bg-zinc-800 text-blue-400 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
  
  block: {
    // Estilos para diferentes tipos de bloques
    normal: ({ children }) => (
      <p className="my-4 text-zinc-300 leading-relaxed">
        {children}
      </p>
    ),
    
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-zinc-100 mt-8 mb-4 flex items-center">
        <span className="mr-3 text-blue-400">#</span>
        {children}
      </h2>
    ),
    
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-zinc-100 mt-6 mb-3 flex items-center">
        <span className="mr-2 text-blue-400">##</span>
        {children}
      </h3>
    ),
    
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-zinc-100 mt-5 mb-2 flex items-center">
        <span className="mr-2 text-blue-400">###</span>
        {children}
      </h4>
    ),
    
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 bg-zinc-900/50 pl-6 py-4 my-6 italic text-zinc-300">
        {children}
      </blockquote>
    ),
  },
  
  list: {
    bullet: ({ children }) => (
      <ul className="my-4 space-y-2 list-none">
        {children}
      </ul>
    ),
    
    number: ({ children }) => (
      <ol className="my-4 space-y-2 list-none">
        {children}
      </ol>
    ),
  },
  
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start">
        <span className="text-blue-400 mr-3 mt-1.5 text-xs">●</span>
        <div className="flex-1 text-zinc-300">{children}</div>
      </li>
    ),
    
    number: ({ children, index = 0 }) => (
      <li className="flex items-start">
        <span className="text-blue-400 mr-3 mt-0.5 text-sm font-medium min-w-[1.5rem]">
          {index + 1}.
        </span>
        <div className="flex-1 text-zinc-300">{children}</div>
      </li>
    ),
  },
};
