export default function ToastNotification({ toast }) {
  if (!toast) return null;

  return (
    <div className={`toast ${toast.type === "error" ? "border-l-red-400" : ""}`}>
      {toast.msg}
    </div>
  );
}