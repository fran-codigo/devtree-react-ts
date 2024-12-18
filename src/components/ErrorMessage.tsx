export default function ErrorMessage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="border border-red-100 border-l-4 border-l-red-600 text-red-600 p-3 uppercase text-sm font-bold text-center">
      {children}
    </p>
  );
}
