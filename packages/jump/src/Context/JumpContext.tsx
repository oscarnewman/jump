import { createContext, ReactNode, useContext } from "react";

export type JumpSettings = {
  history: {
    push: (path: string) => void;
    goBack: () => void;
  };
  trackEvent?: (event: string, payload?: any) => void;
};

/**
 * A context containing  settings for jump
 */
export const JumpContext = createContext<JumpSettings>({
  history: {
    push: (path) => console.log(`[MOCK] Navigating to ${path}`),
    goBack: () => console.log(`[MOCK] Going back`),
  },
  trackEvent: (event, payload) =>
    console.log(`[MOCK] Tracking event`, { event, payload }),
});

type JumpProviderProps = {
  /** Settings object for jump */
  settings: JumpSettings;

  /** The children which will receive this context */
  children: ReactNode;
};
export const JumpProvider = ({ children, settings }: JumpProviderProps) => {
  if (!settings)
    throw new Error(
      "A JumpSettings object must be supplied to the JumpProvider"
    );

  return (
    <JumpContext.Provider value={settings}>{children}</JumpContext.Provider>
  );
};

export function useJump() {
  const context = useContext(JumpContext);
  if (!context) {
    throw new Error("A JumpProvider must be present in the component tree");
  }

  return context;
}
