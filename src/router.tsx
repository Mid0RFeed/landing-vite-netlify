import {
  createContext,
  type MouseEvent,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface RouterContextValue {
  path: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

function currentPath() {
  return window.location.pathname || "/";
}

function scrollToHash(hash: string) {
  if (!hash) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  requestAnimationFrame(() => {
    const target = document.getElementById(hash.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(currentPath);

  const navigate = useCallback((to: string) => {
    const nextUrl = new URL(to, window.location.origin);
    const nextPath = nextUrl.pathname || "/";
    const nextState = `${nextPath}${nextUrl.hash}`;

    if (`${window.location.pathname}${window.location.hash}` !== nextState) {
      window.history.pushState({}, "", nextState);
      setPath(nextPath);
    }

    scrollToHash(nextUrl.hash);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setPath(currentPath());
      scrollToHash(window.location.hash);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      scrollToHash(window.location.hash);
    }
  }, []);

  const value = useMemo(() => ({ path, navigate }), [path, navigate]);

  return (
    <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used inside RouterProvider");
  }
  return context;
}

export function RouteLink({
  to,
  children,
  className,
  onClick,
  ariaLabel,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  const { navigate } = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onClick?.();
    navigate(to);
  };

  return (
    <a href={to} className={className} onClick={handleClick} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
