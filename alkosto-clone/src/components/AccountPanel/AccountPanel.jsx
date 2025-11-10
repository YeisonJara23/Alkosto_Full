import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function AccountPanel({ open, onClose, children }) {
  // ✅ El hook siempre se llama; dentro verificamos si está abierto
  useEffect(() => {
    if (!open) return; // no hacer nada si está cerrado

    const onKey = (e) => e.key === "Escape" && onClose?.();

    document.addEventListener("keydown", onKey);

    // guardar y bloquear scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  // ✅ Retorno condicional DESPUÉS del hook
  if (!open) return null;

  return createPortal(
    <>
      <div className="account-backdrop" onClick={onClose} />
      <div className="account-panel" role="dialog" aria-modal="true">
        {children}
      </div>
    </>,
    document.body
  );
}
