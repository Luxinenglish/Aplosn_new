// useConsoleTroll.js
import { useEffect } from "react";

export function useConsoleTroll({
  stickerUrl,
  once = true,
  prefix = "[APP]",
} = {}) {
  useEffect(() => {
    // évite de re-loguer en dev strict mode (double mount)
    if (once && window.__consoleTrollShown) return;
    window.__consoleTrollShown = true;

    const styleTitle =
      "background:#7c3aed;color:#fff;padding:6px 10px;border-radius:8px;font-weight:800";
    const styleSub = "color:#7c3aed;font-style:italic";

    console.clear?.();
    console.log("%c👹 Coucou dev curieux !", styleTitle);
    console.log("%cTu as ouvert la console ? Bienvenue. 😈", styleSub);
    console.log("%c" +
        " /$$                                       \n" +
        "| $$                                       \n" +
        "| $$       /$$   /$$ /$$   /$$             \n" +
        "| $$      | $$  | $$|  $$ /$$/             \n" +
        "| $$      | $$  | $$ \\  $$$$/              \n" +
        "| $$      | $$  | $$  >$$  $$              \n" +
        "| $$$$$$$$|  $$$$$$/ /$$/\\  $$             \n" +
        "|________/ \\______/ |__/  \\__//$$$$$$      \n" +
        "                             |______/      \n" +
        "                                           \n" +
        "                                           ", styleSub);

    // badge
    console.log(
      "%c TROLL %c active ",
      "background:#111;color:#fff;border-radius:6px 0 0 6px;padding:2px 8px",
      "background:#22c55e;color:#111;border-radius:0 6px 6px 0;padding:2px 8px"
    );

    // groupe replié
    console.groupCollapsed(
      "%c🕵️ Indices secrets (clique pour ouvrir)",
      "color:#0ea5e9;font-weight:700"
    );
    console.log("Tape help() pour… pas d’aide. Juste du troll. 😂");
    console.groupEnd();

    // arc-en-ciel
    const rainbow = (txt) =>
      console.log(
        ...[...txt].map((ch) => `%c${ch}`),
        ...[...txt].map((_, i) => `color:hsl(${(i * 20) % 360} 90% 55%);font-weight:700`)
      );
    rainbow("TROLL TROLL TROLL");

    // sticker image (optionnel)
    if (stickerUrl) {
      const w = 360,
        h = 180;
      const s = [
        `background:url("${stickerUrl}") center/contain no-repeat`,
        `padding:${h / 2}px ${w / 2}px`,
        "line-height:0",
        "color:transparent",
      ].join(";");
      console.log("%c ", s);
    }

    // petit prefix pour les logs app (sans casser les erreurs/warn)
    const _log = console.log.bind(console);
    console.log = (...args) => _log("%c" + prefix, "color:#10b981;font-weight:700", ...args);

    // petite API fun
    window.help = () =>
      console.log("%cPas d’aide. Juste du troll. 😂", "color:#a855f7;font-size:14px");
  }, [once, prefix, stickerUrl]);
}
