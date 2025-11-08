import Link from 'next/link';

interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
    return (
        <Link href="/" className="flex items-center gap-3 group">
            {/* Modern Professional Logo */}
            <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple_blue to-indigo-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white dark:border-dark_black"></div>
            </div>
            <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-purple_blue to-indigo-600 bg-clip-text text-transparent">
                    Apna Ghar
                </span>
                <span className="text-xs font-medium text-dark_black/60 dark:text-white/60">
                    Your Learning Companion
                </span>
            </div>
        </Link>
    );
};

export default Logo;
