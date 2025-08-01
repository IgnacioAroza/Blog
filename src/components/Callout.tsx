import { PortableText } from 'next-sanity';
import { Callout as CalloutType } from '@/sanity/types';

interface CalloutProps {
  value: CalloutType;
}

export default function Callout({ value }: CalloutProps) {
  const { type, content } = value;

  // Configuración para cada tipo de callout
  const getCalloutConfig = (calloutType: string) => {
    switch (calloutType) {
      case 'info':
        return {
          icon: '💡',
          bgColor: 'bg-blue-950/20',
          borderColor: 'border-blue-500/50',
          iconBg: 'bg-blue-500/20',
          iconColor: 'text-blue-400'
        };
      case 'warning':
        return {
          icon: '⚠️',
          bgColor: 'bg-amber-950/20',
          borderColor: 'border-amber-500/50',
          iconBg: 'bg-amber-500/20',
          iconColor: 'text-amber-400'
        };
      case 'error':
        return {
          icon: '❌',
          bgColor: 'bg-red-950/20',
          borderColor: 'border-red-500/50',
          iconBg: 'bg-red-500/20',
          iconColor: 'text-red-400'
        };
      case 'success':
        return {
          icon: '✅',
          bgColor: 'bg-green-950/20',
          borderColor: 'border-green-500/50',
          iconBg: 'bg-green-500/20',
          iconColor: 'text-green-400'
        };
      case 'tip':
        return {
          icon: '🚀',
          bgColor: 'bg-purple-950/20',
          borderColor: 'border-purple-500/50',
          iconBg: 'bg-purple-500/20',
          iconColor: 'text-purple-400'
        };
      default:
        return {
          icon: '📝',
          bgColor: 'bg-zinc-900/50',
          borderColor: 'border-zinc-700',
          iconBg: 'bg-zinc-700/50',
          iconColor: 'text-zinc-400'
        };
    }
  };

  const config = getCalloutConfig(type);

  return (
    <div className={`my-6 rounded-lg border ${config.borderColor} ${config.bgColor} p-4`}>
      <div className="flex gap-3">
        {/* Icono */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full ${config.iconBg} flex items-center justify-center`}>
          <span className="text-lg">{config.icon}</span>
        </div>
        
        {/* Contenido */}
        <div className="flex-1 min-w-0">
          <div className="prose prose-invert prose-zinc prose-sm max-w-none">
            {Array.isArray(content) && <PortableText value={content} />}
          </div>
        </div>
      </div>
    </div>
  );
}
