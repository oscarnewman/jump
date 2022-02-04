import "jump/dist/index.css";
import { Clickable, JumpProvider, JumpSettings } from "jump";
import { useRouter } from "next/router";

export default function Docs() {
  const router = useRouter();

  const settings: JumpSettings = {
    history: {
      goBack: router.back,
      push: router.push,
    },
    trackEvent: (event, payload) => console.log("TRACKING", { event, payload }),
  };

  return (
    <JumpProvider settings={settings}>
      <div>
        <h1>Docs Page</h1>
        <Clickable event="Tracked" leadingIcon="A" trailingIcon="B">
          Hi there
        </Clickable>
      </div>
    </JumpProvider>
  );
}
